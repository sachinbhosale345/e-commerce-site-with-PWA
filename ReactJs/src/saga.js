import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_PRODUCTS, responseProducts } from "./actions";

function* getProducts() {
  try {
    const response = yield call(
      fetch,
      "https://5e35c582f7e55d0014ad4ef5.mockapi.io/products"
    );

    const data = yield response.json();
    yield put(responseProducts(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_PRODUCTS, getProducts);
}
