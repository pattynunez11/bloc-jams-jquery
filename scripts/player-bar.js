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
//fixes -no next song on the last #index
    if (nextSongIndex >= album.songs.length) 
     { return; }
    player.playPause(nextSong);
});

//Previous button similar to Next, differs with song index of previous song limit is at -1. 
$('button#previous').on('click', function() {
    if (player.playState !== 'playing')
     { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    const previousSong = album.songs[previousSongIndex];
//fixes -no next song on the last #index
     if (previousSongIndex == -1) 
     { return; }
     player.playPause(previousSong);
});
}