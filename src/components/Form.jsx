import { useState } from "react";
import FormInput from './FormInput'

function Form() {
  const [newWork, setNewWork] = useState({
    name: "",
    picture: "",
    date: "",
    kind_id: null,
    theme_id: null,
    artist_id: null,
  });

  const handleChange = (e) => {
    setNewWork({
      ...newWork,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>

        <FormInput 
        labelName="Name"
        value={newWork.name}
        handleChange={handleChange}
        inputName="name"
        type="text"
        />
        <FormInput 
        labelName="Picture"
        value={newWork.picture}
        handleChange={handleChange}
        inputName="picture"
        type="text"
        />
        
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
