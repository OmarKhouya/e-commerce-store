import { useEffect, useState } from "react";
import { getSearchData } from "../../store/actions";
import { useDispatch } from "react-redux";

// Component for displaying data, handling search, and setting display limit
export default function DataDisplay({ setDisplay, category }) {
  // Array of display limit options
  const range = [16, 32, 64, 100];

  // State to manage the data and limit for display
  const [data, setData] = useState({ limit: 16 });

  // Update the display limit when data changes
  useEffect(() => {
    setDisplay(data);
  }, [data, setDisplay]);

  // Redux dispatch hook
  const dispatch = useDispatch();

  // Handler function for search input
  const handleSearch = (e) => {
    dispatch(getSearchData(e.target.value));
  };

  // Render the data display navigation
  return (
    <nav className="">
      <div
        className="m-2 p-3 rounded d-flex justify-content-between"
        style={{ backgroundColor: "#87CBB9" }}
      >
        {/* Search input */}
        <div className="w-75 input-group">
          <input
            type="text"
            className="form-control"
            placeholder={`search here! ${
              category !== undefined ? "(" + category + ")" : ""
            }`}
            onChange={handleSearch}
          />
        </div>

        {/* Dropdown for changing display limit */}
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
