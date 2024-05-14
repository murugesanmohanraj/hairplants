import React from 'react'

function Dandruff({ formData, setFormData }) {
  return (
    
<>
<div class="container mt-5">
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
  <label class="form-check-label" for="exampleRadios1">
  No
  </label>
</div>
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked></input>
  <label class="form-check-label" for="exampleRadios2">
  Yes, mild that comes and goes
  </label>
</div>
<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  Yes, heavy dandruff that sticks to the scalp
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  I have Psoriasis
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  I have Seborrheic Dermatitis
  </label>
</div>

</div>

</>
  )
}

export default Dandruff
