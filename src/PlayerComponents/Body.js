import React from "react";
import './Body.css'
import BodyHeader from "./BodyHeader";
import {useStateValue} from "../StateProvider";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body( ){
    const [{ spotify,playlist }, dispatch] = useStateValue();

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: playlist.uri,
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };
    const playSong = (id) => {
            spotify
                .play({
                    uris: [`spotify:track:${id}`],
                })
                .then((res) => {
                    spotify.getMyCurrentPlayingTrack().then((r) => {
                        dispatch({
                            type: "SET_ITEM",
                            item: r.item,
                        });
                        dispatch({
                            type: "SET_PLAYING",
                            playing: true,
                        });
                    });
                });
    };
    return (
        <div className='body'>
            <BodyHeader />
            <div className="body__info">
                <img src={playlist?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{playlist?.name}</h2>
                    <p>{playlist?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {playlist?.tracks?.items?.map(item => (<SongRow playSong={playSong} track={item.track} />))}
            </div>
        </div>
    )
}
export default Body