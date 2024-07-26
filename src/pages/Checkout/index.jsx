import React, { useState } from 'react';
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
} from './styles';
import {
    PiMapPinLine,
    PiCurrencyDollarLight,
    PiCreditCardBold,
    PiMoneyFill,
    PiBank,
} from 'react-icons/pi';
import CoffeeCheckout from './CoffeeCheckout/index';

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState({});

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
                    <div>
                        <button>
                            <PiCreditCardBold size={20} />
                            CARTÃO DE CRÉDITO
                        </button>
                        <button>
                            <PiBank size={20} />
                            CARTÃO DE DÉBITO
                        </button>
                        <button>
                            <PiMoneyFill size={20} />
                            DINHEIRO
                        </button>
                    </div>
                </CoffePayment>
            </div>
            <div>
                <h3>Cafés selecionados</h3>
                <CoffeContainer>
                    <CoffeeCheckout />
                </CoffeContainer>
            </div>
        </CheckoutContainer>
    );
};

export default Checkout;
