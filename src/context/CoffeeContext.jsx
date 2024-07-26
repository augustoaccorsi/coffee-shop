import React, { useState, createContext } from 'react';

export const CoffeeContext = createContext({});

const CoffeeContextProvider = (props) => {
    const [coffees, setCoffees] = useState([]);
    const [orderCreated, setOrderCreated] = useState(false);

    const addCoffeeToCart = (coffee) => {
        setCoffees([...coffees, coffee]);
    };

    const createOrder = () => {
        setOrderCreated(true);
    };

    const updateQuantity = (id, quantity) => {
        setCoffees((coffees) =>
            coffees.map((coffee) =>
                coffee.id === id ? { ...coffee, quantity: quantity } : coffee
            )
        );
    };

    return (
        <CoffeeContext.Provider
            value={{
                addCoffeeToCart,
                coffees,
                createOrder,
                orderCreated,
                updateQuantity,
            }}
        >
            {props.children}
        </CoffeeContext.Provider>
    );
};

export default CoffeeContextProvider;
