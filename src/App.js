import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { combineForms } from "react-redux-form";
import MyForm from "./Components/my-form-component";
import ResponseTab from "./Components/ResponseTab";
import { RespContext } from "./Context/RespContext";
const initialUser = { name: "" };

const store = createStore(
  combineForms({
    user: initialUser
  })
);

export default function App() {
  const [resp, SetResp] = useState([]);
  return (
    <RespContext.Provider value={{ resp, SetResp }}>
      <Provider store={store}>
        <MyForm />
        <ResponseTab />
      </Provider>
    </RespContext.Provider>
  );
}
