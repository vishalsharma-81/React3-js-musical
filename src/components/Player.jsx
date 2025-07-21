import React, { useRef, useState } from "react";
import Song from "./Song";
import Controls from "./Controls";
import sample from "../assets/sample.mp3";

const Player = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Song />
            <Controls isPlaying={isPlaying} playPauseHandler={playPauseHandler} />
            <audio ref={audioRef} src={sample}></audio>
        </div>
    );
};

export default Player;