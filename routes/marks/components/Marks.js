import React from "react";
import {Field , reduxForm} from 'redux-form';

class markForm extends React.Component{
	constructor(props){
		super(props);
		this.mark_save = this.mark_save.bind(this);
	}
	 mark_save(val) {
    this.props.markForm(val);
  }
	render(){
		return(
			<form onSubmit = {this.props.handleSubmit(this.mark_save)}>
			<div>
          <div>
           <label>Class</label>
          </div>
          <div>
            <Field 
               className = "form-control"
               name = "Class" 
               component = "select">
              <option value = "Select">Select</option>
            </Field>
          </div>
          <div>
           <label>Subjects</label>
          </div>
          <div>
            <Field
               className = "form-control" 
               name = "Subject" 
               component = "select">
              <option value = "Select">Select</option>
            </Field> 
          </div>
      </div>
        	 <button type = "submit" >Save</button>
			</form>
			)
	}
}
export default reduxForm({
  form: 'markForm',
})(markForm)