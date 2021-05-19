import express from 'express';
const router = express.Router()
import {
    addOrderItems
  } from '/controller.js';
  

router.route('/').post(addOrderItems)

export default router;
