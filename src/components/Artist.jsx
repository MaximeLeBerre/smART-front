 function Artist({id, name, picture}){


  return(
  <>
    <div >
      <h1 key={[id]}>{[name]}</h1>
    </div>

    <img className="artist-image" src={picture} alt={name} />
</>
  )
 }

 export default Artist;