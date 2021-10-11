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

const renderBlogList = function(par=blog.data){
    let html = ``;
    par.forEach(function(dat){
        html+=`
        <div class="article-card">
            <img src="${dat.imageUrl}" alt="article">
            <h6>${dat.title}</h6>
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
            
            const articleSelected = articlecard.children[1].innerHTML;

            const articleSelectedDetail = blog.data.filter((data) => data.title === articleSelected);
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
    const data = blog.data.filter(bd=>bd.title.toUpperCase().includes(this.value.toUpperCase()));
    renderBlogList(data.filter(d=>btnArticleActive !== 'all' ? d.type === btnArticleActive:d));
})
