import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Playlist from "../Playlist/Playlist";
import SongsList from "../SongsList/SongsList";
import s from "./Root.module.css";

const Root = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Playlist />
        <SongsList />
        <MusicPlayer />
      </div>
    </>
  );
};

export default Root;
