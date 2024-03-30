//Ex9
window.addEventListener("load", function(){

    var section = document.querySelector("#section9");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    
    allCheckbox.onchange = function(){
        var temp = tbody.querySelectorAll("input[type='checkbox']");
        if(allCheckbox.checked==true)
        {
            for(var i=0;i<temp.length;i++)
            {
                temp[i].checked = true;
            }
        }
        else{
            for(var i=0;i<temp.length;i++)
            {
                temp[i].checked = false;
            }
        }
       
       
    };

    delButton.onclick = function(){
        var deltemp = tbody.querySelectorAll("input[type='checkbox']:checked");
    
        for(var i =0;i<deltemp.length;i++)
        {
            console.log(deltemp[i].parentElement.parentElement);
            deltemp[i].parentElement.parentElement.remove();
        }
    };

    

});

//Ex8
window.addEventListener("load", function(){

    var section = document.querySelector("#section8");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;//.children[0];

    let title = document.querySelector('.abc');
 
let beforebegin = document.createElement('p');
beforebegin.innerHTML = 'beforebegin';
 
let afterbegin = document.createElement('p');
afterbegin.innerText = 'afterbegin';
 
let beforeend = document.createElement('p');
beforeend.innerText = 'beforeend';
 
let afterend = document.createElement('p');
afterend.innerText = 'afterend';
 
title.insertAdjacentElement('beforebegin', beforebegin);
title.insertAdjacentElement('afterbegin', afterbegin);
title.insertAdjacentElement('beforeend', beforeend);
title.insertAdjacentElement('afterend', afterend);


    downButton.onclick = function(){
            var nextNode = currentNode.nextElementSibling;//현재 노드의 다음노드
            console.log(nextNode);
            if(nextNode==null)
            {
                alert("더이상 이동 불가");
            }
            else{
               // tbodyNode.removeChild(nextNode);//다음 노드 삭제
               // tbodyNode.insertBefore(nextNode,currentNode);//nextNode 를 currentNode기준으로 앞에 삽입한다.
               currentNode.insertAdjacentElement("beforebegin",nextNode);//currentNode의 앞에 nextNode를 삽입한다
            }
    };

    upButton.onclick = function(){
            var preNode = currentNode.previousElementSibling;
            console.log(preNode);
            if(preNode == null)
            {
                alert("더이상 이동 불가");
            }
            else{
               // tbodyNode.removeChild(currentNode);//현재노드 삭제
               // tbodyNode.insertBefore(currentNode,preNode);//currentNode 를 preNode기준 앞으로 삽입한다.
               currentNode.insertAdjacentElement("afterend",preNode)//currentNode의 뒤에 preNode를 삽입한다.
            }
    };

});

//Ex7-1
window.addEventListener("load", function () {
    var notices = [
        {id:4, title:"C++", regDate:"2020-07-19", writeId:"Seungmin",view:"9"}
        ,{id:5, title:"Ruby", regDate:"2020-09-19", writeId:"Seungmin",view:"10"}]//복제할 정보
    var section = document.querySelector("#section77");

    var noticeList = section.querySelector(".notice-list")
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function () {
        var trNode = noticeList.querySelector("tbody tr"); //tbody안의 tr태그 선택
        var cloneNode = trNode.cloneNode(true);
        //false: 껍데기만 복제, true: duplicate 부모,자손 다 복제
        var tds = cloneNode.querySelectorAll("td");
        
        tds[0].textContent = notices[1].id
        tds[1].innerHTML = '<a href ="' + notices[1].id + '">'+ notices[1].title +'</a>'
        tds[2].textContent = notices[1].regDate
        tds[3].textContent = notices[1].writeId
        tds[4].textContent = notices[1].view
        
        tbodyNode.append(cloneNode);
    };

    templateButton.onclick = function () {

        console.log("템플릿 버튼 클릭!");
        var template = section.querySelector("template");
        var cloneNode = document.importNode(template.content,true);
        var tds = cloneNode.querySelectorAll("td");
        
        tds[0].textContent = notices[1].id
        tds[1].innerHTML = '<a href ="' + notices[1].id + '">'+ notices[1].title +'</a>' //a태그를 포함시켜야 하기때문에 innerHTML사용
        tds[2].textContent = notices[1].regDate
        tds[3].textContent = notices[1].writeId
        tds[4].textContent = notices[1].view
        
        tbodyNode.append(cloneNode);
    };

});

//Ex7
window.addEventListener("load", function () {
    var notices = [
        {id:4, title:"C++", regDate:"2020-07-19", writeId:"Seungmin",view:"9"}
        ,{id:5, title:"Ruby", regDate:"2020-09-19", writeId:"Seungmin",view:"10"}]//복제할 정보
    var section = document.querySelector("#section77");

    var noticeList = section.querySelector(".notice-list")
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function () {
        var trNode = noticeList.querySelector("tbody tr"); //tbody안의 tr태그 선택
        var cloneNode = trNode.cloneNode(true);
        //false: 껍데기만 복제, true: duplicate 부모,자손 다 복제
        var tds = cloneNode.querySelectorAll("td");
        
        tds[0].textContent = notices[1].id
        tds[1].innerHTML = '<a href ="' + notices[1].id + '">'+ notices[1].title +'</a>'
        tds[2].textContent = notices[1].regDate
        tds[3].textContent = notices[1].writeId
        tds[4].textContent = notices[1].view
        
        tbodyNode.append(cloneNode);
    };

    templateButton.onclick = function () {

        console.log("TEMPLATE!");
        var template = section.querySelector("template");
        var cloneNode = document.importNode(template.content,true);
        var tds = cloneNode.querySelectorAll("td");
        
        tds[0].textContent = notices[1].id
        tds[1].innerHTML = '<a href ="' + notices[1].id + '">'+ notices[1].title +'</a>' //a태그를 포함시켜야 하기때문에 innerHTML사용
        tds[2].textContent = notices[1].regDate
        tds[3].textContent = notices[1].writeId
        tds[4].textContent = notices[1].view
        
        tbodyNode.append(cloneNode);
    };

});


//Ex6 : 
window.addEventListener("load", function () {
    var section = document.querySelector("#section6");

    var titleInput = section.querySelector(".title-input");
    var menuListUl = section.querySelector(".menu-list")
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function () {
        var title = titleInput.value;

        var html = '<a href="">'+ title +'</a>'; 
        //태그안에 title을 저장하는 방법
        
        var li = document.createElement("li");
        li.innerHTML = html;//<a>안의 title을 <li>로 감싸기.

        menuListUl.append(li);
    };
    delButton.onclick = function () {
        // var txtNode = menuListDiv.childNodes[0]
        // menuListUl.removeChild(txtNode); 부모를 사용한 삭제.
        
        var liNode = menuListUl.children[0]; //스스로를 삭제.
        liNode.remove();
    };
});

//Ex5 : 엘리먼트 노드의 속성 변경

window.addEventListener("load", function() {

    var section = document.querySelector("#secsion5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");


    changeButton.onclick = function() {
        img.src = "images/"+srcInput.value;
        //img.src = "images/"+imgSelect.value;

        //img.style["border-color"] = colorInput.value;
        img.style.boderColor = colorInput.value;
    }

});

//Ex4 : childeNodes를 이용한 노드 선택

window.addEventListener("load", function() {

    var section4 = document.querySelector("#secsion4");
    //var inputs = section4.querySelectorAll("input");
    var box = section4.querySelector(".box");

    // var input1 = box.childNodes[0];
    // var input2 = box.childNodes[1];

    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "칠드런";
    input2.value = "입니다";
    

});

//Ex3 : Selectors API Level1

window.addEventListener("load", function() {

    var section3 = document.getElementById("secsion3");
    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");
   
    btnAdd.onclick = function(){

        console.log("secsion3 add 클릭!");

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;


    };

});

//Ex2 : 엘리먼트 선택방법 개선하기

window.addEventListener("load", function() {

    var section2 = document.getElementById("secsion2");
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];
    
    console.log(txtX);
    
    /*
    var inputs = section2.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */

   
    btnAdd.onclick = function(){

        console.log("add 클릭!");

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;


    };

});

window.addEventListener("load", function() {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function(){

        console.log("add 클릭!");

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;


    };

});