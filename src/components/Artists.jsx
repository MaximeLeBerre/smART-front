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

  const lenghts = artists.length;

  const styles = {
    display: "flex",
    flexDirection: "row",
    width: `${lenghts}00vw`,
    transform: "rotate(90deg) translateY(-100vh)",
    transformOrigin: "top left",
  };

  return (
    <>
      <div className="container">
        <div style={styles}>
          {artists.map((artist) => (
            <div className="slide">
              <div className="content-container">
                <h1>{[artist.name]}</h1>
                <div className="artist-information-content">
                  
                </div>
              </div>

              <img className="div-image" src={artist.picture} alt={artist.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Artists;
