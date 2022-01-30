import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT_CHANGE',
  clearForm: 'CLEAR_FORM',
  consentToggle: 'CONSENT_TOGGLE',
  throwError: 'THROW_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'CLEAR_FORM':
      return {
        ...action.initialState,
      };
    case 'CONSENT_TOGGLE':
      return {
        ...state,
        consent: !state.consent,
      };
    case 'THROW_ERROR':
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
    dispatch({ type: actionTypes.inputChange, name: e.target.name, value: e.target.value });
  };

  const handleConsentToggle = () => {
    dispatch({ type: actionTypes.consentToggle });
  };

  const handleClearForm = (initialState) => {
    dispatch({ type: actionTypes.clearForm, initialState });
  };

  const handleThrowError = (message) => {
    dispatch({ type: actionTypes.throwError, error: message });
  };

  return {
    state,
    handleInputChange,
    handleCheckboxChange: handleConsentToggle,
    handleClearForm,
    handleThrowError,
  };
};

export default useForm;
