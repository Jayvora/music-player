import { useQuery } from "react-apollo";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FETCH_PLAYLIST } from "../../constants/queries";
import { playerActions } from "../../store/player";
import s from "./Playlist.module.css";
import logo from "../../icons/logo.svg";

const Playlist = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(FETCH_PLAYLIST);

  const onNavLink = (playlist) => {
    dispatch(playerActions.setActivePlaylist(playlist));
  };

  if (loading) return "Loading...";
  if (error) return "error...";

  return (
    <>
      <div className={s.list}>
        <img className={s.logo} src={logo} alt="logo" />
        {data.getPlaylists.map((playlist) => {
          const link = playlist.title.replace(/\s+/g, "").toLowerCase();
          return (
            <NavLink
              style={({ isActive }) => {
                return {
                  opacity: isActive ? "1" : "",
                };
              }}
              className={s.link}
              to={link}
              key={playlist.id}
              onClick={() => onNavLink(playlist)}
            >
              {playlist.title}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Playlist;
