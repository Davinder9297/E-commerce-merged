import ReviewsModel from "../model/Reviews.model.js";

export async function addReview(req, res) {
    const { userID } = req.user;
    const body = req.body;

    if (!userID) return res.status(401).send({ error: 'User Not Found...!' });

    const { product, review, rating } = body;

    if ( !product, !rating ) {
        return res.status(400).send({ error: true, message: 'productid and rating is required!' });
    }

    try {

        const existingReview = await ReviewsModel.findOne({ product, reviewBy: userID });

        if (existingReview) {
            return res.status(400).send({ error: true, message: 'You have already reviewed this product.' });
        }

        const newReview = new ReviewsModel({
            product,
            reviewBy: userID,
            review,
            rating
        });

        await newReview.save();

        return res.status(201).send({ error: false, message: 'Review added successfully.', review: newReview });
    } catch (error) {
        return res.status(500).send({ error: true, message: 'Failed to add review. Please try again later.' });
    }
}


export async function getReviewsForProduct(req, res) {
    const { productId } = req.params;

    try {
        const reviews = await ReviewsModel.find({ product: productId }).populate('reviewBy', 'firstName lastName profile');

        res.status(200).json({ error: false, reviews: reviews });
    } catch (error) {
        // Handle errors
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: true, message: 'Failed to fetch reviews. Please try again later.' });
    }
}