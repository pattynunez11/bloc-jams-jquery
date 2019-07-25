{
//pause button hidden-css, switch icon using playstate attribute
    $('button#play-pause').on('click', function(){
     player.playPause(); 
     $(this).attr('playState', player.playState);  
    });
//play next song, array + 1 to make a var to hold #index to call to var to play
$('button#next').on('click', function() {
    if (player.playState !== 'playing')
     { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
     const nextSong = album.songs[nextSongIndex];
     player.playPause(nextSong);
//fixes -no next song on the last #index
    if (nextSongIndex >= album.songs.length) 
     { return; }
    player.playPause(nextSong);
   
});
}