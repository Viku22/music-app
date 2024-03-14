
let currentTrackIndex = 0;
const tracks = [
    
    { title: "Gullab", artist: "Akhil", cover: "images/song-img 3.webp", file: "music/song 1.mp3" },
    { title: "Ram Siya Ram", artist: "	Sachet Tandon, Parampara Tandon", cover: "images/song-img 1.webp", file: "music/song 2.mp3" }
  
   

    // Add more tracks here
 
];


function loadTrack(index) {
    const track = tracks[index];
    document.getElementById('track-title').textContent = track.title;
    document.getElementById('artist-name').textContent = track.artist;
    document.getElementById('cover-art').src = track.cover;
    document.getElementById('audio').src = track.file;
}



function playPause() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        ctrlIcon.classList.add("fa-pause");
                ctrlIcon.classList.remove("fa-play");
    } else {
        audio.pause();
        ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");

    }
}


function prevTrack() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = tracks.length - 1;
    }
    loadTrack(currentTrackIndex);
    playPause();
}

function nextTrack() {
    currentTrackIndex++;
    if (currentTrackIndex > tracks.length - 1) {
        currentTrackIndex = 0;
    }
    loadTrack(currentTrackIndex);
    playPause();
}






// Initial track load

loadTrack(currentTrackIndex);




