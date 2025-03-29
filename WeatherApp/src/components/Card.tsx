import styled from "styled-components";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { PRIMARY_BG_COLOR, PRIMARY_TEXT_COLOR } from "../enums/colors";

interface CardProps { 
    height?: number,
    width?: number,
    bgColor?: string,
    borderColor?: string,
    flex?: string,
    children?: ReactNode
}

const StyledCard = styled.div<{$height?: number; $width?: number; $bgcolor?: string; $borderColor?: string, $flex?: string}>`
    height: ${props => props.$height ? props.$height : 500}px;
    width: ${props => props.$width ? props.$width : 1000}px;
    border-style: ${props => props.$borderColor ? 'solid' : "" };
    border-width: 5px;
    border-color: ${props => props.$borderColor ? props.$borderColor : "" };
    background-color:${props => props.$bgcolor ? props.$bgcolor : {PRIMARY_TEXT_COLOR} };
`;

export default function Card({height, width, bgColor, borderColor, children} : CardProps) {
    return (
        <StyledCard $height={height} $width={width} $bgcolor={bgColor} $borderColor={borderColor}>
            {children || <Skeleton />}
        </StyledCard>
    )
}