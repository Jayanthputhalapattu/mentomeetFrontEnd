import Axios from "axios";
import React, { useContext, useState } from "react";

// import { Control, Form } from "react-redux-form";
import { toast, ToastContainer } from "react-toastify";
import { RespContext } from "../Context/RespContext";
import "react-toastify/dist/ReactToastify.css";
const MyForm = () => {
  const Resp = useContext(RespContext);
  const [named, SetName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (named === "") {
      return toast("please enter a value", { type: "error" });
    }
    Axios.post(
      "https://t7tys.sse.codesandbox.io/.netlify/functions/server/text",
      { name: named }
    ).then((resp) => {
      Resp.SetResp(resp);
      SetName("");
      return toast("Succesfully added", { type: "success" });
    });
  };
  return (
    <>
      <ToastContainer position="top-left" style={{ marginTop: 100 }} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={named}
          placeholder="Enter your name"
          onChange={(e) => SetName(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
export default MyForm;
