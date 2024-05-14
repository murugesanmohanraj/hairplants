import React from 'react'

function Hairtype({ formData, setFormData }) {
  return (
    <>
    <div class="container mt-5">
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
  <label class="form-check-label" for="exampleRadios1">
  Always high
  </label>
</div>
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked></input>
  <label class="form-check-label" for="exampleRadios2">
  Low when I wake up, but gradually increases
  </label>
</div>
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  Very low in afternoon
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
Low by evening/night
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  
  Always low
  </label>
</div>

</div>
    </>
  )
}

export default Hairtype
