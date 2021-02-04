
function FormInput({labelName, value, handleChange, inputName, type}) {

  return(
    <>
      <label>{labelName}</label>
      <input  
      value={value} 
      onChange={handleChange} 
      name={inputName}
      type={type}>
      </input>
    </>
  )
}

export default FormInput;