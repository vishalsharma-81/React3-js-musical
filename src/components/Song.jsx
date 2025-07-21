import React from "react";
import cover from "../assets/cover.jpg";

const Song = () => {
    return (
        <div className="text-center mb-6">
            <img
                src={cover} alt="Song Cover" className="w-48 h-48 object-cover rounded-lg shadow-md"



            />
            <h2 className="text-2xl font-semibold">Quede Se</h2>
            <p className="text-gray-500">Arijit Singh</p>
        </div>
    );
};

export default Song;