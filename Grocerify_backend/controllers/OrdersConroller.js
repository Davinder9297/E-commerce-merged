import productsModel from '../model/Products.model.js'
import OrdersModel from '../model/Orders.model.js'
import ShopModel from '../model/Shop.model.js'
import DeliveryboyModel from '../model/Deliveryboy.model.js'
// helper function
function percentage(percent, total) {
	return ((percent / 100) * total).toFixed(2)
}

const generateUniqueOrderID = () => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let randomString = ''

	// Generate a random string of capital letters
	for (let i = 0; i < 5; i++) {
		randomString += characters.charAt(
			Math.floor(Math.random() * characters.length)
		)
	}

	// Use current timestamp as a part of the order ID
	const timestamp = Date.now().toString(36)

	// Combine timestamp and random portion to create the order ID
	let uniqueOrderID = (timestamp + randomString).toUpperCase()

	// If the length exceeds 10 characters, truncate it
	if (uniqueOrderID.length > 10) {
		uniqueOrderID = uniqueOrderID.substr(0, 10)
	}

	// If the length is less than 10 characters, pad it with additional random characters
	while (uniqueOrderID.length < 10) {
		uniqueOrderID += characters.charAt(
			Math.floor(Math.random() * characters.length)
		)
	}

	return uniqueOrderID
}

/** POST: http://localhost:8080/api/order 
 * @param: {
    "header" : "Bearer <token>"
}
body: {
    "discount_coupon":{
        "coupon_code":"NEW-100",
        "discount_price":"50"
    },
    "shipping_address":{ -- address_object
        "full_name": "Hoping Minds",
        "address_line_1": "Sectore-75",
        "address_line_2": "Corporate Greens",
        "landmark": "2nd Floor",
        "city": "Mohali",
        "state": "Mohali",
        "country": "India",
        "latitude": "-10937484.3829",
        "longitude": "3249323.32333",
        "mobile": 9814740275,
        "zip": 144002,
        "type": "Office"
    },
    "products":[
        {
            "productid":"65d2fdd5020dd810551d66e7",
            "quantity":2,
			"shopid": "65d2fdd5020dd810551d36e9"
        },
        {
            "productid":"65d2fdd5020dd810551d66e3",
            "quantity":1,
			"shopid": "65d2fdd5020dd810551d66e9"
        }
    ],
}
*/
export async function order(req, res) {
    try {
        const { userID } = req.user;
        const { discount_coupon, shipping_address, products, shopid, payment_method } = req.body;

        if (!userID) {
            return res.status(401).send({ error: 'User Not Found...!' });
        }

        const shop = await ShopModel.findOne({ _id: shopid });
        if (!shop) {
            return res.status(404).send({ error: `Shop with ID ${shopid} not found` });
        }

        const orders = [];
        let totalPrice = 0;

        // Group products by productid
        const productGroups = {};
        for (const item of products) {
            const { productid, quantity } = item;
            if (!productGroups[productid]) {
                productGroups[productid] = { productid, quantity: 0 };
            }
            productGroups[productid].quantity += quantity;
        }

        // Fetch and process each product group
        for (const groupId of Object.keys(productGroups)) {
            const { productid, quantity } = productGroups[groupId];
            const product = await productsModel.findById(productid);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: `Product with ID ${productid} not found`,
                });
            }

            const store = product.stores.find(store => store.store.toString() === shopid);
            if (!store) {
                return res.status(404).json({
                    success: false,
                    message: `Product with ID ${productid} is not available in shop with ID ${shopid}`,
                });
            }

            let calculatedPrice =
                (store.variants1_mrp_price -
                    percentage(
                        store['variants1_discount_per'],
                        store.variants1_mrp_price
                    )) *
                    quantity -
                discount_coupon.discount_price;
            totalPrice += calculatedPrice;

            orders.push({
                productid,
                quantity,
            });
        }

        // Create the order entry
        const order = {
            order_id: generateUniqueOrderID(),
            discount_coupon,
            shipping_address,
            products: orders, // Inserting products directly
            order_price: totalPrice,
            ordered_on: new Date(),
            ordered_by: userID,
            shop: shopid,
            payment_method
        };

        // Insert the order
        await OrdersModel.create(order);

        res.status(201).json({
            success: true,
            msg: 'Ordered successfully',
            total_price: totalPrice,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error' });
    }
}

/** GET: http://localhost:8080/api/getorders
 * @param: {
    "header" : "Bearer <token>"
}
*/
export async function getorders(req, res) {
	const { userID } = req.user
	try {
		// Find the cart document and populate the products field with product data
		const orders = await OrdersModel.find({ ordered_by: userID }).populate({
            path: 'products.productid',
            select: '-stores -password -drivingLicense -earnings -PanCard -Aadhar'
        })
        .populate({
            path: 'shop',
            select: '-products'
        });

        let orders_data = await Promise.all(orders.map(async (order) =>{
            const deliveryBoy = await DeliveryboyModel.find({ all_orders: { $in: [order._id] } }).select('-all_orders');
            return {...order.toObject(), deliveryBoy};
        }));

		if (!orders) {
			return res
				.status(404)
				.json({ success: false, message: 'No orders history!' })
		}

		res.status(200).json({ success: true, orders: orders_data })
	} catch (error) {
		console.error(error)
		res.status(500).json({
			success: false,
			message: 'Internal server error',
		})
	}
}

/** GET: http://localhost:8080/api/getallorders*/
export async function getallorders(req, res) {
	try {
		// Find the cart document and populate the products field with product data
		const orders = await OrdersModel.find({}).populate({
            path: 'products.productid',
            select: '-stores'
        })
        .populate({
            path: 'ordered_by',
            select: '-password'
        })
        .populate({
            path: 'shop',
            select: '-products'
        });

		if (!orders) {
			return res
				.status(404)
				.json({ success: false, message: 'No orders history!' })
		}

		res.status(200).json({ success: true, orders: orders })
	} catch (error) {
		console.error(error)
		res.status(500).json({
			success: false,
			message: 'Internal server error',
		})
	}
}

/** GET: http://localhost:8080/api/getdeliveryorders*/
export async function getdeliveryorders(req, res) {
	try {
		const orders = await OrdersModel.find({status: 'shipped'}).populate({
            path: 'products.productid',
            select: '-stores'
        })
        .populate({
            path: 'ordered_by',
            select: '-password'
        })
        .populate({
            path: 'shop',
            select: '-products'
        });

		if (!orders) {
			return res
				.status(404)
				.json({ success: false, message: 'No orders history!' })
		}

		res.status(200).json({ success: true, orders: orders })
	} catch (error) {
		console.error(error)
		res.status(500).json({
			success: false,
			message: 'Internal server error',
		})
	}
}


/** GET: http://localhost:8080/api/getorderdetailsbyid/order_id*/
export async function getOrderDetailsById(req, res) {
	try {
		let {order_id} = req.params
		// Find the cart document and populate the products field with product data
		const order = await OrdersModel.findById(order_id)
        .populate({
            path: 'products.productid',
            select: '-stores'
        })
        .populate({
            path: 'ordered_by',
            select: '-password'
        })
        .populate({
            path: 'shop',
            select: '-products'
        });


		if (!order) {
			return res
				.status(404)
				.json({ success: false, message: 'No order history!' })
		}

		res.status(200).json({ success: true, order })
	} catch (error) {
		console.error(error)
		res.status(500).json({
			success: false,
			message: 'Internal server error',
		})
	}
}


/** GET: http://localhost:8080/api/getordersgroupbyuser/:shopid */
export async function getordersgroupbyuser(req, res) {
	try {
        const { shopid } = req.params
		// Aggregate the orders to group by ordered_by._id
		const orders = await OrdersModel.find({shop:shopid})
        // .populate({
        //     path: 'products.productid',
        //     select: '-stores'
        // })
        .populate({
            path: 'ordered_by',
            select: '-password'
        })
        // .populate({
        //     path: 'shop',
        //     select: '-products'
        // });

        const groupedOrders = orders.reduce((acc, order) => {
            const key = order.ordered_by._id;
            if (!acc[key]) {
                acc[key] = {
                    ordered_by: order.ordered_by,
                    orders: []
                };
            }
            acc[key].orders.push(order);
            return acc;
        }, {});
        
        // Convert the keys to numerical indices and keep orders as an array
        const indexedGroupedOrders = Object.values(groupedOrders).reduce((acc, orderData, index) => {
            acc.push(orderData);
            return acc;
        }, []);  

		if (!orders) {
			return res.status(404).json({ success: false, message: 'No orders history!' });
		}

		res.status(200).json({ success: true, orders: indexedGroupedOrders });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: 'Internal server error',
		});
	}
}