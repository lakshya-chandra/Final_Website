import React from "react";
import {Field , reduxForm} from 'redux-form';

import RenderField from "./RenderField";
class markForm extends React.Component{
	constructor(props){
		super(props);
		this.mark_save = this.mark_save.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setMarks = this.setMarks.bind(this);
    this.state ={
      marks:[],
      Data:'',
      showResults:false
    }
	}
	
  mark_save(val) {
    this.props.markForm(val);
  }
  componentWillMount(){
    const  array2 =  JSON.parse(localStorage.getItem("user"))
    this.setState({
      marks : array2,
    })

  }

  setValue = (e) =>{
    this.props.getStudent(e.target.value);
    this.props.getSubject(e.target.value);
  }
  setMarks = (e)=> {
        this.setState({ showResults: true });
  }  
  Addmarks=(e)=>{
    const userData = JSON.parse(localStorage.getItem('user','item.name'));
    console.log("value",userData);
  } 
  render(){
    const elementss = this.state.marks!==null && this.state.marks.map(item =>{
      return(  
        <option>{item.class}</option>
      )
  })
    const name = this.props.student;
    const stuName = name!==undefined && name.map(item =>{
      return(
        <option>{item}</option>
      )
    })
    const subject =this.props.subject;
    const stuSubject = subject.map(item =>{
      return(
        <option>{item}</option>
      )
    })

		return(
      <div>
  			<form onSubmit = {this.props.handleSubmit(this.mark_save)}>
  			  <div>
          <div>
            <label>Class</label>
          </div>
          <div>
            <Field 
               onChange={this.setValue}
               className = "form-control"
               name = "Class" 
               component = "select">
                 <option value = "Select">Select</option>
                   {elementss}
              </Field>
            </div>
            <div>
              <label>Name</label>
            </div>
            <div>
              <Field
                className = "form-control" 
                name = "names" 
                component = "select">
                <option value = "Select">Select</option>
                {stuName}
              </Field> 
            </div>
            <div>
             <label>Subject</label>
             </div>
            <div>
              <Field
                onClick = {this.setMarks}
                className = "form-control"
                name = "subject"
                component = "select">
                  <option value = "Select">Select</option>
                    {stuSubject}</Field>
                      {this.state.showResults ? <input type="text" placeholder="Enter marks"></input>: null 
              }
            </div>
          </div>
  			</form>
        <button type= "submit">Submit</button>
      </div>
			)
	}
}
export default reduxForm({
  form: 'markForm',
})(markForm)