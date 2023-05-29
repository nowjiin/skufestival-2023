window.addEventListener('load', function() {
  var elements = document.querySelectorAll('*');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.visibility = 'visible';
  }
});
const myButton = document.getElementById("myButton");

window.onload = function() {
  // 이 곳에 모든 HTML 요소가 로드된 후 실행할 코드를 작성합니다.
  var sectionA = document.getElementById("sectionA");
  var sectionB = document.getElementById("sectionB");
  var sectionZ = document.getElementById("sectionZ");

  var picA = document.querySelector(".pic-sectionA");
  var picB = document.querySelector(".pic-sectionB");
  var picZ = document.querySelector(".pic-sectionZ");


  var picNoA = document.querySelector(".picNo-sectionA");
  var picNoB = document.querySelector(".picNo-sectionB");
  var picNoZ = document.querySelector(".picNo-sectionZ");

  var content1 = document.getElementById("content-1");
  var content2 = document.getElementById("content-2");
  var content0 = document.getElementById("content-0");

  
  function showInitialContent() {
    picA.setAttribute("src", "./img/i_map0.png");
    picNoA.innerHTML = "0";
    content1.style.display = "none";
    content2.style.display = "none";
  }
  
  function showContent(index) {
    if (index === 1) {
      content1.style.display = "block";
      content2.style.display = "none";
      content0.style.display = "none";

    } else if (index === 2) {
      content1.style.display = "none";
      content2.style.display = "block";
      content0.style.display = "none";

    } else if (index === 3) {
      content1.style.display = "none";
      content2.style.display = "none";
      content0.style.display = "none";

    }
  }

  // 초기 상태 설정
  showInitialContent();
  
  sectionA.addEventListener("click", function() {
    picA.setAttribute("src", "./img/i_mapA.png");
    picNoA.innerHTML = "1";
    showContent(1);
  });

  
  sectionB.addEventListener("click", function() {
    picB.setAttribute("src", "./img/i_mapB.png");
    picNoB.innerHTML = "2";
    showContent(2);
  });
  
};
