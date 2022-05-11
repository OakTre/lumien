import loadApi from "../helpers/loadApi";

export default () => {
  const playBtn = document.querySelector(".js-play-video");
  if (!playBtn) return;

  var player;
  const videoUrl = playBtn.dataset.videoUrl;


  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  };

  function onYouTubePlayer() {
    player = new YT.Player(playBtn, {
      height: '100%',
      width: '100%',
      videoId: youtube_parser(videoUrl),
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  };

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  };

  function stopVideo() {
    player.stopVideo();
  };

  function loadPlayer() {
    if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
      loadApi("YT", "https://www.youtube.com/iframe_api", null);

      window.onYouTubePlayerAPIReady = () => {
        onYouTubePlayer();
      };
    }
  };

  playBtn.addEventListener("click", () => {
    loadPlayer();
  });
};
