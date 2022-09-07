class Instrument {
    constructor(volume, family, playing){
    this.volume = volume;
    this.family = family;
    this.playing = playing;

    }
// instrument method

listening(duration){
    this.duration = duration;

    return 'You are listening to a(n) ${this.family} for ${this.playing} at a volume of ${this.volume} for ${this.duration}'
}
}

