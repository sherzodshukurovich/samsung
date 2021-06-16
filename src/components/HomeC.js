import React, {useContext, useState} from "react";
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
import { toast } from 'react-toastify';
const HomeC = () => {
    const state = useContext(StoreContext);
    const [cart, setCart] = state.cart;
    const [products, setProducts]=state.products
    const addCart = (data) => {
        setCart([...cart, data]);

        toast.success("Muvaqqaqiyatli qo'shildi");

    };
    return (
        <div className="bg-light pt-5">
            <div className="container ">
                <div className="row">
                    {products.map((item) => (
                        <div key={item.id} className="col-lg-3 mt-5 col-md-4 com-sm-6 col-12">
                            <Card className="h-100">
                                <CardImg top width="100%" src={item.img} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardSubtitle>{item.price} $</CardSubtitle>
                                    {cart.findIndex((pr) => pr.id === item.id) === -1 ? (
                                        <Button className="w-100" onClick={() => addCart(item)}>
                                            Add to cart

                                        </Button>
                                    ) : (
                                        <Button className="w-100 bg-success"  >
                                            In to cart
                                        </Button>
                                    )}
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default HomeC;