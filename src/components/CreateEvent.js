import React from "react";

export default function CreateEvent(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="image"
        placeholder="image"
        value={props.values.image}
        onChange={props.onChange}
      ></input>
      <label>EVENT</label>
      <input
        type="text"
        name="name"
        placeholder="name"
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
      <input
        type="text"
        name="startDate"
        placeholder="startDate"
        value={props.values.startDate}
        onChange={props.onChange}
      ></input>
      <input
        type="text"
        name="endDate"
        placeholder="endDate"
        value={props.values.endDate}
        onChange={props.onChange}
      ></input>

      <button type="submit">Add Events</button>
    </form>
  );
}
