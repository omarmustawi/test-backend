import axios from "axios";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setdata] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e: any) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    console.log("data", data);

    e.preventDefault();
    try {
      let res = await axios.post(`${process.env.NEXT_PUBLIC_API}`, {
        title: data.title,
        content: data.content,
      });
      console.log("res: ", res);
    } catch (err) {}
  };
  return (
    <div>
      <form className="flex gap-10 flex-col justify-center items-center h-screen bg-slate-400">
        <input
          // value={data.title}
          name={"title"}
          onChange={handleChange}
          type="text"
          placeholder="enter title"
          className="w-96 p-3"
        />
        <textarea
          // value={data.content}
          name={"content"}
          onChange={handleChange}
          placeholder="content"
          className="w-96 p-3"
        />
        <button onClick={handleSubmit}> submit </button>
      </form>
    </div>
  );
}
