import React, { Component } from "react";

import Library from "./Library.jsx";
import Banner from "../components/dashboard/Banner.jsx";
import BannerPage from "../components/dashboard/BannerPage.jsx";

import "./Dashboard.scss";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            banners: []
        };
    }

    componentDidMount() {
        const banners = [
            {
                name: "The 100",
                src: "/banner1.jpg",
                desc: "Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanity's lone survivors sends one hundred juvenile delinquents back to Earth, in hopes of possibly re-populating the planet."
            },
            {
                name: "Blade Runner 2049",
                src: "/banner6.jpg",
                desc: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years."
            },
            {
                name: "The Expanse",
                src: "/banner3.jpg",
                desc: "A thriller set two hundred years in the future following the case of a missing young woman who brings a hardened detective and a rogue ship's captain together in a race across the solar system to expose the greatest conspiracy in human history."
            }
        ];

        this.setState({ banners });
    }

    render() {
        return (
            <main>
                <BannerPage>
                    {this.state.banners.map(({name, src, desc}, i) => <Banner key={i} src={src} title={name} description={desc}/>)}
                </BannerPage>

                <Library path="http://86.21.150.167:8000/api/v1/dashboard"/>
            </main>
        );
    }
}

export default Dashboard;
