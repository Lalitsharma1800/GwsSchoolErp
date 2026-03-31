import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Button } from "../ui/button";

export function Hover_Card({
    content,
    hover_card_content,
}){
    return(
        <>
            <HoverCard>
                <HoverCardTrigger openDelay={0} closeDelay={100}><Button variant="link">{content}</Button></HoverCardTrigger>
                <HoverCardContent>{hover_card_content}</HoverCardContent>
            </HoverCard>
        </>
    )
}