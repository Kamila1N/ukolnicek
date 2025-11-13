import type {ItemData} from "./Item.tsx";
import {Item} from "./Item.tsx";


type ListProps = {
    title: string;
    items : ItemData[];
}

export function List({title, items}: ListProps) {
    return (
        <div >
            <h2> {title}</h2>
            {items.map((item) => (
                <Item
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    done={item.done} />
            ))}
        </div>
    )
}