const initialState = {
    classes: []
  };
  
  export const classes = (state = initialState, action) => {
    switch (action.type) {
      case 'CLASSES': {
        return { ...state,classes:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default classes;