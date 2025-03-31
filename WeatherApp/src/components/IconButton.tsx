import Skeleton from "react-loading-skeleton"
import { TypographyParagraph } from "./Typography"
import styled from "styled-components";
// @ts-ignore
import ReactAnimatedWeather from "react-animated-weather";
import { CurrentWeather } from "../models/weather";

interface IconButtonProps {
    loading?: boolean,
    iconUrl?: string, 
    iconColor?: string,
    title?: string,
    subtitle?: string,
    handleEvent: any,
    weather?: CurrentWeather,
}

const FlexDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledButton = styled.button`
    background-color: transparent;
`;

export default function IconButton({iconUrl, iconColor, title, subtitle, handleEvent, loading, weather} : IconButtonProps) {
    const iconDefaults = {
        icon: iconUrl, 
        color: iconColor,
        size: 64,
        animate: true,
    }
    
    return (
        <FlexDiv >
            <StyledButton onClick={() => handleEvent}>
            <StyledButton onClick={() => handleEvent(weather)}>
                <TypographyParagraph textAlign="center" >
                    {title}
                </TypographyParagraph>
                <ReactAnimatedWeather icon={iconDefaults.icon} color={iconDefaults.color} size={iconDefaults.size} animate={iconDefaults.animate}/>
                <TypographyParagraph textAlign="center">
                    {subtitle}
                </TypographyParagraph>
            </StyledButton> } 
        </FlexDiv>
    )
}