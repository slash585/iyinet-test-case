import React from "react";
import { ReactComponent as Bag } from "../../assets/bag.svg";
import { ReactComponent as Barrel } from "../../assets/barrel.svg";
import { ReactComponent as Box } from "../../assets/box.svg";
import { ReactComponent as Bulk } from "../../assets/bulk.svg";
import { ReactComponent as Pipe } from "../../assets/pipe.svg";
import { ReactComponent as Sack } from "../../assets/sack.svg";
import "./style.css";

const Icons = ({ iconName }) => {
  const selectedIcons = () => {
    return iconName === "box" ? (
      <Box />
    ) : iconName === "bigbags" ? (
      <Bag />
    ) : iconName === "sacks" ? (
      <Sack />
    ) : iconName === "barrels" ? (
      <Barrel />
    ) : iconName === "roll" ? (
      <Barrel />
    ) : iconName === "pipes" ? (
      <Pipe />
    ) : iconName === "bulk" ? (
      <Bulk />
    ) : (
      <Box />
    );
  };

  return <div className="icons">{selectedIcons()}</div>;
};

export default Icons;
