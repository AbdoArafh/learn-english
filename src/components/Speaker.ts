class Speaker {
    speech: SpeechSynthesisUtterance;
    synth: SpeechSynthesis;
    voices: SpeechSynthesisVoice[];
    constructor() {
      this.speech = new SpeechSynthesisUtterance();
      this.synth = window.speechSynthesis;
      this.voices = this.synth.getVoices();
      this.speech.voice = this.voices[0];
      this.speech.volume = 1;
      this.play = this.play.bind(this);
    }
    play (text: string) {
      if (this.synth.speaking) this.synth.cancel();
      this.speech.text = text;
      this.synth.speak(this.speech);
    }
  }

export default Speaker;