import styled from 'styled-components';

export const HomeHeader = styled.header`
    margin-top: 3rem;

    div:first-of-type {
        display: flex;
        align-items: left;
        justify-content: space-between;

        div {
            display: flex;
            align-items: top;
            flex-direction: column;
            justify-content: left;
        }
    }

    h1 {
        font-weight: bold;
        color: ${(props) => props.theme['base-title']};
        font-size: 3rem;
    }

    p {
        color: ${(props) => props.theme['base-title']};
        font-size: 1.5rem;
    }
`;

export const HomeHeaderSplitter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    flex-direction: row !important;
`;

const baseSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    margin: 0.5rem;

    :first-child {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        padding: 5px;
        color: ${(props) => props.theme['white']};
    }
`;

export const SpanIconCart = styled(baseSpan)`
    :first-child {
        background: ${(props) => props.theme['yellow-dark']};
    }
`;

export const SpanIconClock = styled(baseSpan)`
    :first-child {
        background: ${(props) => props.theme['yellow']};
    }
`;
export const SpanIconPack = styled(baseSpan)`
    :first-child {
        background: ${(props) => props.theme['base-subtitle']};
    }
`;
export const SpanIconCoffee = styled(baseSpan)`
    :first-child {
        background: ${(props) => props.theme['purple']};
    }
`;

export const HomeMain = styled.main`
    h2 {
        color: ${(props) => props.theme['base-title']};
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    margin-bottom: 2rem;
`;

export const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
`;
