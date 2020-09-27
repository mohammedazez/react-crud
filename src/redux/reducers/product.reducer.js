import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} from "../actions/product.actions";

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

function getProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      console.log("request", action);
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case GET_PRODUCT_SUCCESS:
      console.log("sukses", action);
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default getProductReducer;

// https://stackoverflow.com/questions/59756010/how-to-use-axios-to-get-api-items-in-redux
