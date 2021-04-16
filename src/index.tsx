import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./state";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
