import styled from "styled-components";

export const CustomButton = styled.button`
    padding: ${(props) => props.padding || "12px"};
    margin-top: ${(props) => props.margin_y || "0"};
    margin-bottom: ${(props) => props.margin_y || "0"};
    border-radius: ${(props) => props.radius || "5px"};
    background-color: ${(props) => props.bg_color || "red"};
    width: ${(props) => props.width || ""};
    border: none;
    color: #fff;
    font-size: 12px;
    cursor: pointer;

    &:hover{
        transition: ease-in .2s;
        filter:brightness(0.9)
    }
`