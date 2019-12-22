import { EMPLOYEES_LOADED } from './constants';
import { EMPLOYEE_CREATED } from './constants';
import { EMPLOYEE_LOADING } from './constants';
import { EMPLOYEE_LOADING_ERROR } from './constants';

export const initialState = {
  employees: [],
  isLoading: false,
  error: null,
  isFetched: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees, isFetched: true, isLoading: false });
    }
    case EMPLOYEE_CREATED: {
      const newEmployee = action.payload.employee;
      const newEmployees = [...state.employees, newEmployee];
      return { ...state, employees: newEmployees };
    }
    case EMPLOYEE_LOADING: {
      return {...state, isLoading: true, error: null};
    }
    case EMPLOYEE_LOADING_ERROR: {
      const error = action.payload;
      return {...state, isLoading: false, error};
    }
    default:
        return state
  }
}

export default appReducer;