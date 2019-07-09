import React from "react";
import {Field , reduxForm} from 'redux-form';

import RenderField from './RenderField'
const required = value => (value || typeof value === 'number' ? undefined : 'Required')
class classForm extends React.Component{
	constructor(props){
		super(props);
		this.class_save = this.class_save.bind(this);
	}
	 class_save(value) {
    this.props.classForm(value);
  }
	render(){
		return(
			<form onSubmit = {this.props.handleSubmit(this.class_save)}>
			<div>
          	  <label htmlFor = "class">Class</label>
          	  <Field
            	  name = "class"
            	  component = {RenderField}
            	  type = "text"
            	  validate = {[required]}
          		/>
        	</div>
        	<div>
        		<lable htmlFor = "subject">Subject</lable>
        		<Field 
        		  name = "subject"
        		  component = {RenderField}
        		  type = "text"
        		  validate = {[required]}
        		/>
        	</div>
        	 <button type = "submit" >Save</button>
			</form>
		)
	}
}
export default reduxForm({
  form: 'classForm',
})(classForm)