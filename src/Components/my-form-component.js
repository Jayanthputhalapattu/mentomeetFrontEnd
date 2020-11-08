import Axios from "axios";
import React, { useContext, useState } from "react";

// import { Control, Form } from "react-redux-form";
import { toast, ToastContainer } from "react-toastify";
import { RespContext } from "../Context/RespContext";
import "react-toastify/dist/ReactToastify.css";
const MyForm = () => {
  const Resp = useContext(RespContext);
  const [named, SetName] = useState("");
  const [emailed, SetEmailed] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (named === "" || emailed === "") {
      return toast("please enter all fields", { type: "error" });
    }
    Axios.post(
      "https://t7tys.sse.codesandbox.io/.netlify/functions/server/text",
      { name: named, LastName: emailed }
    ).then((resp) => {
      Resp.SetResp(resp);
      SetName("");
      SetEmailed("");
      return toast("Succesfully added", { type: "success" });
    });
  };
  return (
    <>
      <ToastContainer position="bottom-left" style={{ marginTop: 100 }} />
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={named}
          placeholder="Enter your First name"
          onChange={(e) => SetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Last name"
          value={emailed}
          onChange={(e) => {
            SetEmailed(e.target.value);
          }}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
export default MyForm;
