const {urls} = require('./vars')
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "91c45e7238824a2e8a4a30c467807c10";
export const redirectUri = urls.main + urls.redirect;

export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-private",
    "user-read-birthdate",
    "user-read-email"
];
