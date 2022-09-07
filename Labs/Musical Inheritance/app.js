let family = ['Reed', 'Percussion', 'woodwind', 'string', 'Air'];

class Instrument {
    constructor(volume, family, playing){
    this.volume = volume;
    this.family;
    this.playing = playing;
    

    }
// instrument method

// var myInstrument = new Instrument(5, 1, 10);

class Woodwind extends Instrument{
    constructor(volume, family, playing){
        super(volume, family, playing);
        this.kind = "Woodwind";
    }
    plays(){
        console.log("You are listening to an instrument from the "+this.family );
    }
}
//  playInstrument(){
     
//     console.log('You are listening to a(n) ${this.family} for ${this.playing} at a volume of ${this.volume}');
// }
// }

// var myInstrument = new Instrument(5, 1, 10);
// console.log(myInstrument);