import styled from "styled-components";
import { TypographyParagraph } from "./Typography";

interface DetailsCardProps {
    firstContent?: number,
    secondContent?: number,
    thirdContent?: number,
}

const FlexDiv = styled.div`
    display: inline-flex;
    flex-flow: column;
    justify-content: center;
    
`;


export default function DetailsCard({firstContent, secondContent, thirdContent} : DetailsCardProps) {
    return(
        <>
        <FlexDiv>
            <TypographyParagraph>Wind: {firstContent} Kmph</TypographyParagraph>
            <TypographyParagraph>Precip: {secondContent}mm</TypographyParagraph>
            <TypographyParagraph>Pressure: {thirdContent} mb</TypographyParagraph>
            
        </FlexDiv>
        </>
    )
}