import styled from "styled-components";
import DetailsCard from "./DetailsCard";
import IconButton from "./IconButton";
import { TypographyHeader } from "./Typography";

function print() {
    console.log("clicked")
}

const StyledCard = styled.div`
display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height:100%;
`;

const FlexDiv = styled.div`
    flex: 1;
`;

const FlexDiv2 = styled.div`
    flex: 1;
`;


export default function UpperCardArea() {
    return(
        <>
        <StyledCard>
            <FlexDiv>
            <IconButton subtitle="Sunny" handleEvent={() => print()} iconUrl="https://picsum.photos/100/100"></IconButton>

            </FlexDiv>
            <FlexDiv>
            <TypographyHeader>17c</TypographyHeader>
                
            </FlexDiv>
            <FlexDiv>
            <DetailsCard firstContent="12 Kmph" secondContent="0 mm" thirdContent="1000 mb"></DetailsCard>
                
            </FlexDiv>
        </StyledCard>

        </>
    )
}