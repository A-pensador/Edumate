const initialState = {
    topics: []
  };
  
  export const topics = (state = initialState, action) => {
    switch (action.type) {
      case 'TOPICS': {
        return { ...state,topics:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default topics;