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

    form {
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
    height: 30rem;

    margin-top: 2rem;

    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
`;

export const CoffePayment = styled.div`
    background: ${(props) => props.theme['base-card']};
    width: 50rem;
    height: 10rem;

    margin-top: 2rem;
    padding: 2rem;

    form {
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

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 1rem;

        button {
            :first-child {
                color: ${(props) => props.theme['purple']};
            }

            background: ${(props) => props.theme['base-button']};
            height: 3rem;
            color: ${(props) => props.theme['base-title']};
            cursor: pointer;

            outline: none;
            border-radius: 8px;
            border: 0;
            padding: 1rem;

            &:hover {
                background: ${(props) => props.theme['base-hover']};
            }
        }
    }
`;
