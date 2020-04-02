import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { tasks: state.tasks };
};
const mapDispatchToProps = state => {
  //   return Something;
};

const ConnectedList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => {
        return <li>{task.title}</li>;
      })}
    </ul>
  );
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
// connect(tasks:state.tasks)(
// <ul>
//   {tasks.map(task => {
//     return <li>{task.title}</li>;
//   })}
// </ul>)
export default List;
