const React = require('react');

class Edit extends React.Component {
    render() {
const { _id, name, color, isGreen} = this.props.vegetable
        return (
            <div>
                <h1>Vegetables Edit Page</h1>
                {/* url - /vegetabless/id_of_vegetable? parameter to indicate the request */}

                <form action={`/vegetables/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/> <br/>
                    Is Green: 
                    <input type="checkbox" name="isGreen" checked={isGreen}/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>

                </form>
            </div>
        )
    }
}

module.exports = Edit;