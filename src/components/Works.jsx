import { useState, useEffect } from "react";
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
        <button onClick={()=> setFilterCollage(!isFilterActiveCollage) }>Collage</button>
        <button onClick={()=> setFilterPhoto(!isFilterActivePhoto) }>Photo</button>
        <button onClick={()=> setFilterPeinture(!isFilterActivePeiture) }>Peinture</button>
        <button onClick={()=> setFilterVirtual(!isFilterActiveVirtual) }>Réalité virtuelle</button>

        <div>
          {works
          .filter((work) => !isFilterActiveCollage || work.kindName === "Collage")
          .filter((workImage) => !isFilterActivePhoto || workImage.kindName === "Photographie")
          .filter((workPaint) => !isFilterActivePeiture || workPaint.kindName === "Peinture")
          .filter((workVirtual) => !isFilterActiveVirtual || workVirtual.kindName === "Réalité virtuelle")


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
