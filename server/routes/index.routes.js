import {Router} from 'express';
import ctrlIndex from '../controllers/index.controller';
import upload from '../utils/multer';
import ctrlPosts from '../controllers/posts.controller'
import verifyToken from '../settings/auth';


const router = Router();


  router.get('/',verifyToken,ctrlIndex.index)

  router.post('/publicar',upload.single("Value"), ctrlPosts.uploaded)

  router.get('/imagenes/:id', ctrlIndex.details)

  router.delete('/imagenes/:id', ctrlPosts.Remove)

export default router
