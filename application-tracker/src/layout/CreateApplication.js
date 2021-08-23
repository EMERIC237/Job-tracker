import React, { useState } from 'react';
// import infos from '../data/infos';

function CreateApplication() {

    const initialState = {
        platform:"",
        company:"",
        position:"",
    }
    const [info, setInfo] = useState(initialState)
  const SubmitHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      localStorage.setItem('user_infos', JSON.stringify(info));

  };
  const changeHandler = ({ target: { name, value }}) => {
      setInfo((prevState) => ({
          ...prevState,
          [name]: value, 
      }));
  }

  const HandleSee = () =>{
    localStorage.removeItem('infos')
    const retrieved = JSON.parse(localStorage.getItem('user_infos'));
    console.log(retrieved);
  }
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="platform">platform</label>
            <input
              type="text"
              id="platform"
              name="platform"
              required={true}
              placeholder="Platform used to apply"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">company</label>
            <input
              type="text"
              id="company"
              name="company"
              required={true}
              placeholder="company applied to"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Position">Position</label>
            <input
              type="text"
              id="Position"
              name="Position"
              required={true}
              placeholder="Position applied to"
              onChange={changeHandler}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={()=>{console.log("Cancel")}}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button onClick={HandleSee} className="btn btn-primary">
            See
          </button>
        </fieldset>

      </form>
    </div>
  );
}

export default CreateApplication;
