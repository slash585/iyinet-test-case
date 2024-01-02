import { React, useState } from "react";
import data from "../../data/cargoType.json";
import Icons from "../Icons";
import "./style.css";
import Title from "../Title";

const CargoType = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handleClickCard = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div className="cargo-type">
      <Title text={"1. Select Cargo Type"} />
      <div className="card-container">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleClickCard(index);
              }}
              className={`card ${
                selectedCardIndex === index ? "selected-card" : ""
              }`}
            >
              <Icons iconName={item} />
              <div className="card-name">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CargoType;
