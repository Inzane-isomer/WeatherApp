import styled from "styled-components";

interface CardProps { 
    count: number,
    content: string
}

const StyledP = styled.p `
    font-size: 1em;
    color:rgb(0, 0, 0);
`;

export default function Card({count, content} : CardProps) {
    return (
        <div >
            <p>This is a card with count {count}</p>
            <StyledP>Response from api: {content}</StyledP>
        </div>
    )
}