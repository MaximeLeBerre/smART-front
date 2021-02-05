import { useState, useEffect } from "react";
import axios from "axios";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/artists").then((res) => {
      const data = res.data;
      setArtists(data);
    });
  }, []);

  

  return (
    <>
      <div className="container">
        <div >
          {artists.map((artist) => (
            <div className="slide">
              <div className="content-container">
                <h1 key={artist.id}>{[artist.name]}</h1>
              </div>

              <img className="artist-image" src={artist.picture} alt={artist.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Artists;
