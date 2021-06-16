import React, { useContext } from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
} from "reactstrap";
import { StoreContext } from "../Store";

const Home = () => {
    const state = useContext(StoreContext);
    const [cart, setCart] = state.cart;
    const addCart = (data) => {
        setCart([...cart, data]);
    };
    return (
        <div className="container">
            <div className="row">
                {state.products.map((item) => (
                    <div key={item.id} className="col-lg-3 col-md-4 com-sm-6 col-12">
                        <Card>
                            <CardImg top width="100%" src={item.img} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{item.name}</CardTitle>
                                <CardSubtitle>{item.price} $</CardSubtitle>
                                <CardText>{item.inf}</CardText>
                                {cart.findIndex((pr) => pr.id === item.id) === -1 ? (
                                    <Button className="w-100" onClick={() => addCart(item)}>
                                        Add to cart
                                    </Button>
                                ) : (
                                    <div className="w-100 d-flex justify-content-between">
                                        <Button color="danger">-</Button>
                                        <span>1</span>
                                        <Button color="success">+</Button>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;