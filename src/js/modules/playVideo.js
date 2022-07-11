import loadApi from "../helpers/loadApi";

export default () => {
  const playBtns = Array.from(document.querySelectorAll(".js-play-video"));
  if (!playBtns.length) return;

  var player = [];
  var flag = false;
  // const videoUrl = playBtn.dataset.videoUrl;


  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  };

  function onYouTubePlayer(url, btn) {
    let playerInstance = new YT.Player(btn, {
      height: '100%',
      width: '100%',
      videoId: youtube_parser(url),
      events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });

    player.push(playerInstance);
  };

  function onPlayerReady(event) {
    event.target.playVideo();
    flag = true;
  };

  // var done = false;
  // function onPlayerStateChange(event) {
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // };

  // function stopVideo() {
  //   player.stopVideo();
  // };

  function loadPlayer(url, btn) {
    if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
      loadApi("YT", "https://www.youtube.com/iframe_api", null);

      window.onYouTubePlayerAPIReady = () => {
        onYouTubePlayer(url, btn);
      };
    }
  };

  playBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      loadPlayer(btn.dataset.videoUrl, btn);
    });
  })
};
