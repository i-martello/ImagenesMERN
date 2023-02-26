import modelImage from '../models/images';
  
  let ctrl = {}  
  
  ctrl.index = async (req, res)=>{
  const images = await modelImage.find()
  res.json(images)
  }

  ctrl.details = async (req,res)=>{
    const oneImage = await modelImage.findOne({cloud_id: req.params.id}) 
    res.json(oneImage)
  }

export default ctrl;