import gql from "graphql-tag";

export const FETCH_PLAYLIST = gql`
  {
    getPlaylists {
      id
      title
    }
  }
`;

export const FETCH_SONGS_BY_PLAYLISTID = (playlist_id, searchTerm = "") => {
  return gql`{
    getSongs(playlistId: ${playlist_id}, search: "${searchTerm}") {
      _id
      title
      photo
      url
      duration
      artist
    }
  }`;
};
