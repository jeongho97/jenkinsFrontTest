import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createStore from "./app/store";
const store = createStore();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
reportWebVitals();
