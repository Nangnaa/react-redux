// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubeIframeAPIReady() {
  // <div id="player"></div> 아이디라고 #을 붙이지말것
  new YT.Player('player', {
    //유투브가 알아서 찾아감
    videoId: 'An6LvWQuj_8',
    //중요 어떤아이디값을 가진값을 출력할것인지
    playerVars:{
      autoplay:true, //자동재생여부
      loop:true, //반복재생여부
      playlist:'An6LvWQuj_8' //반복 재생할 유투브 영사 ID목록
    },
    events:{
      onReady:function(event){
        //영상이 준비가 되면 이 익명의함수를 실행이되는데  
        //실행할때 상황 자체를 데이터로 넘기게된다
        event.target.mute()//준비된 영상을 음소거처리
      }
    }
  })
}

