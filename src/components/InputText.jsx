import { useState } from "react";

export default function InputText(props) {
  const [isCHange, setIsChange] = useState("");

  return (
    <>
      <div className="form-controls mb-2 flex flex-col ">
        <label
          htmlFor={props.forId}
          className="text-xl text-start mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          {props.name}
        </label>
        <input
          type={props.type}
          id={props.forId}
          className="bg-transparent border-2 border-white rounded-md px-3 py-2 shadow-sm  placeholder-slate-300"
          placeholder={props.placeholder}
          onChange={(e) => setIsChange(e.target.value)}
          required
        />
      </div>
    </>
  );
}
