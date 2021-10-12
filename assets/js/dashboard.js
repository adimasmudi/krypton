import * as homeData from './data/homeData.js';
// {homeData, myLearning, challenge}

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");


const homeSection = document.querySelector(".home-section");
const dashboardMainContent = document.querySelector(".dashboard-main-content");
const menuTools = document.querySelector(".menu-tools");
const courseOffers = document.querySelector(".course-offers");

const errorContainer = document.querySelector(".error-message");

const renderError = function(message){
    errorContainer.innerHTML = `
    <span class="message">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
        </svg>
        ${message}
    </span>
    `;
}

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

const loadHomeOffers = function(dataType="all",thedata = homeData.homeData){
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

const myLearningRender = function( dataType="all",thedata = homeData.myLearning){
    let html = ``;
    const dataProcess = dataType === "all" ? thedata : thedata.filter((hd)=>hd.category === dataType)
    dataProcess.length === 0 && renderError(`Sorry, you've not purchased course about "${dataType}" yet`)
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

const challengeFunction = function( dataType="all", thedata = homeData.challenge){
    let html = ``;
    const dataProcess = dataType === "all" ? thedata : thedata.filter((hd)=>hd.category === dataType)
    dataProcess.length === 0 && renderError(`the challenge about "${dataType}" is not available`)
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

    if(page === homeData.homeData) courseOffersHome && loadHomeOffers(categoryOptions.value,data);
    else if(page === homeData.myLearning) myLearnings && myLearningRender(categoryOptions.value,data);
    else if(page === homeData.challenge) challengeList && challengeFunction(categoryOptions.value,data);
    
    data.length === 0 && renderError(`Sorry, your search for "${valueSearch}" is not available`)
    
    
}



categoryOptions.addEventListener('change',function(){
    search.value = '';
    errorContainer.innerHTML = '';
    courseOffersHome && loadHomeOffers(this.value);
    myLearnings && myLearningRender(this.value);
    challengeList && challengeFunction(this.value);
})

search.addEventListener('keyup',function(){
    const valueSearch = search.value;
    errorContainer.innerHTML = '';
    const thePage = window.location.href.split('/').pop().split('.')[0];
    if(thePage === 'home') searchResults(valueSearch,homeData.homeData);
    else if(thePage === 'learning') searchResults(valueSearch,homeData.myLearning);
    else if(thePage === 'challenge') searchResults(valueSearch,homeData.challenge);
})