import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RoomProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
        <App />
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
