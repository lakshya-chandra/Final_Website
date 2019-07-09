import React from 'react';
import { Field, reduxForm} from 'redux-form';

import RenderField from './RenderField';
const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
  const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minLength2 = minLength(2)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.save = this.save.bind(this);
  }
  save(values) {
    this.props.submitForm(values);
  }
  render() {
    return (
      <form onSubmit = {this.props.handleSubmit(this.save)}>
        <div>
          <label htmlFor = "firstName">Name</label>
          <Field
            name = "firstName"
            component = {RenderField}
            type = "text"
            validate = {[required, maxLength15, minLength2]}
          />
        </div>
        
          <div>
          <label htmlFor = "rollno">Roll no.</label>
          <Field
            name = "rollno"
            component = {RenderField}
            type = "text"
            validate ={[required,number]}
          />
        </div>
        <div>
          <label htmlFor = "email">Email</label>
          <Field 
          name = "email" 
          component = {RenderField}
          type = "email" 
          validate = {[required,email]}
        />
        <div>
        <div>
        <label>Class</label>
        </div>
        <Field 
            className = "form-control"
            name = "class"  
            component = "select">
            <option value = "Select">
            Select
            </option>
          </Field>
        </div>
        <button type = "submit" >Submit</button>
        </div>
      </form>
    );
  }
}
export default reduxForm({
  form: 'form',
})(ContactForm)