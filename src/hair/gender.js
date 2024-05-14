import React from 'react'

function Gender({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
   
    {/* <input
      type="text"
      placeholder="enter gender"
      onChange={(event) =>
        setFormData({ ...formData, confirmPassword: event.target.value })
      }
    /> */}

    <button>Male</button>
  </div>
  )
}

export default Gender