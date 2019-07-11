import React from 'react';
import PropTypes from 'prop-types';
class Userlist extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       users : []
     }
  }
    componentWillMount(){
      this.props.getData()
    }
    componentDidMount(){
      this.setState({
        users : this.props.users
    })
  }
   render(){
     const element = this.state.users.map(item => {
       return (     
        <div className = "container">
          <h2>MarkSheet</h2>
          <table className = "table table-dark" key ="user">
            <tbody>
              <tr>
                <th>{item.firstName}</th>
                <td>{item.rollno}</td>
                <td>{item.email}</td>
                <td>{item.class}</td>
                <td>Total Marks</td>
                <td>grade</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
})
  return(
    <span>
      {element}
    </span>

     )
  }
}

export default Userlist;
