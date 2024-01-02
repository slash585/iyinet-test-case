import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faSuitcase,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

const Icons = ({ iconName }) => {
  const selectedIcons = () => {
    return iconName === "box"
      ? faArchive
      : iconName === "bigbags"
      ? faSuitcase
      : iconName === "sacks"
      ? faSackDollar
      : iconName === "barrels"
      ? faSackDollar
      : iconName === "roll"
      ? faSackDollar
      : iconName === "pipes"
      ? faSackDollar
      : iconName === "Bulk"
      ? faSackDollar
      : "";
  };

  return (
    <>
      <FontAwesomeIcon icon={selectedIcons()} />
    </>
  );
};

export default Icons;
