const foto = document.getElementById('kapak');
const muzikIsim = document.getElementById('muzikAdi');
const sanatci = document.getElementById('sanatci');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duraciton');
const progress = document.querySelector('.progress');
const calmaBarIlerleme = document.getElementById('player-progress');
const playStop = document.getElementById('playbttn');
const prevBttn = document.getElementById('backwardbttn');
const nextBttn = document.getElementById('forwardbttn');
const background = document.getElementById('bgImage');

const music = new Audio();

const songs = [
    {
        path: 'song1.mp3',
        muzikIsim: 'Bir İhtimal Biliyorum',
        foto: 'foto1.jpg',
        sanatci: 'Gülşen'
    },
    {
        path: 'song2.mp3',
        muzikIsim: 'BAL',
        foto: 'FOTO-YAZISIZ-1.jpeg',
        sanatci: 'Gülşen'
    },
    {
        path: 'song3.mp3',
        muzikIsim: 'Seyre Dursun Aşk',
        foto: 'seyredursunaşk.jpg',
        sanatci: 'Gülşen'
    },
    {
        path: 'song4.mp3',
        muzikIsim: 'İltimas',
        foto: 'i.jpg',
        sanatci: 'Gülşen'
    }
];

let musicIndex = 0;
let muzikCaliyorMu = false;

function togglePlay() {
    if (muzikCaliyorMu) {
        muzikDurdur();
    } else {
        muzikCal();
    }
}

function muzikCal() {
    muzikCaliyorMu = true;
    music.play();
    playStop.classList.replace('fa-play', 'fa-pause');
    playStop.setAttribute('title', 'Pause');
}

function muzikDurdur() {
    muzikCaliyorMu = false;
    music.pause();
    playStop.classList.replace('fa-pause', 'fa-play');
    playStop.setAttribute('title', 'Play');
}

function calmaBar() {
    const { currentTime, duration } = music;
    const ilerlemeYuzdesi = (currentTime / duration) * 100;
    progress.style.width = `${ilerlemeYuzdesi}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${Math.floor(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${Math.floor(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setCalmaBar(e) {
    const width = calmaBarIlerleme.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

function loadMusic(song) {
    music.src = song.path;
    muzikIsim.textContent = song.muzikIsim;
    sanatci.textContent = song.sanatci;
    foto.src = song.foto;
    background.src = song.foto;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    muzikCal();
}

playStop.addEventListener('click', togglePlay);
prevBttn.addEventListener('click', () => changeMusic(-1));
nextBttn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', calmaBar);
calmaBarIlerleme.addEventListener('click', setCalmaBar);

// İlk şarkıyı yükle
loadMusic(songs[musicIndex]);
