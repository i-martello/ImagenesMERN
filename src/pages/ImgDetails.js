import React, { useState, useEffect} from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom';

const ImgDetails = () =>{


  const [image, setImage] = useState({})

  const params = useParams();

  useEffect(() => {
    
    (async ()=>{
      const res = await axios.get(`http://localhost:4000/imagenes/${params.id}`)
      setImage(res.data)
    })();

  }, [params.id])

  const handleDelete = async () => {
    await axios.delete(`http://localhost:4000/imagenes/${params.id}`)
  }
  

  return(
    <div className="row w-100 h-100">
      <div className="col-md-4 offset-md-4 mt-5">
        <div className="card bg-dark">
          <img src={image.url} alt={image.title} className="card-img-top" />
          <div className="card-body">
            <h1>{image.title}</h1>
            <button className="btn btn-outline-danger" onClick={handleDelete}>Borrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgDetails