import React, {useState} from 'react';
import {Button, Card, CardBody, CardTitle, Collapse} from "reactstrap";

function FooterEnd(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [to, setTo]=useState(false)

    const toggle = () => setIsOpen(!isOpen);
    const toggle1=()=>setTo(!to)
    return (
        <div className="p-footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <div className="footer-1">
                          Customer service
                      </div>
                      <div className="footer-1">
                          Shipping and Delivery
                      </div>
                      <div className="footer-1">
                          Return Policy
                      </div>
                      <div className="footer-1">
                          FAQs
                      </div>
                      <div className="footer-1">
                          Contact Us
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="footer-1">
                          Customer service
                      </div>
                      <div className="footer-1">
                          Shipping and Delivery
                      </div>
                      <div className="footer-1">
                          Return Policy
                      </div>
                      <div className="footer-1">
                          FAQs
                      </div>
                      <div className="footer-1">
                          Contact Us
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="footer-1">
                          Customer service
                      </div>
                      <div className="footer-1">
                          Shipping and Delivery
                      </div>
                      <div className="footer-1">
                          Return Policy
                      </div>
                      <div className="footer-1">
                          FAQs
                      </div>
                      <div className="footer-1">
                          Contact Us
                      </div>
                  </div>
                  <div className="col-md-3">
                    <div className="title-sec-1">
                        Join PUMA
                    </div>
                      <div className="title-sec-2">
                          Sign up for emails to get special news and exclusive Puma offers.
                      </div>
                      <form className="d-flex ">
                          <input required placeholder='   Email Address' type="text"/>
                          <button type="submit">
                              <img src="/img/olf.png" alt=""/>
                          </button>
                      </form>
                      <div className="elektron">
                          <div className="you">
                              <img src="/img/fac.png" alt=""/>
                          </div>
                          <div className="you">
                              <img src="/img/ins.png" alt=""/>
                          </div>
                          <div className="you">
                              <img src="/img/tw.png" alt=""/>
                          </div>
                          <div className="you">
                              <img src="/img/in.png" alt=""/>
                          </div>
                          <div className="you">
                              <img src="/img/shz.png" alt=""/>
                          </div>
                          <div className="you">
                              <img src="/img/you.png" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
            <div className="collopes">
                <CardTitle className="carttitle" onClick={toggle}>Support
                    {
                        isOpen?<img className="img-sec" src="/img/minus.png" alt=""/>:
                            <img  src="/img/plus.png" alt=""/>
                    }
                </CardTitle>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <div className="col-md-3">
                            <div className="footer-1">
                                Customer service
                            </div>
                            <div className="footer-1">
                                Shipping and Delivery
                            </div>
                            <div className="footer-1">
                                Return Policy
                            </div>
                            <div className="footer-1">
                                FAQs
                            </div>
                            <div className="footer-1">
                                Contact Us
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Collapse>

        </div>
            <div className="collopes">
                <CardTitle className="carttitle" onClick={toggle1}>About PUMA
                    {
                        to?<img className="img-sec" src="/img/minus.png" alt=""/>:
                            <img  src="/img/plus.png" alt=""/>
                    }
                    
                </CardTitle>
                <Collapse isOpen={to}>
                    <Card>
                        <CardBody>
                            <div className="col-md-3">
                                <div className="footer-1">
                                    Customer service
                                </div>
                                <div className="footer-1">
                                    Shipping and Delivery
                                </div>
                                <div className="footer-1">
                                    Return Policy
                                </div>
                                <div className="footer-1">
                                    FAQs
                                </div>
                                <div className="footer-1">
                                    Contact Us
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>

            </div>
        </div>
    );
}

export default FooterEnd;