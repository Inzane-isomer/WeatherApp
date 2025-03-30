import styled from "styled-components";
import DetailsCard from "./DetailsCard";
import IconButton from "./IconButton";
import { TypographyHeader } from "./Typography";

function print() {
    console.log("clicked")
}

const StyledCard = styled.div`
display: flex;
  justify-content: space-evenly;
`;


export default function LowerCardArea() {
    return(
        <>
        <StyledCard>
            <IconButton title="SAT" subtitle="25c" handleEvent={() => print()} iconUrl="https://picsum.photos/50/50"></IconButton>
            <IconButton handleEvent={() => print()} iconUrl="https://picsum.photos/50/50"></IconButton>
            <IconButton handleEvent={() => print()} iconUrl="https://picsum.photos/50/50"></IconButton>
            <IconButton handleEvent={() => print()} iconUrl="https://picsum.photos/50/50"></IconButton>
            <IconButton handleEvent={() => print()} iconUrl="https://picsum.photos/50/50"></IconButton>
            <IconButton handleEvent={() => print()} iconUrl="https://picsum.photos/50/50"></IconButton>
        </StyledCard>

        </>
    )
}