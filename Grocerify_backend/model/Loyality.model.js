import mongoose from "mongoose";

export const LoyalitySchema = new mongoose.Schema({
    points: { type: Number },
    status: { type: Boolean, default: true },
    order_amonut: { type: Number },
    points_on_reg: { type: Number },
    points_on_first_order: { type: Number },
    loyality_point_redeem_limit: { type: Number },
});

export default mongoose.model.Loyalitys || mongoose.model('Loyality', LoyalitySchema);