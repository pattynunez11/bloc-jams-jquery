{
//Pause button -hidden-css, switch icon using playstate attribute
 $('button#play-pause').on('click', function(){
     player.playPause(); 
     $(this).attr('playState', player.playState);  
 });
//Next button -create index for song currently playing create cont nextSong using current song +1 to for player to play.
 $('button#next').on('click', function() {
    if (player.playState !== 'playing')
     { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex + 1;
     const nextSong = album.songs[nextSongIndex];   
//fixes -no next song on the last #index
    if (nextSongIndex >= album.songs.length) 
     { return; }
    player.playPause(nextSong);
 });
}