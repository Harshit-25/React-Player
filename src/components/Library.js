import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  song,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            songs={songs}
            id={song.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
