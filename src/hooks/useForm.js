import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'CLEAR_FORM':
      return {
        ...action.initialState,
      };
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        consent: !state.consent,
      };
    case 'THROW ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

const useForm = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT', value: e.target.value });
  };

  const handleCheckboxChange = () => {
    dispatch({ type: 'TOGGLE_CHECKBOX' });
  };

  const handleClearForm = (initialState) => {
    dispatch({ type: 'CLEAR_FORM', initialState });
  };

  const handleThrowError = (message) => {
    dispatch({ type: 'THROW ERROR', error: message });
  };

  return {
    state,
    handleInputChange,
    handleCheckboxChange,
    handleClearForm,
    handleThrowError,
  };
};

export default useForm;
