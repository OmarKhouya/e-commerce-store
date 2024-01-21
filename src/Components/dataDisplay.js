import { useEffect, useState } from "react";

export default function DataDisplay({setDisplay}) {
  const range = [16, 32, 64, 100];
  const [data,setData]= useState({limit: 16})
  useEffect(()=>{
    setDisplay(data)
  },[data])
  return (
    <nav className="">
      <div className="m-2 p-3 border rounded d-flex justify-content-end">
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
