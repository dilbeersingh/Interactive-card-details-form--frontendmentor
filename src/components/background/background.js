import React from "react";
import { FormBack } from "./form-background/formBack";
import { CardBack } from "./card-background/cardBack";
import "./styles.css";

function Background() {
  return (
    <div className="background-section">
      <CardBack />
      <FormBack />
    </div>
  );
}

export { Background };
