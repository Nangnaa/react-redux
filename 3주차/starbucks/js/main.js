const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus(); 
  //검색부분에 포커스 
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
  // setAttribute html의 속성을 지정한다 (속성, 속성에들어갈내용)
});

searchInputEl.addEventListener('blur',function(){
  // 인풋요소에 포커스가 해제되엇을때
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

// 페이지 스크롤에 따른 요소제어
// 페이지 스크롤에 영향을 받는 요소들을 검색
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')
// document는 html이다
// window.addEventListener('scroll',function(){
  // window(브라우저창) 여러가지 명령이있다 화면자체이다
  //화면이 스크롤이되면 function의 함수를 실행하라
  // console.log('scroll');
// });

//lodash javascript 라이브러리  
window.addEventListener('scroll',_.throttle(function(){
    // 페이지에 스크롤 이벤트를 추가!
    //console.log(window.scrollY);//좌표가 표시
    if(window.scrollY >500){
      //윈도우화면에서 스크롤할때마다 scrollY이 부분이 갱신이되는데 
      //scrollY를 통해 위에서 몇px지점인지 파악할수있다  
      //배지 숨기기
      // badgeEl.style.display='none';
      // badgeEl라는 속성의 스타일을 어떻게 할것인가 display의 값을 none으로 하겠다

      // 애니메이션추가 gsap javascript 라이브러리
      gsap.to(badgeEl,0.6,{
        opacity:0, //점점투명
        display:'none' //문자를 입력할때는 따옴표
        /*display 속성처럼 값이 숫자가 아닌 속성은 
        전/후 상태의 중간값이 존재하지않기때문에 
        자연스러운 전환효과를 적용할수없다.*/
      })
      // gsap.to(요소,지속시간,옵션); 옵션은 객체데이터형식
      // name이나 age등 

      // 상단으로 탑스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })
    }else{
      //배지 다시 보이기
      gsap.to(badgeEl,0.6,{
        opacity:1, //점점투명
        display:'block'
      })
      // badgeEl.style.display='block';
     // 상단으로 탑스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100 //x축으로 100만큼 이동
    })
  }
}, 300))
// 0.3초스크롤이 반응하게해서 반복적으로 사용하게되는것을막는 throttle함수
//_.throttle(함수,시간)

toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, { //페이지가 출력되는 창
    //화면자체를 옮긴다 .7s scrollTo() 스크롤의 위치를 0으로 옮기겠다
    scrollTo: 0
  })
})


// visual
// 안보이게 만든다음 순차적으로 보이도록
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    delay:(index+1)* .7, 
    /*fade-in을 가진 4개의 클래스를 fadeEls에 넣었고 forEach로 반복을 돌린뒤
    실행이되는데 첫번째 반복할 때 index의 값은 숫자 0이된다.
    0에다가 0.7을 곱하면 0이되고 딜레이가 없는것이되고
     첫번째는 index에 1을더해 0.7초후에 동작을하게되고 
     두번째 반복에서는 1.4 다음 2.1 2.7초뒤에 동작하게된다.
     순차적으로 반복
    */ 
    opacity:1
  });
  // gsap.to(요소,지속시간,옵션);
});
// fadeEls의 갯수만큼 반복(forEach)된다
//매개변수 fadeEl(단수형태로 받아서 지정 원하는이름사용가능)와 
//두번째 매개변수 반복되는횟수index

/* Initialize(초기화) Swiper
  var swiper = new Swiper(".swiper-container", {
      {}안에있는 객체 데이터로 swiper라는 함수를 실행
      첫번째인수 swiper-container 슬라이드를 동작시킬 선택자
      두번째는 {}안에 들어갈 옵션
    direction: "vertical",
      방향: 수직슬라이드
    pagination: {
        페이지번호 몇번째번호를 볼것이다.
      el: ".swiper-pagination",
        요소의 선택자
      clickable: true,
        클릭이 가능하도록
    },
  });
  */

  // new Swiper(선택자,옵션)
  new Swiper('.notice-line .swiper-container', {
   direction:'vertical',//방향: 수직슬라이드
    autoplay:true, //자동재생여부
   loop:true //반복재생여부
  }); //()안에 있는걸 인수라고함
  // new : 생성자(자바스크립트의 클래스) 여러객체를 다루는게 가능

  new Swiper('.promotion .swiper-container',{
    slidesPerView : 3, //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop:true, //반복재생여부
    autoplay:{
      delay:5000
    }, //자동재생여부 0.5초 기본값3000
    pagination:{
      el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
      clickable: true //사용자의 페이지 번호 요소 제어 기능 여부
    },
    navigation:{
      prevEl: '.promotion .swiper-prev',
      nextEl: '.promotion .swiper-next'
    }
  });

  new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
  })

  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotion = false;
  promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion //true로 만들어줌
    //특정변수를 지속적으로 반대값으로 변경
    //!는 반대값
    if(isHidePromotion){
      //숨김처리
      promotionEl.classList.add('hide');
    }else{
      //보임처리
      promotionEl.classList.remove('hide');
    }
  });
  

  // 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector,delay,size){
  // gsap.to(요소,시간,옵션);
  gsap.to(
    selector, //선택자
    random(1.5,2.5), //애니메이션 동작 시간
    { //옵션
      y: size, //y축으로 20px만큼 내려오게만듬  
      repeat:-1, //무한반복 위에서 아래로 내려오는
      yoyo:true, //한번 재생된 애니메이션을 다시 되돌리는
      ease:Power1.easeInOut,
      //ease나 timing 함수를 사용하여 애니메이션을 좀더
      //부드럽게 만들고 원하는 모양으로 만들수있다.
      delay:random(0,delay)
  });
}
/*gsap에 to라는 메소드는 첫번째로 선택자selector를 받고
두번째로 random함수를 받아 지속시간을 설정하고 
옵션을 돌리게되는데 이렇게 random()이라는 함수를 추가해서
새로운 랜덤한 숫자를 반환받아 애니메이션 처리가 될수 있도록
입력을 해주면 페이지에서 사용자들에게 더 자연스러운 화면을 보여주게된다.
*/ 

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);
//함수실행할때 선택자로 floating을 넣어준것


// 요소가 화면에 보여짐 여부에 따른 요소 관리
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
      //뷰포트의 80% 지점쯤에 trigger(실행)가 된다 
    })
    .setClassToggle(spyEl, 'show') //(토글할요소, '토글할 클래스이름')
    // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

/* 올해가 몇 년도인지 계산*/
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
/*요소의 내용으로 무엇인가를 추가할때 textContent
글자내용들의 값을 알아내거나 거기에 값을 지정할때 사용 
지금은 지정해서사용(이퀄을사용)

Date 라는 생성자함수 Date안에 있는
getFullYear 라는 함수를 실행하게되면 
현재 년도가 숫자데이터로 반환이된다.
*/

