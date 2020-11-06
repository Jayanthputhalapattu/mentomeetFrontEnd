import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { RespContext } from "../Context/RespContext";
const ResponseTab = () => {
  const Resp = useContext(RespContext);
  const [myList, setMyList] = useState(["hello"]);
  useEffect(() => {
    axios
      .get("https://t7tys.sse.codesandbox.io/.netlify/functions/server/text")
      .then((res) => {
        setMyList(res.data);
        console.log(res);
      });
  }, [Resp.resp]);

  return (
    <div>
      <Table dark>
        <tr>
          <th>#</th>
          <th>DataBase-ID</th>
          <th>Name</th>
          <th>Date Added </th>
        </tr>
        {myList.map((res, key) => (
          <tbody>
            <td>{key + 1}</td>
            <td>{res._id}</td>
            <td>{res.name}</td>
            <td>{res.createdAt}</td>
          </tbody>
        ))}
      </Table>
    </div>
  );
};
export default ResponseTab;
