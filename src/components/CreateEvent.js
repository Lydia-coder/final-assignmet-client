import React from "react";
import { Modal } from "react-bootstrap";

export default function CreateEvent(props) {
  return (
    <Modal
      show={props.CreateEventModalVisible}
      onHide={() => props.toggleCreateEventModal(false)}
    >
      <form className="p-3" onSubmit={props.onSubmit}>
        <h3>Create an Event</h3>
        <div className="form-group">
          <input
            type="text"
            name="image"
            placeholder="image"
            value={props.values.image}
            onChange={props.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={props.values.name}
            onChange={props.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="description"
            value={props.values.description}
            onChange={props.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="startDate"
            placeholder="startDate"
            value={props.values.startDate}
            onChange={props.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="endDate"
            placeholder="endDate"
            value={props.values.endDate}
            onChange={props.onChange}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add Events
        </button>
      </form>
    </Modal>
  );
}
