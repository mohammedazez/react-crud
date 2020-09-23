import axios from "axios";

// Kita buat constanta dengan beberapa situasi ketika ambil data
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILED = "GET_PRODUCT_FAILED";

// Kita buat function untuk masing masing const
export function getProductRequest() {
  return {
    type: GET_PRODUCT_REQUEST,
  };
}

export function getProductSuccess(result) {
  return {
    type: GET_PRODUCT_SUCCESS,
    result,
  };
}

export function getProductFailed(error) {
  return {
    type: GET_PRODUCT_FAILED,
    error,
  };
}

// Function untuk ambil data
export function getProduct() {
  return function (dispatch) {
    console.log("masuk action");
    dispatch(getProductRequest());

    axios
      .get("https://5f51a6865e98480016123bdd.mockapi.io/products")
      .then((result) => dispatch(getProductSuccess(result.data)))
      .catch((error) => dispatch(getProductFailed(error)));
  };
}
