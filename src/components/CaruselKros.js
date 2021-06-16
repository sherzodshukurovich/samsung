import React, {Component} from "react";
import Slider from "react-slick";
export default class CaruselKros extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [

                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <div className="newCarusel1 p-0 ">
                <div className="container mt-5 p-0 ">
                    <div className="title-slider">
                        New in RS
                    </div>
                    <Slider {...settings}>
                        <div className="card-h">
                            <div className="img-header">
                                <img src="/img/poyabzal-1.png" alt=""/>
                            </div>
                            <div className="ggg">

                                <div className="text-body">
                                    RS-Fast INTL Game
                                </div>
                                <div className="element">
                                    <div className="element-1">
                                        $110.00
                                    </div>
                                    <div className="element-2">
                                        <img src="/img/pass.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-h">
                            <div className="img-header">
                                <img src="/img/2-k.png" alt=""/>
                            </div>
                            <div className="ggg">

                                <div className="text-body">
                                    RS-Fast Futurverse
                                </div>
                                <div className="element">
                                    <div className="element-1">
                                        $110.00
                                    </div>
                                    <div className="element-2">
                                        <img src="/img/pass.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-h">
                            <div className="img-header">
                                <img src="/img/3-k.png" alt=""/>
                            </div>
                            <div className="ggg">

                                <div className="text-body">
                                    RS-Fast INTL
                                </div>
                                <div className="element">
                                    <div className="element-1">
                                        $110.00
                                    </div>
                                    <div className="element-2">
                                        <img src="/img/pass.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-h">
                            <div className="img-header">
                                <img src="/img/4-k.png" alt=""/>
                            </div>
                            <div className="ggg">

                                <div className="text-body">
                                    RS-Curve Glow
                                </div>
                                <div className="element">
                                    <div className="element-1">
                                        $110.00
                                    </div>
                                    <div className="element-2">
                                        <img src="/img/pass.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-h">
                            <div className="img-header">
                                <img src="/img/3-k.png" alt=""/>
                            </div>
                            <div className="ggg">

                                <div className="text-body">
                                    RS-Fast INTL Game
                                </div>
                                <div className="element">
                                    <div className="element-1">
                                        $110.00
                                    </div>
                                    <div className="element-2">
                                        <img src="/img/pass.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}