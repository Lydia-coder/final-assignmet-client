import React from "react";

export default function CommentForm(props) {
  console.log(props, "Whats in here");
  return (
    <form onSubmit={props.onSubmit}>
      <label>Comment:</label>
      <input
        type="text"
        name="comment"
        placeholder="comment"
        value={props.values.text}
        onChange={props.onChange}
      />
      <button type="Submit">POST!</button>
    </form>
  );
}
