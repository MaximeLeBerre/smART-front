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
      <div class="container">
        <div class="blocHorizontal">
          {artists.map((artist) => (
            <div class="slide ">
              <h1>{[artist.name]}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Artists;
