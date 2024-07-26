import { useContext } from 'react';
import {
    CoffeeCheckoutContainer,
    AddRemoveInput,
    RemoveButton,
    ButtonDiv,
    CheckoutFooter,
    CheckoutButton,
} from './styles';
import { CoffeeContext } from '../../../context/CoffeeContext';
import { PiTrashLight } from 'react-icons/pi';

const getTotalPrice = (coffess) => {
    let price = 0;
    coffess.forEach((coffee) => (price += coffee.quantity * coffee.price));
    return price;
};

const CoffeeCheckout = ({ coffees }) => {
    const { updateQuantity } = useContext(CoffeeContext);
    const totalPrice = getTotalPrice(coffees);
    const totalPriceWithDelivery = totalPrice + 3.5;

    const handleUpdateQuantity = (id, newQuantity) => {
        updateQuantity(id, newQuantity);
    };

    return coffees.map((coffee) => (
        <>
            <CoffeeCheckoutContainer key={coffee.id}>
                <img src={coffee.image} alt="logo" />
                <div>
                    <div>
                        <span>{coffee.title} </span>
                        <p>{`R$ ${coffee.price.toString()}`}</p>
                    </div>
                    <div>
                        <AddRemoveInput
                            type="number"
                            step={1}
                            min={0}
                            value={coffee.quantity}
                            onChange={(event) =>
                                handleUpdateQuantity(
                                    coffee.id,
                                    event.target.value
                                )
                            }
                        />
                        <ButtonDiv>
                            <RemoveButton>
                                <PiTrashLight size={20} />
                                REMOVER
                            </RemoveButton>
                        </ButtonDiv>
                    </div>
                </div>
            </CoffeeCheckoutContainer>

            <CheckoutFooter>
                <span>Total de items</span>
                <span>{`R$ ${totalPrice.toFixed(2)}`}</span>
            </CheckoutFooter>
            <CheckoutFooter>
                <span>Entrega</span>
                <span>R$ 3,50</span>
            </CheckoutFooter>
            <CheckoutFooter>
                <span>
                    <strong>Total</strong>
                </span>
                <span>
                    <strong>{`R$ ${totalPriceWithDelivery.toFixed(2)}`}</strong>
                </span>
            </CheckoutFooter>
            <div>
                <CheckoutButton>Confirmar Pedido</CheckoutButton>
            </div>
        </>
    ));
};

export default CoffeeCheckout;
