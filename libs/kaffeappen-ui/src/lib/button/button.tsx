import styled from 'styled-components';
import React from "react"

type ButtonProps = {
    label?: React.ReactNode
    variant?: "login" | "registration"
}

const StyledButton = styled.button<ButtonProps>`
    background-color: ${props => props.variant === "login" ? "blue" : "yellow" };
    text-align: center;
    padding: 10px 55px;
`;

const Button = ({ label, variant }: ButtonProps) => {
    return <StyledButton variant={variant}>{label}</StyledButton>
}

export default Button;