import { TypographyParagraph } from "./Typography"
import styled from "styled-components";
// @ts-ignore
import ReactAnimatedWeather from "react-animated-weather";
import { CurrentWeather } from "../models/weather";
import { WHITE } from "../enums/colors";

interface IconButtonProps {
    loading?: boolean,
    iconUrl?: string, 
    iconColor?: string,
    title?: string,
    subtitle?: string,
    handleEvent: any,
    weather?: CurrentWeather,
    disabled?: boolean,
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

export default function IconButton({iconUrl, iconColor, title, subtitle, handleEvent, loading, weather, disabled} : IconButtonProps) {
    const iconDefaults = {
        icon: iconUrl, 
        color: iconColor,
        size: 64,
        animate: true,
    }
    
    return (
        <FlexDiv >
            <StyledButton disabled={disabled} onClick={() => handleEvent(weather)}>
                <TypographyParagraph textAlign="center" textColor={WHITE} >
                    {title}
                </TypographyParagraph>
                <ReactAnimatedWeather icon={iconDefaults.icon} color={iconDefaults.color} size={iconDefaults.size} animate={iconDefaults.animate}/>
                <TypographyParagraph textAlign="center" textColor={WHITE}>
                    {subtitle}
                </TypographyParagraph>
            </StyledButton>  
        </FlexDiv>
    )
}