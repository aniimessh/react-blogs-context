import React, { useContext } from "react";
import { appContext } from "../context/AppContext";

function Pagination() {
  const { pageCount, changePageHandler, totalPages } = useContext(appContext);
  return (
    <div className="w-[40%] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          {pageCount > 1 && (
            <button
              onClick={() => changePageHandler(pageCount - 1)}
              className="border-2 py-[4px] px-[5px] rounded-md"
            >
              Previous
            </button>
          )}
          {pageCount < totalPages && (
            <button
              onClick={() => changePageHandler(pageCount + 1)}
              className="border-2 py-[4px] px-[5px] rounded-md"
            >
              Next
            </button>
          )}
        </div>
        <div>
          <p>{`${pageCount} of ${totalPages}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
