import React, { Component } from 'react'
import './Slider.scss'

export default class Slider extends Component {
    render() {
        return (
            <div className="Slider">
                <input name={this.props.name} type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}/>
            </div>

        )
    }
}
