import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { PRIMARY_TEXT_COLOR } from "../enums/colors";

interface TypographyProps {
    textSize?: number,
    textColor?: string,
    children: ReactNode,
    textAlign?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
}

const StyledH1 = styled.h1<{$textColor?: string; $textSize?: number;}>`
    color: ${props => props.$textColor ? props.$textColor : {PRIMARY_TEXT_COLOR}};
    text-align: center;
`;

const StyledP = styled.p<{$textColor?: string; $textSize?: number; $bold?: boolean, $textAlign?: string,  marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,}>`
    color: ${props => props.$textColor ? props.$textColor : {PRIMARY_TEXT_COLOR}};
    font-size: ${props => props.$textSize ? props.$textSize : 15}px;
    bold: true;
    text-align: ${props => props.$textAlign};  
`;

export function TypographyHeader({textSize, textColor, children} :TypographyProps) {
    return (
        <StyledH1 $textSize={textSize} $textColor={textColor}>
            {children || <Skeleton />}
        </StyledH1>
    )
}

export function TypographyParagraph({textSize, textColor, children} :TypographyProps) {
    return (
        <StyledP $textSize={textSize} $textColor={textColor}>
            {children || <Skeleton/>}
        </StyledP>
    )
}
