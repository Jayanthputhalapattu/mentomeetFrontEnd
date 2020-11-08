import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { Table } from "reactstrap";
import { RespContext } from "../Context/RespContext";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
const ResponseTab = () => {
  const Resp = useContext(RespContext);
  const [myList, setMyList] = useState(["hello"]);
  useEffect(() => {
    Axios.get(
      "https://t7tys.sse.codesandbox.io/.netlify/functions/server/text"
    ).then((res) => {
      setMyList(res.data);
      // console.log(res);
    });
  }, [Resp.resp]);
  const del = (id) => {
    Axios.post(
      "https://t7tys.sse.codesandbox.io/.netlify/functions/server/text/delete",
      { data: { _id: id } }
    ).then((res) => {
      console.log(res);
      Resp.SetResp(res);
      return toast("delete success", { type: "info" });
    });
  };
  return (
    <div>
      {/* <ToastContainer position="top-left" /> */}
      <Table dark bordered>
        <tr>
          <th>#</th>
          <th>FirstName</th>
          <th>SecondName</th>
          <th>Date Added </th>
        </tr>
        {myList.map((res, key) => (
          <tbody>
            <td>{key + 1}</td>
            <td>{res.name}</td>
            <td>{res.LastName}</td>
            <td>{[res.createdAt].toString().substr(0, 10)}</td>
            <td>
              <FaTrash
                onClick={() => {
                  del(res._id);
                }}
                className="del"
              />
            </td>
          </tbody>
        ))}
      </Table>
    </div>
  );
};
export default ResponseTab;
