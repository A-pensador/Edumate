const initialState = {
    subjects: []
  };
  
  export const subjects = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBJECTS': {
        return { ...state,subjects:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default subjects;