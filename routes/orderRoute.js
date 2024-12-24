import express from "express";
import {
  listOrders,
  placeOrder,
  updateStatus,
  usersOrders,
  verifyOrder,
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/placeorder", authMiddleware, placeOrder);
orderRouter.post("/verifyorder", verifyOrder);
orderRouter.post("/userorders", authMiddleware, usersOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
