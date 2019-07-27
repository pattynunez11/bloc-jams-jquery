{
//Pause button -hidden-css, switch icon using playstate attribute
 $('button#play-pause').on('click', function(){
     helper.playPauseAndUpdate(); 
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
     helper.playPauseAndUpdate(nextSong);
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
     helper.playPauseAndUpdate(previousSong);
});
//Time control slider

//use .val target value
 $('#time-control input').on('input', function (event) {
  player.skipTo(event.target.value);
 });

//global setInterval works everywhere
setInterval( () => {
 if (player.playState !== 'playing') { return; } 
//turn duration into % of song
 const currentTime = player.getTime();
 const duration = player.getDuration();
 const percent = (currentTime / duration) * 100;
 $('#time-control .current-time').text(currentTime);
 $('#time-control input').val(percent);
}, 1000);

//Volume Control
    $('#volume-control input').on( 'input', function (event){
        console.log("before change: ", player.volume)
        player.setVolume(event.target.value);
        console.log("after change: ", player.volume)
    });

//end of bar controls
}