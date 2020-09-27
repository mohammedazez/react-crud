import axios from "axios";

// Kita buat constanta dengan beberapa situasi ketika ambil data
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILED = "GET_PRODUCT_FAILED";

// Kita buat function untuk masing masing const
export const getProductRequest = (data) => {
  return {
    type: GET_PRODUCT_REQUEST,
    payload: data,
  };
};

export const getProductSuccess = (result) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    result,
  };
};

export const getProductFailed = (error) => {
  return {
    type: GET_PRODUCT_FAILED,
    error,
  };
};

// Function untuk ambil product
export const getProduct = () => {
  return async (dispatch) => {
    const respon = await axios.get(
      "https://5f51a6945e98480016123be3.mockapi.io/product"
    );
    dispatch(getProductRequest(respon.data));
    // axios
    //   .get("https://5f51a6945e98480016123be3.mockapi.io/product")
    //   .then((result) => dispatch(getProductSuccess(result.data)))
    //   .catch((error) => dispatch(getProductFailed(error)));
    console.log("ini data product", respon);
  };
};

// Function untuk edit product
export const editProduct = (result, id) => {
  console.log(result);
  console.log(id);
};

// Function untuk post product
export const postProduct = () => {};

// function untuk hapus product
export const deleteProduct = () => {};
