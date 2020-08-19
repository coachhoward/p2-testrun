const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <>
        <h1>Vegetables Index Page</h1>
        {vegetables?.map((vegetable) => {
          return (
            <div key={vegetable._id}>
              <p>{vegetable.name}</p>
            </div>
          );
        })}
      </>
    );
  }
}

module.exports = Index;
