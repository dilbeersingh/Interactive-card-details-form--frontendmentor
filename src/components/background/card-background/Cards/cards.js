import React from "react";
import "./styles.css";
import { Front } from "./cardFront/front";
import { Back } from "./cardBack/back";
function Cards() {
  return (
    <div className="cards-section">
      <Front />
      <Back />
    </div>
  );
}

export { Cards };
