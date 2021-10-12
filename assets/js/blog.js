import * as blog from './data/blogData.js';

const menuArticle = document.querySelector(".menu-article");
const innerArticleList = document.querySelector(".inner-article-list");
const buttonsCategory = document.querySelectorAll('.btn-category');

const blogItems = document.querySelector(".blog-items");
const imgHeader = document.querySelector(".img-header");
const articleAuthorName = document.querySelector(".article-author-name");
const articleTime = document.querySelector(".article-time");
const articleTitle = document.querySelector(".article-title");

const backToArticleList = document.querySelector(".back-to-article-list");

// search articles
const searchArticles = document.querySelector(".search-article");

let articleCards;
let btnArticleActive = 'all';

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

const renderBlogList = function(par=blog.data){
    let html = ``;

    
    par.forEach(function(dat){
        html+=`
        <div class="article-card">
            <img src="${dat.imageUrl}" alt="article">
            <h6>${dat.title.length > 30 ? dat.title.substring(0,30) + '..' : dat.title}</h6>
            <div class="d-flex justify-content-between">
                <span>${dat.author}</span>
                <span>${dat.timeUpload}</span>
            </div>
        </div>
        `;
    
    })

    innerArticleList.innerHTML = html;
}

const loadSpecific = function(dataCompare){
    const tutorial = blog.data.filter((dat) => dat.type === dataCompare);
    renderBlogList(tutorial)
}

const openArticle = function(){
    articleCards.forEach(function(articlecard){
        articlecard.addEventListener('click',function(){
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            
            const articleSelected = articlecard.children[0].src.split('/').slice(-4).join('/');
            

            const articleSelectedDetail = blog.data.filter((data) => data.imageUrl === articleSelected);
            menuArticle.classList.add('hidden');
            
            imgHeader.style.background = `url(assets/img/blog/${articleSelectedDetail[0].imageUrl.split('/')[3]})`
            articleAuthorName.innerHTML = articleSelectedDetail[0].author;
            articleTime.innerHTML = articleSelectedDetail[0].timeUpload;
            articleTitle.innerHTML = `<h1 class="text-center article-title">${articleSelectedDetail[0].title}</h1>`;

            blogItems.classList.remove('hidden');

        })
    })
}

const closeArticle = function(){
    backToArticleList.addEventListener('click',function(){
        blogItems.classList.add('hidden');
        menuArticle.classList.remove("hidden");
    })
}

window.addEventListener('load',function(){
    renderBlogList();
    articleCards = document.querySelectorAll(".article-card");

    openArticle();
    closeArticle();
})


buttonsCategory.forEach(function(btn){
    btn.addEventListener('click',function(){
        buttonsCategory.forEach((bt) => {
            bt.classList.remove('btn-active');
            !bt.classList.contains('btn-outline-active') && bt.classList.add('btn-outline-active');
        })
        searchArticles.value = '';
        btnArticleActive = btn.dataset.category;
        btn.dataset.category !== 'all' ? loadSpecific(btn.dataset.category) : renderBlogList();
        btn.classList.remove('btn-outline-active');
        btn.classList.add('btn-active');

        articleCards = document.querySelectorAll(".article-card");

        openArticle();
        closeArticle();
    })
})


searchArticles.addEventListener('keyup',function(){
    errorContainer.innerHTML = '';
    const data = blog.data.filter(bd=>bd.title.toUpperCase().includes(this.value.toUpperCase()));
    data.length === 0 && renderError(`there is not any blog about "${this.value}"`)
    renderBlogList(data.filter(d=>btnArticleActive !== 'all' ? d.type === btnArticleActive:d));
})
