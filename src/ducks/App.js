//Action Types
const Types = {
  SHOW_MESSAGE: 'app/SHOW_MESSAGE',
};

// Reducer
const initialState = {
  message:
    'Hey Redux here! Go check the project structure to see how the things works under the hood.',
  wasClicked: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_MESSAGE:
      return { ...state, wasClicked: true };
    default:
      return state;
  }
};

// Action Creators
export const showMessage = () => ({
  type: Types.SHOW_MESSAGE,
});

// Selectors
export const getMessage = state => state.message;
export const getIfWasClicked = state => state.wasClicked;
