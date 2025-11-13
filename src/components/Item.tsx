import "./Item.css";

export type ItemData = {
    title: string;
    description: string;
    done: boolean;
}

export function Item({title, description, done}: ItemData) {
    return (
        <div className={`item ${done ? "done" : ""}`}>
            <p style={{fontWeight: "bold"}}> {title}</p>
            <p> {description} </p>
        </div>
    )
}