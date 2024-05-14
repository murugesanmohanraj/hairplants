import React from 'react'

function Genetic({ formData, setFormData }) {
  return (
   <>
        <div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
None
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  Low
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  Moderate(work, family etc )
  </label>
</div>

<div class="form-check">
  <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3"  checked></input>
  <label class="form-check-label" for="exampleRadios3">
  High (Loss of close one, separation, home, illness)
  </label>
</div>
   </>
  )
}

export default Genetic
