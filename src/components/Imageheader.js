import React from 'react';
import NavbarJs from "./NavbarJs";

function Imageheader(props) {
    return (
        <div>
            <NavbarJs/>
            <div className="image-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                WINTER MODE ACTIVATED
                            </p>
                        </div>
                        <div className="col-md-12">
                            <div className="img-body">
                                ESSENTIAL COLD WEATHER STYLE
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="img-footer">
                                SHOP NOW
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Imageheader;