import Skeleton from "react-loading-skeleton"
import { TypographyParagraph } from "./Typography"
import styled from "styled-components";

interface IconButtonProps {
    iconUrl: string, 
    title?: string,
    subtitle?: string,
    handleEvent: any,
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

export default function IconButton({iconUrl, title, subtitle, handleEvent} : IconButtonProps) {
    return (
        <FlexDiv >
            <StyledButton onClick={() => handleEvent}>
                <TypographyParagraph textAlign="center" >
                    {title}
                </TypographyParagraph>
                {iconUrl ? <img src={iconUrl} alt="weather-condition-icon"/> : <Skeleton />}
                    <TypographyParagraph textAlign="center">
                        {subtitle}
                    </TypographyParagraph>

            </StyledButton>
        </FlexDiv>
    )
}