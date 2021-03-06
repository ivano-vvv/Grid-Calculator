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
        onDecrease={props.functionsOfChange.decreaseColumnWidth}
        onIncrease={props.functionsOfChange.increaseColumnWidth}
        value={props.gridConfig.column}
        desc="column, px"
        className="grid-config-panel__result-value"
      />
      <ResultValue
        onDecrease={props.functionsOfChange.decreaseGutter}
        onIncrease={props.functionsOfChange.increaseGutter}
        value={props.gridConfig.gutter}
        desc="gutter, px"
        className="grid-config-panel__result-value"
      />
    </div>
  );
}
