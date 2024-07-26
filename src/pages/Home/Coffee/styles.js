import styled from 'styled-components';

export const CoffeeContainer = styled.div`
    background: ${(props) => props.theme['base-card']};
    width: 16rem;
    height: 19rem;
    border-top-right-radius: 30px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 30px;

    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin: 0.5rem;
`;

export const CoffeeMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        span {
            background: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            margin: 0.5rem;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: bold;

            display: flex;
            align-items: center;
        }
    }

    img {
        margin-top: -1rem;
    }

    p {
        font-size: 0.875rem;
        text-align: center;
    }
`;

export const CoffeeFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    gap: 2rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        p {
            font-size: 0.8rem;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    div {
        gap: 0.5rem;
        input {
            height: 2rem;
            width: 4rem;
            background: ${(props) => props.theme['base-button']};
            border: 0;
            border-radius: 8px;
            padding-left: 1rem;
        }

        button {
            height: 2rem;
            width: 2rem;
            border-radius: 8px;

            padding: 0.5rem;
            border: none;

            background: ${(props) => props.theme['purple-dark']};
            color: ${(props) => props.theme['white']};

            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &:disabled {
                cursor: not-allowed;
            }

            &:hover {
                background: ${(props) => props.theme['purple']};
            }
        }
    }
`;
