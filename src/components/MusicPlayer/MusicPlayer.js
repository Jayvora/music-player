import { useSelector } from "react-redux";
import s from "./MusicPlayer.module.css";

import next from "../../icons/next.svg";
import previous from "../../icons/previous.svg";
import play from "../../icons/play.svg";
import ellipsis from "../../icons/ellipsis.svg";
import volume from "../../icons/volume.svg";
import { useState } from "react";

const MusicPlayer = () => {
  const activeSong = useSelector((state) => state.player.activeSong);
  const [audio] = useState(new Audio(activeSong ? activeSong.url : ""));

  const handleAudio = () => {
    console.log("hello");
    audio.play().then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      {activeSong && (
        <div className={s.wrapper}>
          <div className={s.title}>{activeSong.title}</div>
          <div className={s.artist}>{activeSong.artist}</div>
          <img
            className={s.photo}
            src={activeSong.photo}
            alt={activeSong.title}
          />
          <div className={s.actions}>
            <div className={s.circle}>
              <img src={ellipsis} alt="ellipsis" />
            </div>
            <div className={s.songActions}>
              <img src={previous} alt="previous" />
              <img
                className={s.playbtn}
                src={play}
                alt="play"
                onClick={handleAudio}
              />
              <img src={next} alt="next" />
            </div>
            <div className={s.circle}>
              <img className={s.volume} src={volume} alt="volume" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
