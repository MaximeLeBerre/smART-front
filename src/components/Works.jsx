import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import axios from "axios";

function Works() {
  const [works, setWorks] = useState([]);
  const [isFilterActiveCollage, setFilterCollage] = useState(false);
  const [isFilterActivePhoto, setFilterPhoto] = useState(false);
  const [isFilterActivePeiture, setFilterPeinture] = useState(false);
  const [isFilterActiveVirtual, setFilterVirtual] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/works").then((res) => {
      const data = res.data;
      setWorks(data);
    });
  }, []);

  return (
    <>
      <div className="container-main">
        <div className="btn-container">
          <button
            type="button"
            className={isFilterActiveCollage ? "btn-not-active" : "btn-active"}
            onClick={() => setFilterCollage(!isFilterActiveCollage)}
          >
            <p>Collage</p>
          </button>
          <button
            className={isFilterActivePhoto ? "btn-not-active" : "btn-active"}
            onClick={() => setFilterPhoto(!isFilterActivePhoto)}
          >
            <p>Photo</p>
          </button>
          <button
            className={isFilterActivePeiture ? "btn-not-active" : "btn-active"}
            onClick={() => setFilterPeinture(!isFilterActivePeiture)}
          >
            <p>Peinture</p>
          </button>
          <button
            className={isFilterActiveVirtual ? "btn-not-active" : "btn-active"}
            onClick={() => setFilterVirtual(!isFilterActiveVirtual)}
          >
            <p>Réalité virtuelle</p>
          </button>
        </div>
        <div className="horizontal-scroll">
          {works
            .filter(
              (work) => !isFilterActiveCollage || work.kindName === "Collage"
            )
            .filter(
              (workImage) =>
                !isFilterActivePhoto || workImage.kindName === "Photographie"
            )
            .filter(
              (workPaint) =>
                !isFilterActivePeiture || workPaint.kindName === "Peinture"
            )
            .filter(
              (workVirtual) =>
                !isFilterActiveVirtual ||
                workVirtual.kindName === "Réalité virtuelle"
            )

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
                    <p>{`${[work.themeName]} / ${[work.kindName]}`}</p>
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
