import Card from "./Card";

const Cards = ({cards,handleCast}) => {
    return (
        <div className="grid grid-cols-2 gap-4 py-5">
            {
                cards.map(card => <Card key={card.id}
                card={card}
                handleCast={handleCast}></Card>)
            }
        </div>
    );
};

export default Cards;