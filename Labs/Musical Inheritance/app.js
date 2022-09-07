let family = ['Reed', 'Percussion', 'woodwind', 'string', 'Air'];

class Instrument {
    constructor(volume, family, playing){
    this.volume = volume;
    this.family = family;
    this.playing = playing;


    }}
// instrument method

var myInstrument = new Instrument(5, 1, 10);


function anInstrument(Instrument){
   
    console.log('You are listening to a(n) ${this.family} for ${this.playing} at a volume of ${this.volume}');
}



console.log(myInstrument);