import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/gallery.css'
import axios from 'axios'

const ImgGallery = () => {

  const [image, setImage] = useState([])
  const navigate = useNavigate();
  const params = useParams();

  const token = localStorage.getItem("token");


  useEffect(() => {
    (async ()=> {
    if (token) {
      await axios.get(`http://localhost:4000`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => console.log(data.nombre))
        .catch((error) => console.error(error));
    }
  })();
  }, [token]);


  useEffect(() => {

    (async () => {
      const res = await axios.get('http://localhost:4000')
      setImage(res.data)
    })();
  }, [params.id])


  return (
    <div>
      <div className="Container-gallery">
        {image.map(item => {
          return (
            <article className="articleGallery card-image" key={item._id} onClick={()=> navigate(`/imagenes/${item.cloud_id}`)}>
                <div className="articleImage">
                  <img src={item.url} alt="" className="articleImg" />
                  <div className="titleImage">
                    <label>{item.title}</label>
                  </div>
                </div>
            </article>

          );
        })}
      </div>
    </div>
  );
}

export default ImgGallery