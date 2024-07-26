import React, { useState, createContext } from 'react';

export const CoffeeContext = createContext({});

const CoffeeContextProvider = (props) => {
    const [coffees, setCoffees] = useState([]);
    const [orderCreated, setOrderCreated] = useState(false);

    const addCoffeeToCart = (coffee) => {
        const newCoffee = {
            name: coffee.name,
            quantity: coffee.quantity,
            price: coffee.price,
            image: coffee.image,
        };

        setCoffees([...coffees, newCoffee]);
    };

    const createOrder = () => {
        setOrderCreated(true);
    };

    return (
        <CoffeeContext.Provider
            value={{ addCoffeeToCart, coffees, createOrder, orderCreated }}
        >
            {props.children}
        </CoffeeContext.Provider>
    );
};

export default CoffeeContextProvider;
