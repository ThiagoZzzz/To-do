import styled from "styled-components";

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
`

export const Bar = styled.form`
    display: flex;
    justify-content: space-between;
    width:80%;
    gap: 8px;

    @media (max-width: 900px) {
        flex-direction: column;
        margin-bottom: 1rem;
    }
`

export const Input = styled.input`
    outline: none;
    border: 1px solid gray;
    min-width: 80%;
    padding: var(--global_padding);
    border-radius: 4px;
`

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 5px;
    border-radius: 20px;
    color:rgb(219, 19, 19);
    font-weight: 600;
`