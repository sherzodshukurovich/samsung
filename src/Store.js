import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const Store = (props) => {
    const [products,setProducts] = useState([
        {
            id: 0,
            name: "Product 1",
            price: 12,
            inf: "dafadf fkjdsa fdash fkjas",
            quantity: 0,
            img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            id: 1,
            name: "Product 2",
            price: 6,
            inf: "dafadf fkjdsa fdash fkjas",
            quantity: 0,
            img: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            id: 2,
            name: "Product 3",
            price: 10,
            inf: "dafadf fkjdsa fdash fkjas",
            quantity: 0,
            img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            id: 3,
            name: "Product 4",
            price: 10,
            inf: "dafadf fkjdsa fdash fkjas",
            quantity: 0,
            img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            id: 4,
            name: "Product 4",
            price: 40,
            inf: "dafadf fkjdsa fdash fkjas",
            quantity: 0,
            img: "https://im0-tub-ru.yandex.net/i?id=0354ca153c1897d8a55b247c0d4d21f7&n=13",
        },
        {
            id: 5,
            name: "Product 4",
            price: 50,
            inf: "dafadf fkjdsa fdash fkjas",
            quantity: 0,
            img: "https://im0-tub-ru.yandex.net/i?id=8a2ddf700414491b4938eac4e3257939&n=13",
        },
        {
            id: 6,
            name: "Product 4",
            price: 100,
            inf: "dafadf fkjdsa fdash fkjas",
            quantity: 0,
            img: "https://im0-tub-ru.yandex.net/i?id=e3a6a236ce3f81eaa7a92e08aaa9ef3e&n=13",
        },
       {
            id: 7,
            name: "Product 4",
            price: 1000,
            inf: "dafadf fkjdsa fdash fkjas",
            quantity: 0,
            img: "https://im0-tub-ru.yandex.net/i?id=0ea906abf6dab5c8e8f8cddb501458fb&n=13",
        },
    ]);
    const [cart, setCart] = useState([]);
    const state = {
        products: [products,setProducts],
        cart: [cart, setCart],
    };
    return (
        <StoreContext.Provider value={state}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default Store;