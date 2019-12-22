import { 
  EMPLOYEES_LOADED,
  EMPLOYEE_CREATED,
  EMPLOYEES_LOADING,
  EMPLOYEES_LOADING_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR
 } from './constants';

export const initialState = {
  employees: [],
  isLoading: false,
  error: null,
  isFetched: false,
  user: null
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return { ...state, employees, isFetched: true, isLoading: false };
    }
    case EMPLOYEE_CREATED: {
      const newEmployee = action.payload.employee;
      const newEmployees = [...state.employees, newEmployee];
      return { ...state, employees: newEmployees };
    }
    case EMPLOYEES_LOADING: {
      return {...state, isLoading: true, error: null};
    }
    case EMPLOYEES_LOADING_ERROR: {
      const {error} = action.payload;
      return {...state, isLoading: false, error};
    }
    case LOGIN_SUCCESS: {
      const { user } = action.payload;
      return { ...state, user };
    }
    case LOGIN_ERROR: {
      const { name } = action.payload;
      alert(`User ${name} not found.`);
      return { ...state, user: null };
    }
    default:
        return state
  }
}

export default appReducer;