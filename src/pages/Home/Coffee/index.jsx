import React, { useContext, useState } from 'react';
import { PiShoppingCartFill } from 'react-icons/pi';
import { CoffeeContainer, CoffeeMain, CoffeeFooter } from './styles';
import { CoffeeContext } from '../../../context/CoffeeContext';

const Coffee = ({ coffee }) => {
    const { addCoffeeToCart } = useContext(CoffeeContext);

    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = (name, price) => {
        const newCoffee = {
            name: name,
            price: price,
            quantity: quantity,
        };
        addCoffeeToCart(newCoffee);
        setQuantity(0);
    };

    return (
        <CoffeeContainer>
            <CoffeeMain>
                <img src={coffee.image} alt="coffee" />
                <div>
                    {coffee.tags.map((coffee, index) => (
                        <span key={index}>{coffee}</span>
                    ))}
                </div>
                <h3>{coffee.title}</h3>
                <p>{coffee.description}</p>
            </CoffeeMain>
            <CoffeeFooter>
                <div>
                    <p>R$</p>
                    <span>{coffee.price}</span>
                </div>
                <div>
                    <input
                        type="number"
                        min={0}
                        step={1}
                        placeholder="0"
                        value={quantity}
                        onChange={(event) =>
                            setQuantity(parseInt(event.target.value))
                        }
                    />
                    <button
                        disabled={quantity === 0}
                        onClick={() =>
                            handleAddToCart(coffee.name, coffee.price)
                        }
                    >
                        <PiShoppingCartFill />
                    </button>
                </div>
            </CoffeeFooter>
        </CoffeeContainer>
    );
};

export default Coffee;
