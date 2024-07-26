import React, { useContext, useState } from 'react';
import {
    CheckoutContainer,
    AddressContainer,
    CoffeContainer,
    CheckoutInput,
    FullInput,
    CheckoutInputComp,
    CheckoutInputCity,
    CheckoutInputUF,
    CoffePayment,
    ButtonNotChecked,
    ButtonDiv,
    ButtonChecked,
} from './styles';
import {
    PiMapPinLine,
    PiCurrencyDollarLight,
    PiCreditCardBold,
    PiMoneyFill,
    PiBank,
} from 'react-icons/pi';
import CoffeeCheckout from './CoffeeCheckout/index';
import { CoffeeContext } from '../../context/CoffeeContext';

const PAYMENT = {
    NONE: 0,
    CREDIT: 1,
    DEBIT: 2,
    CASH: 3,
};

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState(PAYMENT.NONE);
    const { coffees } = useContext(CoffeeContext);

    return (
        <CheckoutContainer>
            <div>
                <h3>Complete seu pedido</h3>
                <AddressContainer>
                    <form>
                        <PiMapPinLine size={25} />
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>
                                Informe o endereço onde deseja receber seu
                                pedido
                            </p>
                        </div>
                    </form>

                    <div>
                        <CheckoutInput type="number" placeholder="CEP" />
                    </div>
                    <div>
                        <FullInput placeholder="Rua" />
                    </div>
                    <div>
                        <CheckoutInput type="number" placeholder="Número" />
                        <CheckoutInputComp placeholder="Complemento" />
                    </div>
                    <div>
                        <CheckoutInput placeholder="Bairro" />
                        <CheckoutInputCity placeholder="Cidade" />
                        <CheckoutInputUF placeholder="UF" />
                    </div>
                </AddressContainer>
                <CoffePayment>
                    <form>
                        <PiCurrencyDollarLight size={25} />
                        <div>
                            <span>Pagamento</span>
                            <p>
                                O pagamento é feito na entrega. Escolha a forma
                                que deseja pagar
                            </p>
                        </div>
                    </form>
                    <ButtonDiv>
                        {selectedPayment === PAYMENT.CREDIT ? (
                            <ButtonChecked
                                onClick={() => setSelectedPayment(PAYMENT.NONE)}
                            >
                                <PiCreditCardBold size={20} />
                                CARTÃO DE CRÉDITO
                            </ButtonChecked>
                        ) : (
                            <ButtonNotChecked
                                onClick={() =>
                                    setSelectedPayment(PAYMENT.CREDIT)
                                }
                            >
                                <PiCreditCardBold size={20} />
                                CARTÃO DE CRÉDITO
                            </ButtonNotChecked>
                        )}

                        {selectedPayment === PAYMENT.DEBIT ? (
                            <ButtonChecked
                                onClick={() => setSelectedPayment(PAYMENT.NONE)}
                            >
                                <PiBank size={20} />
                                DINHEIRO
                            </ButtonChecked>
                        ) : (
                            <ButtonNotChecked
                                onClick={() =>
                                    setSelectedPayment(PAYMENT.DEBIT)
                                }
                            >
                                <PiBank size={20} />
                                DINHEIRO
                            </ButtonNotChecked>
                        )}

                        {selectedPayment === PAYMENT.CASH ? (
                            <ButtonChecked
                                onClick={() => setSelectedPayment(PAYMENT.NONE)}
                            >
                                <PiCreditCardBold size={20} />
                                CARTÃO DE CRÉDITO
                            </ButtonChecked>
                        ) : (
                            <ButtonNotChecked
                                onClick={() => setSelectedPayment(PAYMENT.CASH)}
                            >
                                <PiCreditCardBold size={20} />
                                CARTÃO DE CRÉDITO
                            </ButtonNotChecked>
                        )}
                    </ButtonDiv>
                </CoffePayment>
            </div>
            <div>
                <h3>Cafés selecionados</h3>
                <CoffeContainer>
                    <CoffeeCheckout coffees={coffees} />
                </CoffeContainer>
            </div>
        </CheckoutContainer>
    );
};

export default Checkout;
