import { Map } from 'immutable';
import { createReducer } from 'redux-create-reducer';

// Action Types
export const Types = {
  TOGGLE_MODAL: '@HOME/TOGGLE_MODAL',
  SET_COORDINATES: '@HOME/SET_COORDINATES',
  SEARCH_USER: '@HOME/SEARCH_USER',
  ADD_USER: '@HOME/ADD_USER'
};

// Action Creators
export const Modal = {
  toggle: () => ({ type: Types.TOGGLE_MODAL })
};

export const User = {
  setCoordinates: payload => ({ type: Types.SET_COORDINATES, payload }),
  search: payload => ({ type: Types.SEARCH_USER, payload }),
  add: payload => ({ type: Types.ADD_USER, payload })
};

// Reducer
const init = Map({
  coordinates: {},
  modalOpened: false,
  users: []
});

export default createReducer(init, {
  [Types.SET_COORDINATES]: (state, { payload }) => Map(state).set('coordinates', payload),
  [Types.TOGGLE_MODAL]: state => Map(state).set('modalOpened', !state.get('modalOpened')),
  [Types.ADD_USER]: (state, { payload }) => Map(state).set('users', [
    ...state.get('users'),
    { coordinates: state.get('coordinates'), ...payload }
  ])
});
