import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
} from "../../redux/slices/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const handleTitleFilterChanges = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            onChange={handleTitleFilterChanges}
            type="text"
            placeholder="Filter by title...."
          />

          <button className="" onClick={handleResetFilters} type="button">
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
