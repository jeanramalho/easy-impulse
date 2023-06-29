import styled  from "styled-components";

export const Container = styled.ul`
    width: 100%;
    height: auto;
    padding: 5px;
    border-bottom: 2px #cecece solid;
    color: #cecece;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 2rem;
    }

    h2 {
        text-transform: uppercase;
        font-size: 1.2rem;
    }
`