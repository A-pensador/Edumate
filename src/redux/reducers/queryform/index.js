const initialState = {
    queryform: []
  };
  
  export const queryform = (state = initialState, action) => {
    switch (action.type) {
      case 'QUERY': {
        return { ...state,queryform:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default queryform;