import React from 'react'

function NotFoundPage({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
   
    <input
      type="text"
      placeholder="enter name"
      onChange={(event) =>
        setFormData({ ...formData, confirmPassword: event.target.value })
      }
    />
  </div>
  )
}

export default  NotFoundPage