var util = require( 'util' );
var events = require( 'events' );

var AudioDevice = {
  play : function( track ) {
    // Stub: trigger playback through iTunes, mpg123, etc
  },

  stop : function() {
  
  }
};

function MusicPlayer() {
  this.playing = false;
  events.EventEmitter.call( this );
}

util.inherits( MusicPlayer, events.EventEmitter );

var musicPlayer = new MusicPlayer();

musicPlayer.on( 'play', function( track ) {
  this.playing = true;
  AudioDevice.play( track );
});

musicPlayer.on( 'stop', function() {
  this.playing = false;
  AudioDevice.stop();
});

musicPlayer.on( 'play', function( track ) {
  console.log( 'Track now playing:', track );
});

musicPlayer.emit( 'play', 'The Roots - The Fire' );

setTimeout( function() {
  musicPlayer.emit( 'stop' );
});
