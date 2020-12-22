class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    // when the index gets to 8 then the next step will go to 0
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    // loops over the pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out`;
    });

    this.index++;
  }
  start() {
    // const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, 1000);
  }
}

const drumKit = new DrumKit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.start();
});
