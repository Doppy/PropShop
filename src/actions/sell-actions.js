import { createRealEstate } from '../api/contentful';

const goSaveStep = (step, data) => {
  return {
    type: 'SELL/STEP/SAVE',
    step,
    data,
  };
};

const sendingData = () => {
  return { type: 'SELL/DATA/SENDING' };
};

const sendDataSuccess = () => {
  return { type: 'SELL/DATA/SEND/SUCCESS' };
};

const redirect = () => {
  return { type: 'SELL/REDIRECT' };
};

export const saveStep = (step, data) => (dispatch) => {
  dispatch(goSaveStep(step, data));
  return Promise.resolve();
};

export const nextStep = () => {
  return (dispatch) => {
    dispatch({ type: 'SELL/STEP/NEXT' });
  }
};

export const prevStep = () => {
  return (dispatch) => {
    dispatch({ type: 'SELL/STEP/PREV' });
  }
};

export const addRequiredField = (field) => {
  return (dispatch) => {
    dispatch({
      type: 'SELL/REQUIREDFIELD/ADD',
      field,
    });
  };
};

export const removeRequiredField = (field) => {
  return (dispatch) => {
    dispatch({
      type: 'SELL/REQUIREDFIELD/REMOVE',
      field,
    });
  };
};

export const doCreateRealEstate = (sell, user) => {

	return dispatch => {
		dispatch(sendingData());
		createRealEstate(sell, user).then(result => {
			dispatch(sendDataSuccess());
		});
	}
}
