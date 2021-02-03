import { useState, useEffect } from "react";
import axios from "axios";

function Works() {
  const [works, setWorks] = useState([]);
  const [isFilterActiveCollage, setFilterCollage] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/works").then((res) => {
      const data = res.data;
      setWorks(data);
    });
  }, []);

  return (
    <>
      <div>
        <button onClick={()=> setFilterCollage(!isFilterActiveCollage) }>Collage</button>
        <div>
          {works
          .filter((work) => !isFilterActiveCollage || work.kindName === "collage")
          .map((work) => (
            <>
            <div className="work-container">
              <div className="work-content-container">
                <h1>{[work.name]}</h1>
                <div className="work-p-container">
                  <p>{[work.date]}</p>
                  <p>/</p>
                  <p>{[work.artistName]}</p>
                </div>
              </div>

              <img className="image" src={work.picture} alt={work.name} />
              
            </div>
            <hr></hr>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Works;
