

class Instrument {
    constructor(volume, family, playing){
    this.volume = volume;
    this.family = family;
    this.playing = playing;
    

 }
    displayDetails(){
        console.log("This Instrument is usually played at a " +this.volume +" volume, it is a member of the " + this.family +" family and is in this song for approximately " + this.playing);
    }
}
class Guitar extends Instrument {
    constructor(make, strings, type){
          super();
          this.family = super.family;
        this.make = make;
        this.strings = strings;
        this.type = type;

    }
    strumOpen(){
        console.log(this.strings);
        this.strings.forEach(strings => {
            console.log(strings.note + " Playing")
        });
    }
    displayDetails(){
        
        
        console.log("This Guitar is made by " +this.make +" and it is a(n) " +this.type + " guitar and it has " + this.strings.length +" strings");
    }
}

class String {
    constructor(note, octave){
        this.note = note;
        this.octave = octave;

    }
}

var strings = [];
strings[0]  = new String ("E", 4);
strings[1]  = new String ("A", 4);
strings[2]  = new String ("D", 4);
strings[3]  = new String ("G", 4);
strings[4]  = new String ("B", 4);
strings[5]  = new String ("E", 4);

var myInstrument = new Instrument("Moderate", "String", "3 minutes");
var myGuitar = new Guitar ("Taylor", strings, "Acoustic");


myGuitar.strumOpen();
myGuitar.displayDetails();
myInstrument.displayDetails();