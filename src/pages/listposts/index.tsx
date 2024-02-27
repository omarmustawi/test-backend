"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([{ title: "", content: "" }]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API}`);
      console.log("res", res);
      setData(res.data)
    };
    fetchdata();
  }, []);
  return (
    <div className="bg-red-300 grid gap-4 ">
      {data.map((ele, index) => (
        <div key={index} className="grid gap-4  grid-cols-2 justify-center items-center bg-slate-400">
          <span>{ele.title}</span>
          <span>{ele.content}</span>
        </div>
      ))}
    </div>
  );
}
