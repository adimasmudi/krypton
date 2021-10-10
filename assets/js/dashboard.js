let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");


const homeSection = document.querySelector(".home-section");
const dashboardMainContent = document.querySelector(".dashboard-main-content");
const menuTools = document.querySelector(".menu-tools");
const courseOffers = document.querySelector(".course-offers");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    if(window.screen.width < 786){
        dashboardMainContent.classList.toggle('hidden');
    }
    
    menuBtnChange();//calling the function(optional)
});

//   searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
//     sidebar.classList.toggle("open");
//     menuBtnChange(); //calling the function(optional)
//   });

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
}

// appear when hover
const btns = [...document.querySelector('.nav-group').children];

const displayWhenHover = (button,index,theEvent,display)=>{
    button.addEventListener(theEvent,()=>{
        document.querySelector('.appear-when-hover').children[index].style.display = display;
    })
}
btns.forEach(function(btn,idx){
    displayWhenHover(btn,idx,'mouseover','block');
    displayWhenHover(btn,idx,'mouseleave','none');

})

document.querySelector("#log_out").addEventListener('click',()=>{
    location.href = '../loginsignup.html';
})

