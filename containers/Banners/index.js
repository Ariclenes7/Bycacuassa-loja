/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React, { Component } from 'react';

const IMAGES = [
    "/static/banners/1.png",
    "/static/banners/1.png",
    "/static/banners/1.png",
    "/static/banners/1.png",
];

class Banners extends Component {
    state = {
        img: IMAGES[0],
        idx: 0
    }

    onChange = (index) => {
        let opcao = (index < 0) ?
            IMAGES.length - 1 :
            (index >= IMAGES.length) ?
                0 :
                index;
        this.setState({ img: IMAGES[opcao], idx: opcao });
    }

    componentDidMount() {
        this.scroll = window.setInterval(() => this.onChange(this.state.idx + 1), 5000);
    }

    componentWillUnmount() {
        window.clearInterval(this.scroll);
    }

    renderBanners() {
        const { img } = this.state;
        return (
            <div className="flex-1 banner">
                <img src={img} className="banner" alt="banner" width="100%" height="698" />
            </div>
        )
    }

    render() {
        return (
            <div className="Banners flex">
                { this.renderBanners()}
            </div>
        )
    }
}

export default Banners;