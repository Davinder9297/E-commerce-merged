import mongoose from 'mongoose'
import ProductsModel from './Products.model.js'
import UserModel from './User.model.js'
import { AddressSchema } from './Address.model.js'

export const OrdersSchema = new mongoose.Schema({
	order_id: {
		type: String,
		unique: true,
	},
    ordered_by:{
        type: mongoose.Schema.Types.ObjectId,
		ref: UserModel,
    },
	shop:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Shop',
	},
	status: {
		type: String,
		enum: ['ordered', 'delivered', 'shipped', 'processed', 'cancelled', 'pickuped'],
		default: 'ordered',
	},
	ordered_on: {
		type: Date,
	},
	discount_coupon: {
		coupon_code: {
			type: String,
			default: null,
		},
		discount_price: {
			type: Number,
			default: null,
		},
	},
	delivered_on: {
		type: Date,
		default: null,
	},
	shipping_address: {
		type: AddressSchema,
	},
	products: [
		{
			productid: {
				type: mongoose.Schema.Types.ObjectId,
				ref: ProductsModel,
			},
			quantity: {
				type: Number,
			}
		}
	],
	order_price: {
		type: Number,
	},
	payment_method: {
		type: String,
		enum: ['cod', 'card', 'upi']
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

export default mongoose.model.Orders || mongoose.model('Orders', OrdersSchema)
