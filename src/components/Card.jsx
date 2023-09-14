const Card = ({card, handleCast}) => {
    const {name, image, role, salary} = card;
    return (
        <div className="bg-gray-600 opacity-80 text-center text-white w-80 p-5 space-y-2 rounded-lg">
            <div className="w-full flex justify-center">
                <img className="w-20 rounded-full" src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, illum?</small></p>
            <div className="flex justify-around">
                <p>Salary : {salary} $</p>
                <p>{role}</p>
            </div>
            <button className="px-3 py-2 rounded-lg mt-2 bg-red-600" onClick={() => handleCast(card)}>Cast</button>
        </div>
    );
};

export default Card;