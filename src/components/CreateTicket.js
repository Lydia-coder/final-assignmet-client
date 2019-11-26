import React from "react";

export default function CreateEvent(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="picture"
        placeholder="picture"
        value={props.values.picture}
        onChange={props.onChange}
      ></input>
      <input
        type="text"
        name="price"
        placeholder="price"
        value={props.values.name}
        onChange={props.onChange}
      ></input>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={props.values.description}
        onChange={props.onChange}
      ></input>

      <button type="submit">Add Ticket</button>
    </form>
  );
}
