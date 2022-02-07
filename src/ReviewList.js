import React, { useState } from 'react';
import './styles.css';



const App = () => {

    const [formValues, setFormValues] = useState([{ name: "", review : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", review: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <span>&nbsp;</span>
              <label>Review</label>
              <input type="text" name="review" value={element.review || ""} onChange={e => handleChange(index, e)} />
              <span>&nbsp;</span>
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
              <br></br>
              <br></br>
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <span>&nbsp;</span>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )
}

export default App