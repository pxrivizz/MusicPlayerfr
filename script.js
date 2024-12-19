const foto = document.getElementById('kapak');
const muzikIsim = document.getElementById('MuzikAdi');
const sanatci = document.getElementById('sanatci');
const currentTimeEl = document.getElementById('CurrentTime');
const durationEl = document.getElementById('duracition');
const progress = document.getElementById('progress');
const calmaBarIlerleme = document.getElementById('player-progress');
const playStop = document.getElementById('playbttn');
const prevBttn = document.getElementById('forwardbttn');
const bacwBttn = document.getElementById('backwardbttn');
const background = document.getElementById('kapak');



const songs = [
    {
        // path:  ,
        muzikIsim: 'Bir İhtimal Biliyorum',
        foto: 'foto1.jpg',
        sanatci: 'Gülşen',

    },
    {
        // path: ;,
        muzikIsim: 'BAL',
        foto: 'FOTO-YAZISIZ-1.jpeg',
        sanatci: 'Gülşen',

    },
    {
        // path: ,
        muzikIsim: 'Seyre Dursun Aşk',
        foto: 'seyredursunaşk.jpg',
        sanatci: 'Gülşen',

    },
    {
        // path: ,
        muzikIsim: 'İltimas',
        foto: 'i.jpg',
        sanatci: 'Gülşen',

    },
    {
        // path: ,
        // muzikIsim:,
        // foto : ,
        sanatci: 'Gülşen',

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
    this.classList.replace('fa-play', 'fa-pause');
    this.setAttribute('title', 'Pause');
}

function muzikDurdur() {
    muzikCaliyorMu = false;
    this.classList.replace('fa-pause', 'fa-play');
    this.setAttribute('title', 'Play');
}

function calmaBar() {
    const { currentTime, duration } = music;
    const ilerlemeYuzdesi = (currentTime - duracition) * 100;
    progress.style.width = '${ilerlemeYuzdesi}%';

    const formatTime = (time) => String(Math.floor(Time)).padStart(2, '0');
    durationEl.textContent = '${duration / 60}:${formatTime (duration%60)}';
    currentTimeEl.textContent = '${currentTime / 60}:${formatTime (currentTime%60)}';
}

function calmaBarIlerleme(e) {
    const width = calmaBar.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}
function loadMusic(songs){
    music.src = songs.path;
    muzikIsim.textContent = song.displayName;
    sanatci.textContent = song.sanatci;
    foto.src = song.kapak;
    background.src = song.kapak;
}
function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    muzikCal();
}

playStop.addEventListener('click', muzikCal);
bacwBttn.addEventListener('click', () => changeMusic(-1));
prevBttn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', update.calmaBar);
calmaBar.addEventListener('click', setcalmabar);