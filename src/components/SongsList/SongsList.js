import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../store/player";
import List from "./List/List";
import s from "./SongsList.module.css";

const SongsList = () => {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.player.activePlaylist);
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  let timer;
  const handleKeyUp = () => {
    clearTimeout(timer);
    timer = setTimeout(
      () => dispatch(playerActions.setSearchTerm(search)),
      400
    );
  };

  const handleKeyDown = () => {
    clearTimeout(timer);
  };

  return (
    <>
      <div className={s.list}>
        <div className={s.header}>{playlist ? playlist.title : ""}</div>
        <div className={s.inputWrapper}>
          <input
            className={s.search}
            placeholder="Search Song, Artist"
            onChange={onSearch}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            value={search}
          />
          <List />
        </div>
      </div>
    </>
  );
};

export default SongsList;
