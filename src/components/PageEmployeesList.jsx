import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadEmployees } from '../redux/thunk-functions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  componentDidMount() {

    if (this.props.isFetched === true) {
      return;
    }
    this.props.loadEmployees();
  }

  render() {
    const { employees, isLoading, user } = this.props;

    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <div align="right">
          <h3> Hi {user.full_name}!</h3>
        </div>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee._id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    isFetched: state.isFetched,
    isLoading: state.isLoading,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadEmployees: () => dispatch(loadEmployees())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageEmployeesList))