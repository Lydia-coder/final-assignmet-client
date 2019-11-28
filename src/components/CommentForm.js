import React from "react";

export default function CommentForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Comment:</label>
      <input
        type="text"
        name="comment"
        placeholder="comment"
        // value={props.values.comment}
        onChange={props.onChange}
      />
      <button type="Submit">POST!</button>
    </form>
  );
}
