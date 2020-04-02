import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
}

function ConnectedForm(props) {
  const [title, setTitle] = React.useState("");
  const handleChange = event => {
    setTitle(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={handleChange} />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
