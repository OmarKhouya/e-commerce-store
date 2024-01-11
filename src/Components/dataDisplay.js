import { useState } from "react";

export default function DataDisplay() {
  const range = [16, 32, 64, 100];
  const [data,setData]= useState({limit: 16})
  return (
    <nav className="">
      <div className="m-2 border rounded d-flex">
        <span className="dropdown active">
          <button
            className="dropdown-toggle text-black form-control"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {data.limit}
          </button>
          <ul className="dropdown-menu">
            {range.map((r) => (
              <li key={r}>
                <button className="dropdown-item text-center" onClick={()=>{setData({...data,limit: r})}}>{r}</button>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </nav>
  );
}
