import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin-top: 2rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const NavButtons = styled.div`
    gap: 1rem;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple']};
        padding: 0.5rem;
        border-radius: 8px;
        gap: 0.5rem;
    }

    button {
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        padding: 0.5rem;
        border: none;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:disabled:hover {
            cursor: not-allowed;
        }
    }
`;

export const CartBadge = styled.span`
    color: ${(props) => props.theme['yellow-light']};
    background: ${(props) => props.theme['yellow-dark']};

    height: 1.25rem;
    width: 1.25rem;

    margin-bottom: 2.5rem;
    margin-left: -1.8rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`;
