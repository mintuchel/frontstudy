import React from 'react';

// Define the props interface
interface StockProps {
    name: string;
    price: string;
}

// Use the StockProps interface for the Box component
const Box: React.FC<StockProps> = ({ name, price }) => {
    return (
        <div className="rounded-2xl overflow-hidden border-[3px] border-black">
            <img
                src="https://picsum.photos/200"
                className="w-full h-[20vh] object-cover"
            />
            <div className="p-4 bg-white">
                <header className="mb-2">
                    <h3 className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                        {name}
                    </h3>
                </header>
                <p className="text-gray-600 text-sm">
                    {price}
                </p>
            </div>
        </div>
    );
};

export default Box;