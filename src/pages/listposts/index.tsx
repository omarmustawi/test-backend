import axios from "axios";
import React, { useEffect, useState } from "react";

export default function index() {
  const [data, setData] = useState([{ title: "", content: "" }]);
  useEffect(() => {
    const fetchdata = async () => {
        const res = await axios.get()
    }
  }, []);
  return (
    <div>
      {data.map((ele, index) => (
        <div key={index} className="">
          <span>{ele.title}</span>
          <span>{ele.content}</span>
        </div>
      ))}
    </div>
  );
}
