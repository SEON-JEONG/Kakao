/*스와이퍼 슬라이더*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true, 
    
    //오토플레이
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  //오른쪽 슬라이드 

  const gnbBtn = document.querySelector('.gnbBtns_Trigger');
  const gnb = document.querySelector('.gnb');
  const dark = document.querySelector('.dark');

  gnbBtn.onclick=()=>{
    gnb.style = 'transform: translateX(0)';
    dark.style.display = 'block';
   
  }
  dark.onclick = () => {
    gnb.style = 'transform: translateX(-100%)';
    dark.style.display = 'none';
    
  }


  //gnb내의 서브메뉴 열고 닫기 (캐릭터,카테고리)

  const btn_subs = document.querySelectorAll ('.btn_sub')//버튼
  const btn_subArrow = document.querySelectorAll ('.btn_sub span') //화살표
  const list_sub = document.querySelectorAll ('.list_sub') //서브

  btn_subs.forEach((item,index)=>{
  item.onclick = function(){
  btn_subArrow[index].classList.toggle('on');

  if(btn_subArrow[index].classList.contains('on')){
    list_sub[index].style.height = 'auto'
  }else{ 
    list_sub[index].style.height = '0'
    }  
   }
  })

  // 로그인 팝업
const log = document.querySelectorAll('.log')
const loginPop = document.querySelector('.loginPop')
const loginPopClose = document.querySelector('.close')
const talk_btn = document.querySelector('.talk_btn')





//로그인 팝업 -띄우기
log.forEach(function(logBtn){
  logBtn.addEventListener('click',()=>{
    loginPop.style.display = 'block';
    dark.style.display = 'block';
  })
})

// 로그인팝업 - 닫기버튼
loginPopClose.addEventListener('click', ()=>{
  loginPop.style.display = 'none';
  dark.style.display = 'none';
})

// 로그인 팝업 - 링크
talk_btn.addEventListener('click', ()=>{
  window.location = 'https://accounts.kakao.com/'
})

// 로그인 팝업뜨면 어둡게 만들기



