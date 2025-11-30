import React from "react";
import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({ quantity, onIncrease, onDecrease }) => {

    return (
        <Component>
            <StyledButton onClick={onDecrease} disabled={quantity <= 1}>-</StyledButton>
            <Button disabled>{quantity}</Button>
            <StyledButton onClick={onIncrease}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;
