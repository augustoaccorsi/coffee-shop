import styled from 'styled-components';

export const CoffeeCheckoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;

    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;

    img {
        height: 5rem;
    }

    div {
        :first-child {
            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 1rem;

            p {
                font-weight: bold;
                flex: 1;
            }
        }

        :last-child {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
    }
`;

export const AddRemoveInput = styled.input`
    width: 4.5rem;
    height: 2rem;

    padding-left: 1rem;

    background: ${(props) => props.theme['base-button']};
    outline: none;
    border: 0;
    border-radius: 4px;

    &:focus {
        box-shadow: none;
        border: 2px solid ${(props) => props.theme['purple']};
    }
`;

export const ButtonDiv = styled.div``;

export const RemoveButton = styled.button`
    width: 7rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['base-button']};

    cursor: pointer;

    outline: none;
    border-radius: 4px;
    border: 0;

    padding-right: 0.5rem;

    :first-child {
        color: ${(props) => props.theme['purple']};
    }

    &:hover {
        box-shadow: none;
        border: 2px solid ${(props) => props.theme['purple']};
        background: ${(props) => props.theme['base-hover']};
        color: ${(props) => props.theme['base-title']};
    }
`;

export const CheckoutFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.5rem 1.5rem;

    strong {
        font-size: 1.5rem;
    }
`;

export const CheckoutButton = styled.button`
    width: 30rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1rem;

    background: ${(props) => props.theme['yellow']};

    cursor: pointer;

    outline: none;
    border-radius: 8px;
    border: 0;

    padding-right: 0.5rem;

    &:hover {
        box-shadow: none;
        background: ${(props) => props.theme['yellow-dark']};
    }
`;
