import { EMPLOYEES_LOADED } from './constants';
import { EMPLOYEE_CREATED } from './constants';

export const initialState = {
  employees: [],
  isFetched: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees, isFetched: true });
    }
    case EMPLOYEE_CREATED: {
      const newEmployee = action.payload.employee;
      const newEmployees = [...state.employees, newEmployee];
      return { ...state, employees: newEmployees };
    }
    default:
        return state
  }
}

export default appReducer;