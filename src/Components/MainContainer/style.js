import styled from "styled-components";

export const Container = styled.section`
    max-width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: var(--global_radius);
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;

    @media (max-width: 1300px) {
        max-width: 80%;
    }
`

// Media querie, cammbiar el maxwidth.