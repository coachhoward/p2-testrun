const React = require('react');

class Show extends React.Component {
    render() {
    
        const { name, color, isGreen } = this.props.vegetable;
        return (
            <div>
                <h1>Vegetables Show Page</h1>

                


                <p>The {name} is {color} </p>
                <p>{isGreen ? `Green` : `not Green`}</p> 
                <a href={`/vegetables/`}>Home Index</a>
                
               
            </div>
        )
    }
}

module.exports = Show;