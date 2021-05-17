const initialState = {
    addFeedback: {}
  };
  
  export const addFeedback = (state = initialState, action) => {
    switch (action.type) {
      case 'CLASSES': {
        return { ...state,addFeedback:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default addFeedback;