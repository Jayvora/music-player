import { useEffect } from "react";
import { useQuery } from "react-apollo";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_SONGS_BY_PLAYLISTID } from "../../../constants/queries";
import { playerActions } from "../../../store/player";
import s from "./List.module.css";

const List = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.player.searchTerm);
  const playlist = useSelector((state) => state.player.activePlaylist);
  const { loading, error, data, refetch } = useQuery(
    FETCH_SONGS_BY_PLAYLISTID(
      playlist ? playlist.id : 1,
      searchTerm ? searchTerm : ""
    )
  );

  useEffect(() => {
    if (playlist && playlist.id) refetch();
  }, [playlist]);

  const onSongClick = (song) => {
    dispatch(playerActions.setActiveSong(song));
  };

  if (loading) return "Loading...";
  if (error) return "error...";

  return (
    <>
      {data.getSongs.map((song) => {
        const minutes = Math.floor(song.duration / 60);
        const seconds = song.duration - minutes * 60;
        return (
          <div
            key={song.id}
            className={s.wrapper}
            onClick={() => onSongClick(song)}
          >
            <img className={s.photo} src={song.photo} alt={song.title} />
            <div className={s.songInfo}>
              <span className={s.title}>{song.title}</span>
              <span className={s.artist}>{song.artist}</span>
            </div>
            <div className={s.duration}>{`${minutes}:${seconds}`}</div>
          </div>
        );
      })}
    </>
  );
};

export default List;
