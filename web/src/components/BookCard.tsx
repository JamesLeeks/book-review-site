import type { book } from "../exampleBooks";
import placeHolderCover from "../assets/placeholder-cover.png";

export function BookCard(props: book) {
    return (
        <>
            <div className="book-card">
                <img
                    className="card-cover"
                    src={placeHolderCover}
                    alt="Book cover"
                />
                <div>{props.title}</div>
                <div>{props.author}</div>
                <div>
                    {props.rating <= 10 ? props.rating.toFixed(1) : "10.0"}
                </div>
                <div>
                    {props.representationRating <= 10
                        ? props.representationRating.toFixed(1)
                        : "10.0"}
                </div>
            </div>
        </>
    );
}
