/* eslint-disable react/prop-types */
const LeftCard = ({ setCompanySelection }) => {
    const companyName = [
        'Apple',
        'Microsoft',
        'Alphabet',
        'Amazon',
        'Tesla',
        'Meta',
        'Netflix',
        'NVIDIA',
        'JPMorgan Chase',
        'Visa'
    ];

    const setName = (name) => {
        setCompanySelection(name);
    };

    return (
        <div className="p-4 min-h-screen bg-white shadow-md rounded-lg">
            <div className="flex flex-col gap-4">
                {companyName.map((name) => (
                    <div
                        key={name}
                        onClick={() => setName(name)}
                        className="flex justify-between items-center border-b pb-2 cursor-pointer"
                    >
                        <span className="font-bold">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftCard;
