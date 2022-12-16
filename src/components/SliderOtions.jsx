import React, { useContext } from "react";
import SelectOption from "../screens/SelectOption";
import { Store } from "../Store";

export default function SliderOtions() {
  const { state } = useContext(Store);
  const { rows, page } = state;

  return (
    <>
      {rows.map((item, index) => (
        <div
          key={item.id}
          id={`render-${item.id}`}
          className={page === index ? "d-block" : "d-none"}
        >
          <div className="mb-4 mb-sm-5">
            <h3 className="mb-0 dark-blue title">
              For the quality standard related to "{item.text}", please selelect
              all the mechanisms that are required to ensure that this standard
              is archived
            </h3>
          </div>
          <SelectOption standard={item.text} rowsCount={rows.length} />
        </div>
      ))}
    </>
  );
}
