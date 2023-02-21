import {Router} from 'express';
import { uploadImage, deleteImage } from '../utils/cloudinary';
import upload from '../utils/multer';
import modelImage from '../models/images';

const router = Router();

router.get('/', async (req, res)=>{
  const images = await modelImage.find()
  res.json(images)
})

router.post('/publicar',upload.single("Value"), async (req, res)=>{
  const {title, description} = req.body
  if(!req.file){
    return res.send('Subi una foto duro')
  } 
  try { 

    const cloudinary_image = await uploadImage(req.file.path)
    console.log(cloudinary_image)

    const newImage = await new modelImage({
      title,
      description,
      cloud_id: cloudinary_image.public_id,
      url: cloudinary_image.secure_url      
    });
    await newImage.save()
    console.log("guardado con exito", newImage)

  } catch (error) {
    console.log(error)
  } 
    
    res.json({success: 'imagen enviada'})
  })

  router.get('/imagenes/:id', async (req,res)=>{
    const oneImage = await modelImage.findOne({cloud_id: req.params.id}) 
    res.json(oneImage)
  });

  router.delete('/imagenes/:id', async (req,res)=>{
    const deleteImg = await modelImage.findOneAndRemove({cloud_id: req.params.id})
    res.json(deleteImg)

    deleteImage(req.params.id)

  })

export default router
