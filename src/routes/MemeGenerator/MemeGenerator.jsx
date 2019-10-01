import React, { Component } from 'react'
import './MemeGenerator.scss'
import Slider from 'components/Slider/Slider';

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            all_memes: [null],
            current_meme: {
                id: null,
                name: null,
                url: '',
                width: null,
                height: null,
            },

            loaded_image: false,

            top_text: 'Top text',
            bottom_text: 'Bottom text',

            text_style: {
                color: '#FFFFFF',
                fontSize: "30px",
                fontWeight: 'bold',
                fontStyle: 'normal',
            },
        }
    }

    componentDidMount = () => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(res => res.data.memes)
            .then(memes => { this.setState({ all_memes: memes }) })
            .then(() => this.setRandomMeme())
    }

    handleChange = (e) => {
        const { type, name, value, checked } = e.target
        if (type === 'checkbox') {
            if (name === 'bold') this.setState({ text_style: { ...this.state.text_style, fontWeight: checked ? 'bold' : 'normal' } })
            if (name === 'italic') this.setState({ text_style: { ...this.state.text_style, fontStyle: checked ? 'italic' : 'normal' } })
        }

        if (type === 'color') {
            if (name === 'color') this.setState({ text_style: { ...this.state.text_style, color: value } })
        }

        if (type === 'range') {
            if (name === 'size') this.setState({ text_style: { ...this.state.text_style, fontSize: `${value}px` } })
        }

        if (type === 'text') {
            if (name === 'top_text') this.setState({ top_text: value })
            if (name === 'bottom_text') this.setState({ bottom_text: value })
        }
    }

    handleLoad = (e) => {
        this.setState({ loaded_image: true })
        document.getElementById('meme-editor').focus()
    }

    setRandomMeme = () => {
        const rnd = Math.floor(Math.random() * this.state.all_memes.length)
        const new_meme = this.state.all_memes[rnd]
        this.setState({
            current_meme: new_meme,
            loaded_image: false,
        })
    }

    render() {
        return (
            <div className="page MemeGeneratorPage">
                <h1>MemeGenerator</h1>

                <div className="controls">
                    <button name="rnd_meme" className="lg" onClick={this.setRandomMeme}>Random Meme</button>
                    <div>
                        <label>
                            <input name="bold" type="checkbox"
                                checked={this.state.text_style.fontWeight === 'bold'}
                                onChange={this.handleChange} />
                            Bold
                         </label>
                        <label>
                            <input name="italic" type="checkbox"
                                checked={this.state.text_style.fontStyle === 'italic'}
                                onChange={this.handleChange} />
                            Italic
                        </label>
                        <label>
                            <input name="color" type="color"
                                value={this.state.text_style.color}
                                onChange={this.handleChange} />
                            Color
                        </label>
                    </div>
                    <Slider name="size" id="size" min="20" max='70' onChange={this.handleChange}></Slider>
                    <label htmlFor="size">Font size</label>
                </div>

                {!this.state.loaded_image && <h3 className="loading">Loading..</h3>}

                <div className="editor" id="meme-editor" style={{ opacity: this.state.loaded_image ? '1' : '0.2' }}>
                    <img id="meme" src={this.state.current_meme.url} alt="meme" onLoad={this.handleLoad}></img>
                    <input type="text" style={this.state.text_style} name="top_text" value={this.state.top_text} placeholder="Edit Top Text" onChange={this.handleChange} />
                    <input type="text" style={this.state.text_style} name="bottom_text" value={this.state.bottom_text} placeholder="Edit Bottom Text" onChange={this.handleChange} />
                </div>

                <small>Saving would require a CORS enabled server</small>
            </div>
        )
    }
}
