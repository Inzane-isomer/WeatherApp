import styled from "styled-components";
import { TypographyParagraph } from "./Typography";

interface DetailsCardProps {
    firstContent: string,
    secondContent: string,
    thirdContent: string,
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
            <TypographyParagraph>Wind: {firstContent}</TypographyParagraph>
            <TypographyParagraph>Precip: {secondContent}</TypographyParagraph>
            <TypographyParagraph>Pressure: {thirdContent}</TypographyParagraph>
            
        </FlexDiv>
        </>
    )
}