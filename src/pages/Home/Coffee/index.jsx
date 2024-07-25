import React from 'react';
import { PiShoppingCartFill } from 'react-icons/pi';
import { CoffeeContainer, CoffeeMain, CoffeeFooter } from './styles';

const Coffee = (props) => {
    return (
        <CoffeeContainer>
            <CoffeeMain>
                <img src={props.coffee.image} alt="coffee" />
                {props.coffee.tags.map((coffee, index) => (
                    <span key={index}>{coffee}</span>
                ))}
                <span></span>
                <h3>{props.coffee.title}</h3>
                <p>{props.coffee.description}</p>
            </CoffeeMain>
            <CoffeeFooter>
                <div>
                    <p>R$</p>
                    <span>{props.coffee.price}</span>
                </div>
                <div>
                    <input type="number" min={0} step={1} />
                    <button>
                        <PiShoppingCartFill />
                    </button>
                </div>
            </CoffeeFooter>
        </CoffeeContainer>
    );
};

export default Coffee;
