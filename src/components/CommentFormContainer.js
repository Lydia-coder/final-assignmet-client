// import React from "react";
// import { connect } from "react-redux";
// import { createComment } from "../actions";
// import CommentForm from "./CommentForm";

// class CommenFtormConatainer extends React.Component {
//   state = {
//     text:""
//   };

//   onChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   onSubmit = event => {
//     event.preventDefault();

//     this.props.createComment(this.state);
//     this.setState({
//       text: ""
//     });
//   };

//   render() {
//     return (
//       <Commentform
//         onSubmit={this.onSubmit}
//         onChange={this.onChange}
//         values={this.state}
//       />
//     );
//   }
// }

// export default connect(null, { createComment })(CommentFormContainer);
