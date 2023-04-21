import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  // props.className: Passing classNames from parent component
  // (Expenses and ExpenseItem) to this Child component.

  return <div className={classes}>{props.children}</div>;

  // renders the content between opening and closing tags of parent components
};

export default Card;

// In JSX expressions that contain both an opening tag and a closing tag,
// the content between those tags is passed as a special prop: props.children.
// Essentially, props.children is a special prop, automatically passed to every
// component, that can be used to render the content included between the opening
// and closing tags when invoking a component.These kinds of components are
// identified by the official documentation as “boxes”
