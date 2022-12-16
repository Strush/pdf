import React from "react";
import { useContext } from "react";
import { Store } from "../Store";
import SliderOtions from "../components/SliderOtions";
import AddOption from "../screens/AddOption";

export default function HomePage() {
  const { state } = useContext(Store);
  const { isShow } = state;

  return (
    <div className="app">
      <div className="container">
        <div className="main box">
          {isShow ? <AddOption /> : <SliderOtions />}
        </div>
      </div>
    </div>
  );
}
