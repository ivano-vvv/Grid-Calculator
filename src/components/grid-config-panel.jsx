import React from "react";
import ResultValue from "./result-value";
import "./grid-config-panel.css";

export default function GridConfigPanel(props) {
  return (
    <div className="grid-config-panel">
      <ResultValue
        onDecrease={props.functionsOfChange.decreaseContainer}
        onIncrease={props.functionsOfChange.increaseContainer}
        value={props.gridConfig.container}
        desc="container, px"
        className="grid-config-panel__result-value"
      />
      <ResultValue
        onDecrease={props.functionsOfChange.decreaseColumnsAmount}
        onIncrease={props.functionsOfChange.increaseColumnsAmount}
        value={props.gridConfig.amountOfColumn}
        desc="columns"
        className="grid-config-panel__result-value"
      />
      <ResultValue
        value={props.gridConfig.column}
        desc="column, px"
        className="grid-config-panel__result-value"
      />
      <ResultValue
        value={props.gridConfig.gutter}
        desc="gutter, px"
        className="grid-config-panel__result-value"
      />
      <ResultValue
        value={props.gridConfig.margin}
        desc="margin, px"
        className="grid-config-panel__result-value"
      />
    </div>
  );
}
