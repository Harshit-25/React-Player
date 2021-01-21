import React from "react";
import { playAudio } from "../util";

function LibrarySong({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  songs,
  id,
}) {
  const setCurrentHandler = () => {
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    setCurrentSong(song);
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={setCurrentHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
