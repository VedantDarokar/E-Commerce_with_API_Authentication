import express from 'express'
import { register, login } from '../Controllers/user.js'; 

const router = express.Router();

//register
router.post('/register',register)

//Login
router.post('/login',login)

export default router;