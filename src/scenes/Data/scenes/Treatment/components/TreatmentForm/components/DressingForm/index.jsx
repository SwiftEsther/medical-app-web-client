import React from 'react'
import { Field, reduxForm } from 'redux-form'

let DressingForm = props => {
  const { id } = props
  const date = `${id}.date`;
  const dressings = `${id}.dressings`;
  const dateOfNextTreatment = `${id}.dateOfNextTreatment`;
  return (

  <fieldset>
  <legend>Dressing/Injection:</legend>
      <div>
        <label htmlFor="date">Date</label>
        <Field name={date} component="input" type="date" />
      </div>
      <div>
        <label htmlFor="dressings">Dressings/Injections</label>
        <Field name={dressings} component="input" type="text" />
      </div>
      <div>
        <label htmlFor="dateOfNextTreatment">Date and time of next Treatment</label>
        <Field name={dateOfNextTreatment} component="input" type="datetime" />
      </div>
    </fieldset>
  )
}

export default DressingForm;