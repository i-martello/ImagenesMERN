import ctrlUsers from '../controllers/auth.controller'
import {Router} from 'express';
const router = Router();


router.post('/registro', ctrlUsers.signup)
  
router.post("/login",  ctrlUsers.singin );

export default router