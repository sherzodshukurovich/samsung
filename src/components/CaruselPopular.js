import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive:[

                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <div className="newCarusel p-0">
                <div className="container mt-5 p-0" >
                  <div className="title-slider">
                      Popular product
                  </div>
                    <Slider {...settings}>
                        <div className="section-1">
                            <div className="slider-body">
                                RS-Fast INTL
                            </div>
                            <div className="slider-footer">
                                Men's Sneakers
                            </div>
                            <div className="slider-menu">
                                SHOP
                            </div>
                        </div>
                        <div className="section-2">
                            <div className="carusel-img">
                                <div className="carusel-header">
                                    Clyde Core Foil
                                </div>
                                <div className="carusel-body">
                                    Women's Sneakers
                                </div>
                                <div className="carusel-footer">
                                    SHOP
                                </div>
                            </div>

                        </div>
                        <div className="section-1">
                            <div className="slider-body">
                                RS-Fast INTL
                            </div>
                            <div className="slider-footer">
                                Men's Sneakers
                            </div>
                            <div className="slider-menu">
                                SHOP
                            </div>
                        </div>
                        <div className="section-2">
                            <div className="carusel-img">
                                <div className="carusel-header">
                                    Clyde Core Foil
                                </div>
                                <div className="carusel-body">
                                    Women's Sneakers
                                </div>
                                <div className="carusel-footer">
                                    SHOP
                                </div>
                            </div>

                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}