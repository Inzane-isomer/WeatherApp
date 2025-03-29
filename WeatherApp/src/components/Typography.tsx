import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { PRIMARY_TEXT_COLOR } from "../enums/colors";

interface TypographyProps {
    textSize?: number,
    textColor?: string,
    children: ReactNode,
}

const StyledH2 = styled.h2<{$textColor?: string; $textSize?: number;}>`
    color: ${props => props.$textColor ? props.$textColor : {PRIMARY_TEXT_COLOR}};
    font-size: ${props => props.$textSize ? props.$textSize : 15}px;
    text-align: center;
`;

const StyledP = styled.p<{$textColor?: string; $textSize?: number; bold?: boolean}>`
    color: ${props => props.$textColor ? props.$textColor : {PRIMARY_TEXT_COLOR}};
    font-size: ${props => props.$textSize ? props.$textSize : 15}px;
    bold: true;
    text-align: left;
`;

export function TypographyHeader({textSize, textColor, children} :TypographyProps) {
    return (
        <StyledH2 $textSize={textSize} $textColor={textColor}>
            {children || <Skeleton />}
        </StyledH2>
    )
}

export function TypographyParagraph({textSize, textColor, children} :TypographyProps) {
    return (
        <StyledP $textSize={textSize} $textColor={textColor}>
            {children || <Skeleton/>}
        </StyledP>
    )
}
