import ImageGrid from "./features/ImageGrid";
import { Provider } from "react-redux";
import React from "react";
import createStore from "./store";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <ImageGrid />
    </Provider>
  );
}

export default App;
