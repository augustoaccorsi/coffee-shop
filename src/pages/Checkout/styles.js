import styled from 'styled-components';

export const CheckoutContainer = styled.main`
    display: grid;
    grid-template-columns: 50rem 1fr;
    gap: 2rem;

    margin-top: 3rem;

    h3 {
        color: ${(props) => props.theme['base-title']};
    }
`;

export const AddressContainer = styled.div`
    background: ${(props) => props.theme['base-card']};
    width: 50rem;
    height: 23rem;

    margin-top: 2rem;
    padding: 2rem;
    border-radius: 8px;

    header {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 1rem;
        color: ${(props) => props.theme['yellow']};

        margin-bottom: 2rem;

        span {
            color: ${(props) => props.theme['base-title']};
        }

        p {
            color: ${(props) => props.theme['base-subtitle']};
        }
    }
`;

const BaseInput = styled.input`
    background: ${(props) => props.theme['base-input']};
    border: 0;
    height: 2.6rem;
    padding: 0.5rem;
    border-radius: 4px;
    outline: none;
    width: 15rem;

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    &:focus {
        box-shadow: none;
        border: 2px solid ${(props) => props.theme['yellow']};
    }
`;

export const CheckoutInput = styled(BaseInput)``;

export const FullInput = styled(BaseInput)`
    width: 100%;
`;

export const CheckoutInputComp = styled(BaseInput)`
    width: 30rem;
    margin-left: 1rem;
`;

export const CheckoutInputCity = styled(BaseInput)`
    width: 25rem;
    margin-left: 1rem;
`;
export const CheckoutInputUF = styled(BaseInput)`
    width: 4rem;
    margin-left: 1rem;
`;

export const CoffeContainer = styled.div`
    background: ${(props) => props.theme['base-card']};
    width: 1fr;
    height: auto;

    margin-top: 2rem;

    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
`;

export const CoffePayment = styled.div`
    background: ${(props) => props.theme['base-card']};
    width: 50rem;
    height: 12rem;

    border-radius: 8px;

    margin-top: 2rem;
    padding: 2rem;

    header {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 1rem;
        color: ${(props) => props.theme['purple']};

        margin-bottom: 2rem;

        span {
            color: ${(props) => props.theme['base-title']};
        }

        p {
            color: ${(props) => props.theme['base-subtitle']};
        }
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Button = styled.button`
    :first-child {
        margin-right: 0.5rem;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    height: 3rem;
    cursor: pointer;

    outline: none;
    border-radius: 8px;
    border: 0;
    padding: 1rem;
`;

export const ButtonNotChecked = styled(Button)`
    :first-child {
        color: ${(props) => props.theme['purple']};
    }

    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};

    &:hover {
        background: ${(props) => props.theme['base-hover']};
    }
`;

export const ButtonChecked = styled(Button)`
    :first-child {
        color: ${(props) => props.theme['purple-light']};
    }

    background: ${(props) => props.theme['purple']};
    color: ${(props) => props.theme['purple-light']};

    &:hover {
        :first-child {
            color: ${(props) => props.theme['purple-light']};
        }
        background: ${(props) => props.theme['purple-dark']};
    }
`;

export const OrderCompletedDiv = styled.div`
    display: grid;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2rem;

    margin-top: 3rem;

    h1 {
        color: ${(props) => props.theme['yellow-dark']};
    }

    span {
        color: ${(props) => props.theme['base-title']};
    }

    img {
        margin-top: 6rem;
    }
`;

export const OrderCompleteContainer = styled.div`
    margin-top: 3rem;
    padding: 1rem;

    border: 2px solid ${(props) => props.theme['purple']};

    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;

export const OrderCompleteContainerDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;

    margin: 1rem;
`;

const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border-radius: 50%;
    margin: 0.5rem;

    :first-child {
        height: 2rem;
        width: 2rem;
        padding: 5px;
        color: ${(props) => props.theme['white']};
    }
`;

export const SpanPurple = styled(Span)`
    background: ${(props) => props.theme['purple']};
`;

export const SpanYellow = styled(Span)`
    background: ${(props) => props.theme['yellow']};
`;

export const SpanYellowDark = styled(Span)`
    background: ${(props) => props.theme['yellow-dark']};
`;
