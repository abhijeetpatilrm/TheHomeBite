const orderModel = require('../models/order');
const foodModel = require('../models/food');
const mailSender = require("../utils/mailSender");
const { paymentUsEmail } = require("../mail/templates/paymentFormRes");
const { updateOrderMail } = require("../mail/templates/updateOrderMail");

exports.addOrder = async (req, res) => {
    try {
        const user = req.user._id;
        if (!user)
            return res.status(400).json({ message: "Please Login to make orders" });
        const data = req.body;

        const obj = { user, ...data };

        const order = await orderModel.create(obj);


        const food = await foodModel.findById(data.food);
        const quantity = food.quantity - data.quantity;
        await foodModel.findByIdAndUpdate(food._id, { $set: { quantity } });


        try {
            const emailRes = await mailSender(
                data.email,
                "Order Placed Successfully",
                paymentUsEmail(data.email, data.quantity, data.totalAmount, data.paymentId, order._id)
            );

            return res.json({
                success: true,
                message: "Email sent successfully",
            });
        } catch (error) {
            return res.status(200).json({ order });
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: error.message });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const user = req.user._id;
        if (!user)
            return res.status(400).json({ message: "Please Login to fetch orders" });

        const orders = await orderModel.find({ user })
            .populate({
                path: 'food',
            })
            .populate({
                path: 'user',
                select: '-password',
            })
            .populate({
                path: 'provider',
                select: '-password',
            });
        if (!orders)
            return res.status(404).json({ message: "No orders Found" });

        return res.status(200).json({ orders });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getProvidersOrders = async (req, res) => {
    try {
        const provider = req.provider._id;
        if (!provider)
            return res.status(400).json({ message: "Please Login to fetch orders" });

        const orders = await orderModel.find({ provider }).populate("user food").sort({ createdAt: -1 });

        if (!orders)
            return res.status(404).json({ message: "No orders Found" });

        return res.status(200).json({ orders });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { _id } = req.params;
        if (!_id)
            return res.status(404).json({ message: "Invalid Request" });

        await orderModel.findByIdAndDelete(_id);

        return res.status(200).json({ message: "Order Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {

        const status = req.body.status;
        const id = req.body._id;
        const email = req.body.user;
        if (!id) {
            return res.status(400).json({ message: "No Order Found" });
        }

        const myOrder = await orderModel.findById(id);

        if (status !== "Delivered") {
            const quantity = myOrder.quantity + req.body.food.quantity;
            await foodModel.findByIdAndUpdate(req.body.food._id, { $set: { quantity } });
        }

        const updatedOrder = await orderModel.findByIdAndUpdate(id, { orderStatus: status }, { new: true }).populate("user food");
                try {
            const emailRes = await mailSender(
                updatedOrder.email,
                "Order Updated Successfully",
                updateOrderMail(updatedOrder._id, updatedOrder.email, updatedOrder.orderStatus)
            )

            // return res.json({
            //   success: true,
            //   message: "Email send successfully",
            // })
        } catch (error) {

            console.error("Email sending failed:", error.message);
        }
        return res.status(200).json({ updatedOrder });
    } catch (error) {
        console.error("Order status update failed:", error.message);
        return res.status(500).json({ message: error.message });
    }
};