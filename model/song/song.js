import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const getSpotifyAccessToken = async () => {
    try {
        const data = await spotifyApi.clientCredentialsGrant();
        spotifyApi.setAccessToken(data.body['access_token']);
    } catch (error) {
        console.error('Error retrieving an access token', error);
    }
};

export const getSongDataBySid = async (sid) => {
    try {
        await getSpotifyAccessToken();

        const trackData = await spotifyApi.getTrack(sid);

        // Process and reformat the track data
        const formattedData = {
            songId: trackData.body.id,
            songName: trackData.body.name,
            artists: trackData.body.artists.map(artist => ({
                artistName: artist.name,
                artistId: artist.id
            })),
            albumName: trackData.body.album.name,
            albumCoverImageUrl: trackData.body.album.images[0]?.url || null
        };

        return formattedData;
    } catch (error) {
        console.error('Error fetching song data', error);
        throw error;
    }
};

export const searchSongs = async (song, artist, limit, offset) => {
    try {
        await getSpotifyAccessToken();

        const query = `track:${song} artist:${artist}`;
        const searchResult = await spotifyApi.searchTracks(query, { limit, offset });

        // Process and reformat the search results
        return searchResult.body.tracks.items.map(track => ({
            songId: track.id,
            songName: track.name,
            artists: track.artists.map(artist => ({
                artistName: artist.name,
                artistId: artist.id
            })),
            albumName: track.album.name,
            albumCoverImageUrl: track.album.images[0]?.url || null
        }));
    } catch (error) {
        console.error('Error searching for songs', error);
        throw error;
    }
};