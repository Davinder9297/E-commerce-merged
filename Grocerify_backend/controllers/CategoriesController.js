import categoriesModel from '../model/Categories.model.js'

/** POST: http://localhost:8080/api/addtocart
body: {
    "Category_Name": "Category Name",
    "Category_image":"https://Category_image.png"
}
*/
export async function addcategory(req, res) {
	try {
		const { Category_Name, Category_image } = req.body

		const existingCategory = await categoriesModel.findOne({
			Category_Name,
		})

		if (existingCategory) {
			return res
				.status(400)
				.json({ error: 'Category with this name already exists' })
		}

		const newCategory = new categoriesModel({
			Category_Name,
			Category_image,
		})

		await newCategory.save()

		return res.status(201).json({
			message: 'Category added successfully',
			category: newCategory.Category_Name,
		})
	} catch (error) {
		console.error('Error adding category:', error)
		return res.status(500).json({ error: 'Internal server error' })
	}
}


/** POST: http://localhost:8080/api/addsubcategory
 *body: {
    "categoryId":"65d4870439fa99e034c2c4dc",
    "Subcategory_Name": "Phones",
    "Subcategory_image":"https://5.imimg.com/data5/SELLER/Default/2020/10/GQ/OO/TO/113528383/mobile-phones-new-refurbished.jpeg"
}
 */
export async function addsubcategory(req, res) {
	try {
		const { Subcategory_Name, Subcategory_image, categoryId } = req.body

		const category = await categoriesModel.findById(categoryId)

		if (!category) {
			return res.status(404).json({ error: 'Category not found' })
		}

		const existingSubcategory = category.Subcategories.find(
			(subcategory) => subcategory.Subcategory_Name === Subcategory_Name
		)

		if (existingSubcategory) {
			return res
				.status(400)
				.json({
					error: 'Subcategory with this name already exists in the category',
				})
		}

		category.Subcategories.push({ Subcategory_Name, Subcategory_image })

		await category.save()

		return res
			.status(201)
			.json({ message: 'Subcategory added successfully'})
	} catch (error) {
		console.error('Error adding subcategory:', error)
		return res.status(500).json({ error: 'Internal server error' })
	}
}

/** GET: http://localhost:8080/api/categories */
export async function getcategories(req, res) {
	try {
        const categories = await categoriesModel.find({})

        if (!categories) {
            return res.status(404).json({ success: false, message: 'Categories not found' });
        }

        res.status(200).json({ success: true, categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

/** GET: http://localhost:8080/api/categories/:categoryname */
export async function getsubcategories(req, res) {
	try {
		const { categoryname } = req.params
        const categories = await categoriesModel.findOne({Category_Name: categoryname})

        if (!categories) {
            return res.status(404).json({ success: false, message: 'Categories not found' });
        }

        res.status(200).json({ success: true, subcategories:categories.Subcategories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

/** PUT: http://localhost:8080/api/updatecategory/:categoryID */
export async function updatecategory(req, res) {
	try {
		const {categoryID} = req.params;
		const categoryData = req.body;
        
        // Find the existing category by ID and update it
		let category = await categoriesModel.findByIdAndUpdate(categoryID, categoryData, { new: true });

        // Check if the category exists
		if (!category) {
			return res.status(404).json({ success: false, msg: 'category not found' });
		}

		res.status(200).json({ success: true, msg: 'category updated successfully', data: category });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, msg: 'Internal server error' });
	}
}

/** delete: http://localhost:8080/api/deletecategory/:categoryId */
export async function deletecategory(req, res) {
	try {
		const {categoryId} = req.params;

		// Find the category by ID and delete it
		const deletedcategory = await categoriesModel.findByIdAndDelete(categoryId);

		// Check if the category exists
		if (!deletedcategory) {
			return res.status(404).json({ success: false, msg: 'category not found' });
		}

		res.status(200).json({ success: true, msg: 'category deleted successfully', data: deletedcategory });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, msg: 'Internal server error' });
	}
}