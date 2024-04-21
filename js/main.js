/**
 * Your JS code here
 */

/**
 * Sample code
 */


const videoId = 'wU58Go13G6Q'; // Replace with your video ID
const videoElement = document.getElementById('hero_video');

const player = new YT.Player('hero_video', {
    videoId: videoId,
    playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: videoId,
        mute: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
    },
    events: {
        'onReady': onPlayerReady
    }
});

function onPlayerReady(event) {
    event.target.playVideo();
}


document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

  ulElement.appendChild(liElement);
});
