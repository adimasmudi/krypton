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


function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
}

// appear when hover
const btns = [...document.querySelector('.nav-group').children];


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

    // rating process
    const starsTotal = 5;
    


    dataProcess.forEach(function(data){

        const starPercentage = (data.rating / starsTotal) * 100;

        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        offersList+=`
        <div class="course-item scale-hover">
            <img src="${data.photoUrl}" alt="course image">
            <h4 class="course-title">${data.title.length > 29 ? data.title.substring(0,28) + '..' : data.title}</h4>
            <span class="course-price">${data.price}</span>
            <div class="ratings">
                <div class="stars-outer">
                    <div class="stars-inner" style="width:${starPercentageRounded}"></div>
                </div>
                <p class="rating">${data.rating}</p>
            </div>
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
        <div class="learning-list scale-hover">
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
        <div class="challenge-item scale-hover">
            <img src="${chal.photoUrl}" alt="challenge image">
            <h4>${chal.title}</h4>
            <button class="start-challenge btn-active">start challenge</button>
        </div>
        `;
    })

    challengeList.innerHTML = html;
}

const forumList = document.querySelector(".forum-list");

const renderForumList = function(dataType="all", thedata = homeData.forum){
    let html = ``;
    let colorStatus = ``;
    
    const dataProcess = dataType === "all" ? thedata : thedata.filter((hd)=>hd.category === dataType)
    dataProcess.length === 0 && renderError(`there is not discussion about "${dataType}"`)
    dataProcess.forEach(function(forum){
        colorStatus = forum.status === 'solved' ? 'green' : 'red';
        html+=`
            <div class="forum-item scale-hover">
              <div class="left-side">
                <h3>${forum.title.length > 60 ? forum.title.substring(0,60) + '..' : forum.title}</h3>
                <span style="background-color:${colorStatus}">${forum.status}</span>
                <p class="owner">by : ${forum.author}</p>
                <p class="time">asked ${forum.time.split(' ').slice(0,3).join(' ')} at ${forum.time.split(' ')[3]}</p>
              </div>
              <div class="right-side">
                <h5>keywords</h5>
                <div class="keywords">
                    ${forum.tag.map((thetag)=>`<span>#${thetag}</span>`).join(' ')}
                </div>
              </div>
            </div>
        `;
    })

    forumList.innerHTML = html;
}

courseOffersHome && loadHomeOffers();
myLearnings && myLearningRender();
challengeList && challengeFunction();
forumList && renderForumList();

// event menu tools
const categoryOptions = document.querySelector("#category");
const search = document.querySelector(".search").children[0];

const searchResults = function(valueSearch,page,dataType='all'){
    
    const dataProcess = dataType === "all" ? page : page.filter((hd)=>hd.category === dataType)
    const data = dataProcess.filter(dp=>dp.title.toUpperCase().includes(valueSearch.toUpperCase()));

    if(page === homeData.homeData) courseOffersHome && loadHomeOffers(categoryOptions.value,data);
    else if(page === homeData.myLearning) myLearnings && myLearningRender(categoryOptions.value,data);
    else if(page === homeData.challenge) challengeList && challengeFunction(categoryOptions.value,data);
    else if(page === homeData.forum) forumList && renderForumList(categoryOptions.value,data);
    
    data.length === 0 && renderError(`Sorry, your search for "${valueSearch}" is not available`)
    
    
}

const filterBy = document.querySelector("#filter-by");


categoryOptions.addEventListener('change',function(){
    search.value = '';
    errorContainer.innerHTML = '';
    filterBy.value = 'no filter';
    courseOffersHome && loadHomeOffers(this.value);
    myLearnings && myLearningRender(this.value);
    challengeList && challengeFunction(this.value);
    forumList && renderForumList(this.value)
    
})

search.addEventListener('keyup',function(){
    const valueSearch = search.value;
    errorContainer.innerHTML = '';
    const thePage = window.location.href.split('/').pop().split('.')[0];
    if(thePage === 'home') searchResults(valueSearch,homeData.homeData);
    else if(thePage === 'learning') searchResults(valueSearch,homeData.myLearning);
    else if(thePage === 'challenge') searchResults(valueSearch,homeData.challenge);
    else if(thePage === 'forum') searchResults(valueSearch,homeData.forum)
})


// console.log(new Date('October 15, 1996 05:35:32').getTime())
// console.log(new Date('October 19, 2002 05:35:32').getTime())

// console.log(new Date(homeData.forum[2].date))
// homeData.forum.forEach(function(forData){
//     console.log(new Date(forData.time).getTime())
// })



const renderByStatus = function(dataType="all", thedata = homeData.forum, statusFilter){
    let html = ``;
    let colorStatus = ``;
    
    const dataProcess = dataType === "all" ? thedata.filter(d=>statusFilter.includes(d)) : thedata.filter((hd)=>hd.category === dataType && statusFilter.includes(hd))
    dataProcess.length === 0 && renderError(`there is not discussion about "${dataType}"`)
    dataProcess.forEach(function(forum){
        colorStatus = forum.status === 'solved' ? 'green' : 'red';
        html+=`
            <div class="forum-item scale-hover">
              <div class="left-side">
                <h3>${forum.title.length > 60 ? forum.title.substring(0,60) + '..' : forum.title}</h3>
                <span style="background-color:${colorStatus}">${forum.status}</span>
                <p class="owner">by : ${forum.author}</p>
                <p class="time">asked ${forum.time.split(' ').slice(0,3).join(' ')} at ${forum.time.split(' ')[3]}</p>
              </div>
              <div class="right-side">
                <h5>keywords</h5>
                <div class="keywords">
                    ${forum.tag.map((thetag)=>`<span>#${thetag}</span>`).join(' ')}
                </div>
              </div>
            </div>
        `;
    });

    forumList.innerHTML = html;
}

const renderForumSort = function(param){
    let html = ``;
    let colorStatus = ``;
    param.forEach(function(par){
        const toRender = homeData.forum.filter(dat=>new Date(dat.time).getTime() === par)[0]
        colorStatus = toRender.status === 'solved' ? 'green' : 'red';
        
        html+=`
        <div class="forum-item scale-hover">
            <div class="left-side">
            <h3>${toRender.title.length > 60 ? toRender.title.substring(0,60) + '..' : toRender.title}</h3>
            <span style="background-color:${colorStatus}">${toRender.status}</span>
            <p class="owner">by : ${toRender.author}</p>
            <p class="time">asked ${toRender.time.split(' ').slice(0,3).join(' ')} at ${toRender.time.split(' ')[3]}</p>
            </div>
            <div class="right-side">
            <h5>keywords</h5>
            <div class="keywords">
                ${toRender.tag.map((thetag)=>`<span>#${thetag}</span>`).join(' ')}
            </div>
            </div>
        </div>
        `;
    })

    forumList.innerHTML = html;
}



const filterFunction = function(param){
    const category = document.querySelector("#category");
    
    const arrTime = [...homeData.forum.map((fr)=>new Date(fr.time).getTime())]
    const statusFilter = homeData.forum.filter(dat=>dat.status === param)

    if(param === 'oldest') renderForumSort(arrTime.sort(function(a,b) {return a-b}));
    if(param === 'newest') renderForumSort(arrTime.sort(function(a,b) {return b-a}));
    if(param === 'solved' || param === 'unsolved') renderByStatus(category.value,homeData.forum,statusFilter);
    
    
}

filterBy && filterBy.addEventListener('change',function(){
    filterFunction(this.value)
})