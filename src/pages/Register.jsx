import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../redux/action";



export default function Register() {

 const dispatch = useDispatch()
  const [formData, setformData] = useState({
    name:'',
    email: ''
  });

  const onSubmit = () => {
      dispatch(addUserAction(formData))
  }

  // console.log("formData",formData);

  return (
    <>
      <div className="contsiner">
        <div className="row">
          <div className="col-sm-6 offset-3 mt-5">
            <input
              type="text"
              className="form-inout"
              value={formData.name}
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              className="form-inout"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
            />
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
