import DetailsCard from "./DetailsCard";
import IconButton from "./IconButton";
import { TypographyHeader } from "./Typography";

function print() {
    console.log("clicked")
}

export default function UpperCardArea() {
    return(
        <>
            <IconButton handleEvent={() => print()} iconUrl="https://picsum.photos/100/100"></IconButton>
            <TypographyHeader>17</TypographyHeader>
            <DetailsCard firstContent="12 Kmph" secondContent="0 mm" thirdContent="1000 mb"></DetailsCard>

        </>
    )
}