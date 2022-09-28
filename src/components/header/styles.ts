

import styled from "styled-components"

export const Container = styled.header`
    background-color: var(--blue);
    `

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 1rem 1rem 10rem;

    a{
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
        text-decoration: none;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.6);
        }
    }
    button{
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(.9);
        }
    }
`