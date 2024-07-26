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
    OrderCompletedDiv,
    OrderCompleteContainer,
    OrderCompleteContainerDiv,
    SpanYellowDark,
    SpanYellow,
    SpanPurple,
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
import { RiMapPin2Fill } from 'react-icons/ri';
import { BsAlarmFill } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';

const PAYMENT = {
    NONE: 0,
    CREDIT: 1,
    DEBIT: 2,
    CASH: 3,
};

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState(PAYMENT.NONE);
    const { coffees, handleSetAddress, orderCreated } =
        useContext(CoffeeContext);

    const [CEP, setCEP] = useState('');
    const [street, setStreet] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighbor, setNeighbor] = useState('');
    const [city, setCity] = useState('');
    const [UF, setUF] = useState('');

    const isAddressFulfilled =
        CEP !== '' &&
        street !== '' &&
        streetNumber !== '' &&
        neighbor !== '' &&
        city !== ''
            ? true
            : false;

    const handleSelectedPayment = (payment) => {
        setSelectedPayment(payment);
        if (isAddressFulfilled) {
            handleSetAddress(
                CEP,
                street,
                streetNumber,
                complement,
                neighbor,
                city
            );
        }
    };

    const onSubmitAddress = (event) => {
        event.preventDefault();
    };

    if (isAddressFulfilled) {
        //  handleSetAddress(CEP, street, streetNumber, complement, neighbor, city);
    }

    return (
        <>
            {!orderCreated ? (
                <CheckoutContainer>
                    <div>
                        <h3>Complete seu pedido</h3>
                        <AddressContainer>
                            <header>
                                <PiMapPinLine size={25} />
                                <div>
                                    <span>Endereço de Entrega</span>
                                    <p>
                                        Informe o endereço onde deseja receber
                                        seu pedido
                                    </p>
                                </div>
                            </header>

                            <form submit={onSubmitAddress}>
                                <div>
                                    <CheckoutInput
                                        required
                                        type="number"
                                        placeholder="CEP"
                                        value={CEP}
                                        onChange={(event) =>
                                            setCEP(event.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <FullInput
                                        required
                                        placeholder="Rua"
                                        value={street}
                                        onChange={(event) =>
                                            setStreet(event.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <CheckoutInput
                                        required
                                        type="number"
                                        placeholder="Número"
                                        value={streetNumber}
                                        onChange={(event) =>
                                            setStreetNumber(event.target.value)
                                        }
                                    />
                                    <CheckoutInputComp
                                        placeholder="Complemento"
                                        value={complement}
                                        onChange={(event) =>
                                            setComplement(event.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <CheckoutInput
                                        required
                                        placeholder="Bairro"
                                        value={neighbor}
                                        onChange={(event) =>
                                            setNeighbor(event.target.value)
                                        }
                                    />
                                    <CheckoutInputCity
                                        required
                                        placeholder="Cidade"
                                        value={city}
                                        onChange={(event) =>
                                            setCity(event.target.value)
                                        }
                                    />
                                    <CheckoutInputUF
                                        required
                                        placeholder="UF"
                                        maxLength={2}
                                        minLength={2}
                                        value={UF}
                                        onChange={(event) =>
                                            setUF(event.target.value)
                                        }
                                    />
                                </div>
                            </form>
                        </AddressContainer>
                        <CoffePayment>
                            <header>
                                <PiCurrencyDollarLight size={25} />
                                <div>
                                    <span>Pagamento</span>
                                    <p>
                                        O pagamento é feito na entrega. Escolha
                                        a forma que deseja pagar
                                    </p>
                                </div>
                            </header>
                            <ButtonDiv>
                                {selectedPayment === PAYMENT.CREDIT ? (
                                    <ButtonChecked
                                        onClick={() =>
                                            handleSelectedPayment(PAYMENT.NONE)
                                        }
                                    >
                                        <PiCreditCardBold size={20} />
                                        CARTÃO DE CRÉDITO
                                    </ButtonChecked>
                                ) : (
                                    <ButtonNotChecked
                                        onClick={() =>
                                            handleSelectedPayment(
                                                PAYMENT.CREDIT
                                            )
                                        }
                                    >
                                        <PiCreditCardBold size={20} />
                                        CARTÃO DE CRÉDITO
                                    </ButtonNotChecked>
                                )}

                                {selectedPayment === PAYMENT.DEBIT ? (
                                    <ButtonChecked
                                        onClick={() =>
                                            handleSelectedPayment(PAYMENT.NONE)
                                        }
                                    >
                                        <PiBank size={20} />
                                        CARTÃO DE DÉBITO
                                    </ButtonChecked>
                                ) : (
                                    <ButtonNotChecked
                                        onClick={() =>
                                            handleSelectedPayment(PAYMENT.DEBIT)
                                        }
                                    >
                                        <PiBank size={20} />
                                        CARTÃO DE DÉBITO
                                    </ButtonNotChecked>
                                )}

                                {selectedPayment === PAYMENT.CASH ? (
                                    <ButtonChecked
                                        onClick={() =>
                                            handleSelectedPayment(PAYMENT.NONE)
                                        }
                                    >
                                        <PiMoneyFill size={20} />
                                        DINHEIRO
                                    </ButtonChecked>
                                ) : (
                                    <ButtonNotChecked
                                        onClick={() =>
                                            handleSelectedPayment(PAYMENT.CASH)
                                        }
                                    >
                                        <PiMoneyFill size={20} />
                                        DINHEIRO
                                    </ButtonNotChecked>
                                )}
                            </ButtonDiv>
                        </CoffePayment>
                    </div>
                    <div>
                        <h3>Cafés selecionados</h3>
                        <CoffeContainer>
                            <CoffeeCheckout
                                coffees={coffees}
                                confirmAllowed={
                                    selectedPayment !== PAYMENT.NONE //&&
                                    // isAddressFulfilled
                                }
                            />
                        </CoffeContainer>
                    </div>
                </CheckoutContainer>
            ) : (
                <OrderCompletedDiv>
                    <div>
                        <h1>Uhu! Pedido Confirmado</h1>
                        <span>
                            Agora é só aguardar que logo o café chegará até você
                        </span>
                        <OrderCompleteContainer>
                            <OrderCompleteContainerDiv>
                                <SpanPurple>
                                    <RiMapPin2Fill size={25} />
                                </SpanPurple>

                                <div>
                                    <div>
                                        <p>
                                            Entrega em{' '}
                                            <strong>
                                                Rua João Daniel Martinelli, 102
                                            </strong>
                                        </p>
                                        <p> Farrapos - Porto Alegre, RS</p>
                                    </div>
                                </div>
                            </OrderCompleteContainerDiv>
                            <OrderCompleteContainerDiv>
                                <SpanYellow>
                                    <BsAlarmFill size={25} />
                                </SpanYellow>
                                <div>
                                    <p>Previsão de entrega</p>
                                    <p>
                                        <strong>20 min - 30 min</strong>
                                    </p>
                                </div>
                            </OrderCompleteContainerDiv>
                            <OrderCompleteContainerDiv>
                                <SpanYellowDark>
                                    <MdOutlineAttachMoney size={25} />
                                </SpanYellowDark>
                                <div>
                                    <p>Pagamento na entrega</p>
                                    <p>
                                        <strong>Cartão de Crédito</strong>
                                    </p>
                                </div>
                            </OrderCompleteContainerDiv>
                        </OrderCompleteContainer>
                    </div>
                    <div>
                        <img src="images/delivery.svg" alt="delivery" />
                    </div>
                </OrderCompletedDiv>
            )}
        </>
    );
};

export default Checkout;
