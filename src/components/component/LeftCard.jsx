import { FaAngleDown } from "react-icons/fa6";


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
        'Visa',
        'Norway',
        'Optum'
    ];

    const setName = (name) => {
        setCompanySelection(name);
    };



    return (
        <div className="border-r-2 border-gray-100">

            {companyName.map((name) => (
                <div className='w-96 text-sm flex items-center hover:scale-105 duration-300 justify-between p-2 px-4 border-b-[1px] border-gray-200 h-11 bg-myWhite' onClick={() => setName(name)}>
                    <div className="text-green-500 font-semibold uppercase">{`${name}`}</div>
                    <div className='flex gap-8'>
                        <p className="text-red-500">{`${546}`}</p>
                        <p className={`flex items-center justify-center`}>{`${"- 4.5%"}`}&nbsp;<FaAngleDown /></p>
                        <p className={"text-green-500"}>{`${5245}`}</p>
                    </div>

                </div >
            ))}
        </div>
    );
};

export default LeftCard;

