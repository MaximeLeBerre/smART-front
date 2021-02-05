import { useState, useEffect } from "react";
import axios from "axios";
import Artist from './Artist'

function ArtistsList() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/artists").then((res) => {
      const data = res.data;
      setArtists(data);
    });
  }, []);

  

  return (
    <>
      <div >
        <div >
          {artists.map((artist) => (
           <Artist 
           id={artist.id}
           name={artist.name}
           picture={artist.picture}
           />
          ))}
        </div>
      </div>
    </>
  );
}

export default ArtistsList;
