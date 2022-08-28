import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>adawdwad</div>
      </Provider>
    </div>
  );
}

export default App;
