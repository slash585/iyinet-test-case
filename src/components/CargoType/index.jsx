import { React, useState } from "react";
import data from "../../data/cargoType.json";
import Icons from "../Icons";
import "./style.css";
import Title from "../Title";

const CargoType = ({ changeCargoImage }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handleClickCard = (index, imageUrl) => {
    setSelectedCardIndex(index);
    changeCargoImage(imageUrl)
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
                handleClickCard(index, item.imageUrl);
              }}
              className={`card ${
                selectedCardIndex === index ? "selected-card" : ""
              }`}
            >
              <Icons iconName={item.name} />
              <div className="card-name">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CargoType;
