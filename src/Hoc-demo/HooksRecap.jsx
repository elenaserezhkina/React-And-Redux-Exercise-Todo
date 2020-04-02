import React from "react";

export function HooksRecapFunction() {
  const [name, setName] = React.useState("Leo");
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    console.log("hello");
  }, [name]);

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <h1 onClick={() => setName("Bob")}>{name}</h1>
  );
}

export class HooksRecapClass extends React.Component {
  state = {
    name: "Leo",
    loading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }
  handleChangeName = () => {
    this.setState({ name: "Bob" });
  };
  render() {
    return this.state.loading ? (
      <h1>Loading...</h1>
    ) : (
      <h1 onClick={this.handleChangeName}>{this.state.name}</h1>
    );
  }
}

export function ComponentWithChilds({ children }) {
  return <div> {children}</div>;
}
