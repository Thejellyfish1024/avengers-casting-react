const Carts = ({casting, remaining, castingCost}) => {
    return (
        <div className="bg-zinc-700 opacity-80 text-white text-center my-5 p-4 rounded-xl">
            <div className="bg-slate-400 rounded-lg opacity-80 py-3 space-y-4 text-gray-800">
                <h2 className="text-2xl font-bold">Remaining Budget : {remaining} $</h2>
                <h2 className="text-2xl font-bold">Casting Cost : {castingCost} $</h2>
            </div>
            <div className="min-h-[400px] mt-8">
                <h2 className="text-xl font-bold">Casting Members</h2>
                <ul className="space-y-2 mt-4">
                    {
                        casting.map((member,idx) => <li key={idx}>* {member.name}</li>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default Carts;