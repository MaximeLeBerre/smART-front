import { useState, useEffect } from "react";
import axios from "axios";

function Works() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/works").then((res) => {
      const data = res.data;
      setWorks(data);
    });
  }, []);

  const lenghts = works.length;
  console.log(lenghts);

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
          {works.map((work) => (
            <div className="slide">
              <div className="content-container">
                <h1>{[work.name]}</h1>
                <div className="work-information-content">
                  <p>{[work.date]}</p>
                  <p>/</p>
                  <p>{[work.artistName]}</p>
                </div>
              </div>
              
              <img className="div-image" src={work.picture} alt={work.name} />
            
                {/* <div
                  className="div-image"
                  style={{ backgroundImage: `url(${work.picture})` }}
                ></div> */}
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Works;
