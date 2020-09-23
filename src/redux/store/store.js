import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getProductReducer from "../reducers/product.reducer";

const store = createStore(getProductReducer, applyMiddleware(thunk));

export default store;
