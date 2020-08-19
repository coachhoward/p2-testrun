const React = require("react");
class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <>
        <h1>Vegetables Index is a Page that tells you the </h1>
        {vegetables.map((vegetable) => {
          return (
            <div key={vegetable._id}>
              <p>{vegetable.name}</p>
              <li>
                                    The <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is {vegetable.color} <br></br>
                                    {vegetable.isGreen ? `It is Green` : `It is Green`}
                                    {/* /vegetables/id_of_the_fruit/override_post_method */}
                                    <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /vegetables/id_of_fruit/edit */}
                                    <a href={`/vegetables/${vegetable._id}/edit`}>Edit</a>
                                </li>





            </div>
          );
        })}
      </>
    );
  }
}
module.exports = Index;
