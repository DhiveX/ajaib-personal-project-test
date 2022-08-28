import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Table from "./pages/Table";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
