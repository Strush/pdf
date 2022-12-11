import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectOption from "../screens/SelectOption";
import { Store } from "../Store";

export default function SliderOtions() {
  const { state } = useContext(Store);
  const { rows, page } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (page > rows.length) {
      navigate("/pdf");
    }
  }, [page, navigate, rows.length]);

  return (
    <>
      {rows.map((item) => (
        <div
          key={item.id}
          id={`render-${item.id}`}
          className={page == item.id + 1 ? "d-block" : "d-none"}
        >
          <div className="mb-5">
            <h3 className="mb-0 dark-blue title">
              For the quality standard related to "{item.text}", please selelect
              all the mechanisms that are required to ensure that this standard
              is archived
            </h3>
          </div>
          <SelectOption standard={item.text} />
        </div>
      ))}
    </>
  );
}
