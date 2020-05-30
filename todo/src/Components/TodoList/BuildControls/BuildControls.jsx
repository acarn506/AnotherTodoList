import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Exercise", type: "Exercise" },
  { label: "Reading", type: "Reading" },
  { label: "Baking", type: "Baking" },
  { label: "Website", type: "Website" },
  { label: "ReactStudy", type: "ReactStudy" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((ctrl, i) => {
        return <BuildControl key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
};

export default BuildControls;
