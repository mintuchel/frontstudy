import React, { useState } from 'react';
import Card from './card';

interface CardProps {
    imgurl: string;
    name: string;
    price: string;
    position: string;
}

// team이라는 배열과 삭제해주는 함수를 props로 전달받기
interface MyTeamProps {
    team: CardProps[];
    onDeleteFromMyTeam: () => void;
}

const MyTeam: React.FC<MyTeamProps> = ({ team, onDeleteFromMyTeam }) => {
    return (
        <div className="w-full h-full border-[3px] border-black p-4">
            <h2 className="text-center font-bold">My Team</h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-5">
                {team.length > 0 ? (
                    team.map((player, index) => (
                        <Card
                            key={index}
                            imgurl={player.imgurl}
                            name={player.name}
                            price={player.price}
                            position={player.position}
                            onAddToMyTeam={onDeleteFromMyTeam}
                        />
                    ))
                ) : (
                    <p className="text-center">No players added yet</p>
                )}
            </div>
        </div>
    );
};

export default MyTeam;