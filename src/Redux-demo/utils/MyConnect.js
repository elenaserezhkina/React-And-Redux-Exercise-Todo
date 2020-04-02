import React from "react";
import PropTypes from "prop-types";

//This is the Higher Order Component
//(tasks:state.tasks)(

function myConnect(mapStateToPropsFunc) {
  // tasks: state.tasks
  // mapStateToPropsFunc = function mapStateToProps(state){
  //   return state.name
  // }
  return function(WrappedComp) {
    //  <ul>
    //   {tasks.map(task => {
    //     return <li>{task.title}</li>;
    //   })}
    // </ul>)
    // WrappedComp = <TestComp />
    var myHOC = class HOC extends React.Component {
      render() {
        //Now we access redux store using react context api as it will be passed by myProvider automatically to all child components
        var myStore = this.context.store.getState();
        // myStore = {tasks:[{id:0, title:"learn html"}]}

        //mapStateToPropsFunc is just used to structure the props required by the component so we pass it the whole store and then it returns an mapped object with required props

        var storeToBePassed = mapStateToPropsFunc(myStore);
        // storeToBePassed = return tasks:[{id:0, title:"learn html"}
        return (
          //We pass the result from executing mapStateToPropsFunc to the wrapped component and this is how the components get passed props from redux store
          // <TestComp name={Amr} />
          // <ConnectedList tasks={tasks:[{id:0, title:"learn html"}]}
          <WrappedComp {...storeToBePassed} />
        );
      }
    };

    //We need to define contextTypes otherwise context will be empty
    myHOC.contextTypes = {
      store: PropTypes.object
    };

    //return new component that has access to redux store as props mapped using mapStateToProps function
    return myHOC;
  };
}
export default myConnect;
