import React from "react";
import { Provider } from "react-redux";

import App from "@navigation/index";
import store from "@redux/config";
import { ModalProvider } from "@providers/ModalProvider";

function banQi() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  );
}

export default banQi;
