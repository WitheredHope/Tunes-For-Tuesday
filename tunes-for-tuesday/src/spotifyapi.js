var $ = require('jquery')

module.exports = {
    getCurrentlyPlaying: (token, callback) => {
        // Make a call using the token
        $.ajax({
          url: "https://api.spotify.com/v1/me/player",
          type: "GET",
          beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          },
          success: (data) => {
            callback(data)
          }
        })
    },
    //GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks
    getPlaylistTracks:(token, playlistID, callback) =>{
      $.ajax({
        url: "https://api.spotify.com/v1/playlists/"+ playlistID + "/tracks",
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: (data) => {
          callback(data)
        }
      })
    },
    getUser:(token, callback) =>{
      //GET https://api.spotify.com/v1/me
      $.ajax({
        url: "https://api.spotify.com/v1/me",
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: (data) => {
          callback(data)
        }
      })
    }
    /*template:(token, callback) =>{
      $.ajax({
        url: "",
        type: "",
        beforeSend: (xhr) => {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: (data) => {
          callback(data)
        }
      })
    }*/
}