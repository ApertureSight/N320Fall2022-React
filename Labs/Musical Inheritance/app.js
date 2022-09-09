
const synth = new Tone.Synth().toDestination();


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
this.strings.forEach(string => {
    const now = Tone.now()
synth.triggerAttackRelease(string.note+string.octave, "8n");
console.log(string.note + " Playing")
});

setTimeout(this.onComplete, 1000);
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
class Note {
    constructor(note, duration){
    this.note = note;
    this.duration = duration;
}
}

var strings = [];
strings[0] = new String ("E", 4);
strings[1] = new String ("A", 4);
strings[2] = new String ("D", 4);
strings[3] = new String ("G", 4);
strings[4] = new String ("B", 4);
strings[5] = new String ("E", 4);

var notes = [];
notes[0] = new Note ("C", 4);
notes[1] = new Note ("B#", 4);
notes[2] = new Note ("Am", 4);
notes[3] = new Note ("Dm", 4);

var myInstrument = new Instrument("Moderate", "String", "3 minutes");
var myGuitar = new Guitar ("Taylor", strings, "Acoustic");
var mySaxaphone = new Guitar("Suzephone", notes, "Brass"  )

myGuitar.strumOpen();
myGuitar.onComplete = playNext;
mySaxaphone.onComplete = playNext;
myGuitar.displayDetails();
myInstrument.displayDetails();

let myInstruments = [myGuitar, mySaxaphone]

let i = 0;
function playNext() {
myInstruments[i].strumOpen();
i++;
}
