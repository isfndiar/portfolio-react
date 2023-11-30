import { useState } from "react";
import InputText from "../InputText";
export default function Form() {
  const [emailData, setEmailData] = useState("");
  const [nameData, setNameData] = useState("");
  const handleChange = (e) => {
    console.log(e.target.elements);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameData);
  };
  const classbtn = `text-black px-6 py-2 bg-green-300 mt-2 rounded-xl hover:bg-green-200`;

  return (
    <>
      <form
        action="../FormtoPage"
        method="get"
        onSubmit={handleSubmit}
        target="_blank"
      >
        <InputText
          placeholder="Your Name"
          forId="name"
          type="name"
          name="name"
          isChange={(e) => setNameData(e.target.value)}
        />
        <InputText
          placeholder="yourExample@gmail.com"
          forId="email"
          type="email"
          name="email"
          isChange={(e) => setEmailData(e.target.value)}
        />
        <div className="form-controls">
          <label
            htmlFor=""
            className="after:content-['(Optional)'] after:ms-2 text-xl after:text-sm block text-start mb-2 text-black placeholder-black-300 "
          >
            Your Message {emailData} {nameData}
          </label>
          <textarea
            name=""
            id=""
            cols="85"
            rows="2"
            className="bg-white text-black px-2 py-1 border w-full"
          ></textarea>
        </div>
        <button className={classbtn}>Kirim</button>
      </form>
    </>
  );
}
