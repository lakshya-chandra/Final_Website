import React from 'react';
import PropTypes from 'prop-types';
class Userlist extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       users : [],
       marks:[],
       total:"",
       grade:""
     }
  }
    componentWillMount(){
      this.props.getData()
      this.props.newmarks()
        let value = this.props.grade;
      this.setState({
        grade: value
      })

   }

    componentDidMount(){
      this.setState({
      users : this.props.users
    })
      this.setState({
        marks:this.props.marks,
    })
      this.setState({
        total: this.props.total
      })
  }
   render(){
     const element = this.state.users.map(item => {
       return (     
        <tr key ={item.rollno}>
          <td>{item.firstName}</td>
          <td>{item.rollno}</td>
          <td>{item.email}</td>
          <td>{item.class}</td>
          <td>{this.state.total}</td>
          <td>{this.state.grade}</td>
        </tr>
        )
     })
      const marks = this.props.marks.map(item =>{
      return (
        <tr>
          <td>Subject</td>
          <td>{item.subject}</td>
          <td>100</td>
          <td>{item.marks}</td>
        </tr>
      )
      })
    
     return(
      <div>
      <table className ="table table-dark">
      <tbody>
        {element} 
      </tbody>
      </table>

        <table className ="table table-dark">
        <tbody>
          {marks} 
        </tbody>
        </table>
        
      </div>
      )
  }
}

export default Userlist;
