const initialState = {
    sliders: []
  };
  
  export const sliders = (state = initialState, action) => {
    switch (action.type) {
      case 'SLIDERS': {
        return { ...state,sliders:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default sliders;