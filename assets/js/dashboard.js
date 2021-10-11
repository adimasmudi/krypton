import {homeData, myLearning, challenge} from './data/homeData.js';


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

// const displayWhenHover = (button,index,theEvent,display)=>{
//     const elements = [...document.querySelector('.appear-when-hover').children]
//     button.addEventListener(theEvent,()=>{
//         elements.forEach((child,idx)=>{
//             if(idx !== index)
//         });
        
//     })
// }
const elements = [...document.querySelector('.appear-when-hover').children];

const toggleClick = function(index){
    elements.forEach((el,indx)=>{
        if(indx !== index){
            elements[indx].classList.add('hidden');
        }
    })
    elements[index].classList.toggle('hidden');
}



btns.forEach(function(btn,idx){
    btn.addEventListener('click',function(){
        toggleClick(idx);
    });
    
})



document.querySelector("#log_out").addEventListener('click',()=>{
    location.href = '../index.html';
})


// home data handeling
const courseOffersHome = document.querySelector(".course-offers");

const loadHomeOffers = function(dataType="all",thedata = homeData){
    let offersList = ``;
    const dataProcess = dataType === "all" ? thedata : thedata.filter((hd)=>hd.category === dataType)
    dataProcess.forEach(function(data){
        offersList+=`
        <div class="course-item">
            <img src="${data.photoUrl}" alt="course image">
            <h4 class="course-title">${data.title.length > 29 ? data.title.substring(0,28) + '..' : data.title}</h4>
            <span class="course-price">${data.price}</span>
            <p class="rating">${data.rating}</p>
        </div>
        `;
    })

    courseOffersHome.innerHTML = offersList;
}

const myLearnings = document.querySelector(".my-learning");

const myLearningRender = function( dataType="all",thedata = myLearning){
    let html = ``;
    const dataProcess = dataType === "all" ? thedata : thedata.filter((hd)=>hd.category === dataType)
    dataProcess.forEach(function(learningData){
        html+=`
        <div class="learning-list">
            <img src="${learningData.photoUrl}" alt="course image">
            <h4>${learningData.title.length > 29 ? learningData.title.substring(0,28) + '..' : learningData.title}</h4>
            <div class="progress-bar">
                <span class="bar" style="width:${learningData.progress}%"></span>
            </div>
            <div class="action">
                <span>${learningData.progress}% complete</span>
                <button class="continue-learning btn-active">Continue Learning</button>
            </div>
        </div>
        `;
    })

    myLearnings.innerHTML = html;
}

const challengeList = document.querySelector(".challenge-list");

const challengeFunction = function( dataType="all", thedata = challenge){
    let html = ``;
    const dataProcess = dataType === "all" ? thedata : thedata.filter((hd)=>hd.category === dataType)
    dataProcess.forEach((chal)=>{
        html+=`
        <div class="challenge-item">
            <img src="${chal.photoUrl}" alt="challenge image">
            <h4>${chal.title}</h4>
            <button class="start-challenge btn-active">start challenge</button>
        </div>
        `;
    })

    challengeList.innerHTML = html;
}

courseOffersHome && loadHomeOffers();
myLearnings && myLearningRender();
challengeList && challengeFunction();

// event menu tools
const categoryOptions = document.querySelector("#category");
const search = document.querySelector(".search").children[0];

const searchResults = function(valueSearch,page,dataType='all'){
    
    const dataProcess = dataType === "all" ? page : page.filter((hd)=>hd.category === dataType)
    const data = dataProcess.filter(dp=>dp.title.toUpperCase().includes(valueSearch.toUpperCase()));

    if(page === homeData) courseOffersHome && loadHomeOffers(categoryOptions.value,data);
    else if(page === myLearning) myLearnings && myLearningRender(categoryOptions.value,data);
    else if(page === challenge) challengeList && challengeFunction(categoryOptions.value,data);
    
}

categoryOptions.addEventListener('change',function(){
    search.value = '';
    courseOffersHome && loadHomeOffers(this.value);
    myLearnings && myLearningRender(this.value);
    challengeList && challengeFunction(this.value);
})

search.addEventListener('keyup',function(){
    const valueSearch = search.value;
    const thePage = window.location.href.split('/')[4].split('.')[0];
    if(thePage === 'home') searchResults(valueSearch,homeData);
    else if(thePage === 'learning') searchResults(valueSearch,myLearning);
    else if(thePage === 'challenge') searchResults(valueSearch,challenge);
})