import { useEffect, useState } from "react";
import { getSearchData } from "../../store/actions";
// import { RiSearchFill } from "react-icons/ri";
// import { IoRefreshCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function DataDisplay({ setDisplay,category }) {
  const range = [16, 32, 64, 100];
  
  const [data, setData] = useState({ limit: 16 });
  useEffect(() => {
    setDisplay(data);
  }, [data, setDisplay]);
  
  const dispatch = useDispatch();

  const handleSearch = (e)=>{
    dispatch(getSearchData(e.target.value)) 
  }

  return (
    <nav className="">
      <div
        className="m-2 p-3 rounded d-flex justify-content-between"
        style={{ backgroundColor: "#87CBB9" }}
      >
        <div className="w-75 input-group">
          <input
            type="text"
            className="form-control"
            placeholder={`search here! ${category !== undefined ? "("+category+")" : ""}`}
            onChange={handleSearch}
          />
          {/* <button type="button" className="btn" onClick={handleSearch}>
            <IoRefreshCircleOutline />
          </button> */}
        </div>
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
