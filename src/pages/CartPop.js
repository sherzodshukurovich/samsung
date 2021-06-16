import React, {useContext, useState} from 'react';
import {StoreContext} from "../Store";
import {Button, Card, CardBody, CardImg, CardSubtitle,CardFooter, CardTitle} from "reactstrap";
import NavbarJs from "../components/NavbarJs";
import { toast } from 'react-toastify';
import Checkout from "../components/Checkout";
function CartPop(props) {

    const state = useContext(StoreContext);
    const [cart, setCart] = state.cart;
    const [colbeck, setCol]=useState(false);
    const [products, setProducts]=state.products;
 const dec=(id)=>{
     const product=cart.find((item)=>item.id===id)
      const index=cart.findIndex((item)=>item.id===id)
     product.quantity+=1;
     const cart2=cart;
     cart2.splice(index,1,product);
     setCart(cart2);
     setCol(!colbeck)
 };
    const inc=(id)=>{
        const product=cart.find((item)=>item.id===id);
        const index=cart.findIndex((item)=>item.id===id)
        product.quantity-=1;
        const cart2=cart;
        cart2.splice(index,1,product)
        setCart(cart2)
        setCol(!colbeck)
    }
   const deleteFunc=(id)=>{
     const cart2=cart
       const index=cart.findIndex((item)=>item.id===id)
       cart2.splice(index,1)
       let a=[...cart2]
       setCart(a)
       setCol(!colbeck)
       toast.success("O'chirish muvaffaqiyatli amalga oshirildi !!!")
    }


    return (
        <div>
         <NavbarJs/>
            <div className="container mt-5 ">
                <div className="row">
                    {
                        cart.map((item,index) => (
                        <div key={item.id} className="col-lg-3 col-md-4 com-sm-6 col-12">
                            <Card className="mt-4 h-100">
                                <CardImg top width="100%" src={item.img} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardSubtitle>{item.price} $</CardSubtitle>
                                    <CardSubtitle>Umumiy narxi: {item.price*item.quantity} $</CardSubtitle>


                                        <div className="w-100 d-flex justify-content-between">
                                            <Button onClick={()=>inc(item.id)} color="danger">-</Button>
                                            <span>{item.quantity}</span>
                                             <Button onClick={()=>dec(item.id)} color="success">+</Button>
                                        </div>

                                </CardBody>
                                <CardFooter onClick={()=>deleteFunc(item.id)}   className="btn  btn-block mt-2 bg-danger text-white">
                                    Delet
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
               <Checkout cart={cart}/>
            </div>


        </div>

    );
}

export default CartPop;