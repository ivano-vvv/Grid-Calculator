import React from "react";
import Input from "./common/input";
import "./form.css";
import Indicator from "./common/indicator";

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className={"form " + props.className}>
      <div className="form__input-block">
        <label className="text" htmlFor="maxWidth">
          Max. container width, px
        </label>
        <Input
          name="maxWidth"
          value={props.values.maxWidth}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
      <div className="form__input-block">
        <label className="text" htmlFor="columns">
          Amount of columns
        </label>
        <Input
          name="columns"
          value={props.values.columns}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type="number"
        />
      </div>
      <div className="form__input-block">
        <label className="text" htmlFor="minGutter">
          Min. gutter width, px
        </label>
        <Input
          name="minGutter"
          value={props.values.minGutter}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type="number"
        />
      </div>
      <div className="form__input-block">
        <label className="text" htmlFor="maxGutter">
          Max. gutter width, px
        </label>
        <Input
          name="maxGutter"
          value={props.values.maxGutter}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type="number"
        />
      </div>
      <div className="form__input-block">
        <label className="text" htmlFor="margin">
          Margin, px
        </label>
        <Input
          name="margin"
          value={props.values.margin}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type="number"
        />
      </div>
      <div className="form__checkboxes-panel">
        {props.values.checkboxes.map((d) => {
          return (
            <Indicator
              className="form__checkbox-item"
              key={d.divider}
              divider={d.divider}
              value={d.value}
              type="checkbox"
              onClick={props.onCheckboxClick}
            />
          );
        })}
      </div>
      <button className="form__submit">Calculate</button>
    </form>
  );
}