import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Controls = ({ isPlaying, playPauseHandler }) => {
    return (
        <div className="flex items-center justify-center space-x-6">
            <button
                onClick={playPauseHandler}
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition"
            >
                {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </button>
        </div>
    );
};

export default Controls;
