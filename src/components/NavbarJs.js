import React, { useState ,useContext} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,


} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { StoreContext } from "../Store";
const NavbarJs = (props) => {
    const state = useContext(StoreContext);
    const [cart] = state.cart;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar light  expand="md">

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to='/'>Women</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/img" >Men</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/coc'>Kids</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/krosovka'>Select</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/cardb'>Outlet</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>

                  <div className="menu">
                      <ul className="d-flex ulli">
                          <li>
                              <NavLink to="/">
                                  <NavbarBrand className="mr-5" >
                                      <img  src="/img/logoo.png" alt=""/>
                                  </NavbarBrand>
                              </NavLink>

                          </li>
                          <li>
                              <img src="/img/search.png" alt=""/>
                          </li>
                          <li>
                              <NavLink to="/footer">
                                  <img src="/img/yurak.png" alt=""/>
                              </NavLink>

                          </li>
                          <li>
                              <NavLink to="/port">
                                  <img src="/img/port.png" alt=""/>
                                  <span  className="badge badge-danger doc">{cart.length}</span>
                              </NavLink>

                          </li>
                          <li>
                              <NavLink to="/baby">
                                  <img src="/img/ellips.png" alt=""/>
                              </NavLink>

                          </li>
                      </ul>
                  </div>

            </Navbar>
        </div>
    );
}

export default NavbarJs;