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
          <table className = "table table-dark" key ="item.id">
            <tbody>
              <tr>
                <td>{item.firstName}</td>
                <td>{item.rollno}</td>
                <td>{item.email}</td>
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
