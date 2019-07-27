class Helper { 
   playPauseAndUpdate(song) {
      player.playPause(song);
   }
}
const helper = new Helper();

// e Helper class called playPauseAndUpdate that takes one parameter, song. The method should call player.playPause (passing the song parameter) and update the total time. Replace every call of player.playPause with helper.playPauseAndUpdate.