import React from 'react';

const LeftCard = ({ setCompanySelection, companySelection }) => {

    const setName=(name)=>{
        setCompanySelection(name);
        // console.log(companySelection)
    }
    return (
        <div className="p-4 min-h-screen bg-white shadow-md rounded-lg">
            <div className="flex flex-col gap-4">
                <div 
                    onClick={()=>setName('Apple')} 
                    className="flex justify-between items-center border-b pb-2"
                >
                    <span className="font-bold">Apple</span>
                </div>
                <div 
                    onClick={()=>setName('Tesla')} 
                    className="flex justify-between items-center border-b pb-2"
                >
                    <span className="font-bold">Tesla</span>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-bold">HDFCBANK</span>
                    <div className="flex gap-4 text-right">
                        <span className="text-red-500">-2.90</span>
                        <span className="text-red-500">-0.16%</span>
                        <span className="font-semibold">1798.10</span>
                    </div>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-bold">HINDUNILVR</span>
                    <div className="flex gap-4 text-right">
                        <span className="text-red-500">-10.45</span>
                        <span className="text-red-500">-0.45%</span>
                        <span className="font-semibold">2335.55</span>
                    </div>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-bold">INFY</span>
                    <div className="flex gap-4 text-right">
                        <span className="text-red-500">-15.25</span>
                        <span className="text-red-500">-0.79%</span>
                        <span className="font-semibold">1909.05</span>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <span className="font-bold">NIFTY 50</span>
                    <div className="flex gap-4 text-right">
                        <span className="text-red-500">-250.80</span>
                        <span className="text-red-500">-1.11%</span>
                        <span className="font-semibold">23727.65</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftCard;
