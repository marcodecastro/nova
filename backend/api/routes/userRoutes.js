import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();



router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;