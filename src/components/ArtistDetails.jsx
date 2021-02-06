import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"


function ArtistDetails(){
  
  const [artistDetail, setArtistDetails] = useState([])

const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/artists/${id}`)
    .then((res) => {
      const data = res.data;
      setArtistDetails(data);

    })
  }, [])
  
  return(
    <>
    <div className="big-container">
    {artistDetail.map((detail) => (
      <>
      <div className="details-container">
      <h1>{detail.name}</h1>
      <div className="content-container">
      <img className="artist-image" src={detail.picture}></img>
      <p>{detail.description}</p>
      </div>
      </div>
      
      </>
    ))}
    </div>
    </>
  )
}

export default ArtistDetails;