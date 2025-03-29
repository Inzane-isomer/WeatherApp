import Skeleton from "react-loading-skeleton"
import Card from "./Card"
import { TypographyParagraph } from "./Typography"

interface IconButtonProps {
    iconUrl: string, 
    title?: string,
    subtitle?: string,
    handleEvent: any,
}

export default function IconButton({iconUrl, title, subtitle, handleEvent} : IconButtonProps) {
    return (
        <Card height={50} width={50} >
            <button onClick={() => handleEvent}>
                <TypographyParagraph >
                    {title}
                </TypographyParagraph>
                {iconUrl ? <img src={iconUrl} alt="weather-condition-icon"/> : <Skeleton />}
                <TypographyParagraph >
                    {subtitle}
                </TypographyParagraph>
            </button>
        </Card>
    )
}