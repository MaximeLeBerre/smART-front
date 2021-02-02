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
        <div className="blocHorizontal">
          {artists.map((artist) => (
            <div className="slide ">
              <h1>{[artist.name]}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Artists;
