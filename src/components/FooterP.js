import React ,{useState}from 'react';
import {Button,Collapse,Card,CardBody} from "reactstrap";

function FooterP(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="menu-body">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 ">
                       <div className="title-img">
                           <img src="/img/koy.png" alt=""/>
                       </div>
                        <div className="title-text">
                            T-shorts & tees
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="title-img">
                            <img src="/img/kurtka.png" alt=""/>
                        </div>
                        <div className="title-text">
                            Outerwear
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="title-img">
                            <img src="/img/shim.png" alt=""/>
                        </div>
                        <div className="title-text">
                            Track Pants
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FooterP;