const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middleware/check-auth");
const OrderController = require("../controllers/orders");

const Product = require("../models/product");

router.get("/", checkAuth, OrderController.orders_get_all);

// handling incoming post requests
router.post("/", checkAuth, OrderController.orders_create_order);

router.get("/:orderId", checkAuth, OrderController.orders_get_one);

router.delete("/:orderId", checkAuth,OrderController.orders_get_delete );

module.exports = router;
