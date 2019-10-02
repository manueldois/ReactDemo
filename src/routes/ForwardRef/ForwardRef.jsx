import React from 'react'
import './ForwardRef.scss'

export default class ForwardRefPage extends React.Component {
    constructor(props) {
        super(props);
        this.detailsElementRef = React.createRef();
    }

    toggleDetailsElement = () => {
        console.log(this.detailsElementRef)
        this.detailsElementRef.current.open = !this.detailsElementRef.current.open
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <div className="page ForwardRefPage">
                <h1>ForwardRefPage</h1>
                <details ref={this.detailsElementRef}>
                    <summary>Details Element</summary>
                    <p>The HTML Details Element (&lt;details&gt;) creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label can be provided using the &lt;summary&gt; element.</p>
                </details>
                <br/>
                <button onClick={this.toggleDetailsElement}>Toggle Details Element</button>
            </div>
        );
    }
}