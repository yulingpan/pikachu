import string from "./css.js";

const player = {
  n: 1,
  id: undefined,
  time: 40,
  ui: {
    demoHTML: document.querySelector("#demoHTML"),
    demoText: document.querySelector("#demoText"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.demoText.innerText = string.substring(0, player.n);
    player.ui.demoHTML.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n == string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demoText.innerText = string.substring(0, player.n);
    player.ui.demoHTML.innerHTML = string.substring(0, player.n);
    player.ui.demoText.scrollTop = player.ui.demoText.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 150;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 40;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
