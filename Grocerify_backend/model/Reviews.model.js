import mongoose from "mongoose";

export const ReviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'inventories',
    },
    reviewBy: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
    },
    review:{
        type: String,
        default: null
    },
    rating:{
        type: Number,
        default: 0,
        min: [0, 'The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).'],
        max: [5, 'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).']
    },
    createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model.Reviews || mongoose.model('Review', ReviewSchema);