//creating(element)a row for each song's data in album 
{album.songs.forEach ( (song, index) => {
    song.element = $(`
    <tr>
       <td>
         <button>
          <span class="song-number">${index + 1}</span>
          <span class="ion-play"></span>
          <span class="ion-pause"></span>
         </button>
        </td>
        <td> ${song.title} </td>
        <td> ${song.duration} </td>
        </td> 
     </tr>
    `);
//playPause from player object
    song.element.on('click', event => {
        helper.playPauseAndUpdate(song);
        $('button#play-pause').attr('playState', player.playState);
      });
//add text from album, song's data, into HTML    
    $('#song-list').append(song.element);
});

}