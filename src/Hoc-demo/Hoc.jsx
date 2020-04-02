import React from "react";

const withSecretToLife = WrappedComponent => {
  // WrappedComponent = props => <h1 style={props.style}>The Secret of life is {props.secretToLife}</h1>
  function HOC() {
    // return <h1 style={props.style}>The Secret of life is {props.secretToLife}</h1>
    return <WrappedComponent style={{ color: "red" }} secretToLife={42} />;
  }
  return HOC;
};

const DisplayTheSecret = props => (
  <h1 style={props.style}>The Secret of life is {props.secretToLife}</h1>
);

export const HeaderWithSecret = withSecretToLife(DisplayTheSecret);
// DisplayTheSecret = <h1 style={props.style}>The Secret of life is {props.secretToLife}</h1>

const withData = WrappedComponent => {
  const HOC = props => {
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(results => {
          setResults(results);
          setLoading(false);
        });
    }, []);
    return loading ? (
      <h1>Loading</h1>
    ) : (
      <WrappedComponent data={results}>{props.children}</WrappedComponent>
    );
  };
  return HOC;
};

const List = props => {
  return (
    <div>
      {props.data.map((article, idx) => (
        <h1 key={idx}>{article.title}</h1>
      ))}
    </div>
  );
};

export const HeaderWithData = withData(List);

const withGradient = WrappedComponent => {
  function HOC() {
    return (
      <WrappedComponent
        style={{
          backgroundImage:
            "linear-gradient(to left, violet, indigo, blue, green, orange, red)",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent"
        }}
      />
    );
  }
  return HOC;
};

const Header = props => <h1 style={props.style}>Hello World</h1>;

export const Gradient = withGradient(Header);

const withUpperCase = WrapperComponent => {
  function HOC({ children }) {
    return <WrapperComponent>{children.toUpperCase()}</WrapperComponent>;
  }
  return HOC;
};

const Header2 = props => <h1>{props.children}</h1>;

export const HeaderUp = withUpperCase(Header2);
