//Ex5- Trigger
window.addEventListener("load", function () {
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");
    
    fileTriggerButton.onclick = function(){
        var event = new MouseEvent("click",{
            'view':window, //
            'bubbles':true, //버블링이 가능한지
            'cancelable':true //취소 가능한지
        });

        fileButton.dispatchEvent(event);
    }
});

//1. Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load",function(){
    var section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img");
    console.log(imgs.length);
    var currentImg = section.querySelector(".current-img");

    for(var i=0; i<imgs.length; i++){
    imgs[i].onclick = function(e){
        //console.log(e.target.nodeName); //현재 선택된 타겟.
        currentImg.src = e.target.src; //src를 현재 선택된 src로 변경
    }
}
});
