import { useEffect, useState } from "react";

import { RiSearchFill } from "react-icons/ri";

export default function DataDisplay({ setDisplay }) {
  const range = [16, 32, 64, 100];
  const [data, setData] = useState({ limit: 16 });
  useEffect(() => {
    setDisplay(data);
  }, [data,setDisplay]);
  return (
    <nav className="" >
      <div className="m-2 p-3 rounded d-flex justify-content-end" style={{backgroundColor: "#87CBB9"}}>
        {/* <div className="w-75 input-group">
          <input type="text" className="form-control" />
          <button type="button" className="btn btn-dark">
            <RiSearchFill />
          </button>
        </div> */}
        <div className="dropdown active">
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
                <button
                  className="dropdown-item text-center"
                  onClick={() => {
                    setData({ ...data, limit: r });
                  }}
                >
                  {r}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
