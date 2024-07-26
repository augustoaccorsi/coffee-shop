import React, { useState, createContext } from 'react';

export const CoffeeContext = createContext({});

const CoffeeContextProvider = (props) => {
    const [coffees, setCoffees] = useState([]);
    const [orderCreated, setOrderCreated] = useState(false);
    const [address, setAddress] = useState({});

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

    const removeFromOrder = (id) => {
        setCoffees(coffees.filter((coffee) => coffee.id !== id));
    };

    const handleSetAddress = (
        CEP,
        street,
        streetNumber,
        complement,
        neighbor,
        city
    ) => {
        setAddress({
            CEP: CEP,
            street: street,
            streetNumber: streetNumber,
            complement: complement,
            neighbor: neighbor,
            city: city,
        });
    };

    return (
        <CoffeeContext.Provider
            value={{
                addCoffeeToCart,
                coffees,
                createOrder,
                orderCreated,
                setOrderCreated,
                updateQuantity,
                removeFromOrder,
                address,
                handleSetAddress,
            }}
        >
            {props.children}
        </CoffeeContext.Provider>
    );
};

export default CoffeeContextProvider;
