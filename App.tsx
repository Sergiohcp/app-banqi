import React from "react";
import { Provider } from "react-redux";

import App from "./src/navigation";
import store from "@redux/config";

function banQi() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default banQi;