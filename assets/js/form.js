const bodyloginSignup = document.querySelector('.body-login-signup');
const preloading = document.querySelector(".preloading");

const containerForm = document.querySelector('.container-form');
const toSignUpBtn = document.querySelector('.to-signup-btn');
const toLoginBtn = document.querySelector('.to-login-btn');
const loginForm = document.querySelector('.login-form');
const transitionForm = document.querySelector('.transition-form');
const signupForm = document.querySelector('.sign-up-form');

// form
const signUpPage1 = document.querySelector('.signup-page-1');
const signUpPage2 = document.querySelector('.signup-page-2');
const signUpPage3 = document.querySelector('.signup-page-3');
const signUpPage4 = document.querySelector('.signup-page-4');

// buttons
const nextPage1 = document.querySelector(".to-next-page-1");
const nextPage2 = document.querySelector(".to-next-page-2");
const nextPage3 = document.querySelector(".to-next-page-3");

const prevPage2 = document.querySelector(".to-prev-page-2");
const prevPage3 = document.querySelector(".to-prev-page-3");
const prevPage4 = document.querySelector(".to-prev-page-4");

///////////////////////////////
/////////  mobile  ///////////

const arrowTop = document.querySelector('.arrow-top');
const arrow = document.querySelector('.arrow');

const containerFormMobile = document.querySelector('.container-form-mobile');
const loginFormMobile = document.querySelector('.login-form-mobile');

// form
const signUpPage1Mobile = document.querySelector('.signup-page-1-mobile');
const signUpPage2Mobile = document.querySelector('.signup-page-2-mobile');
const signUpPage3Mobile = document.querySelector('.signup-page-3-mobile');
const signUpPage4Mobile = document.querySelector('.signup-page-4-mobile');

// buttons
const nextPage1Mobile = document.querySelector(".to-next-page-1-mobile");
const nextPage2Mobile = document.querySelector(".to-next-page-2-mobile");
const nextPage3Mobile = document.querySelector(".to-next-page-3-mobile");

const prevPage2Mobile = document.querySelector(".to-prev-page-2-mobile");
const prevPage3Mobile = document.querySelector(".to-prev-page-3-mobile");
const prevPage4Mobile = document.querySelector(".to-prev-page-4-mobile");



/////////////////////////////////////////////

if(window.screen.width < 670){
    containerForm.style.visibility = 'hidden';
    containerForm.style.position = 'absolute';
    containerFormMobile.classList.remove('hidden');
}

toSignUpBtn.addEventListener('click',function(){
    transitionForm.style.right = '105%';
    transitionForm.style.transition = '1.5s';
    setTimeout(function(){
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    },600)

    
});

toLoginBtn.addEventListener('click',function(){
    transitionForm.style.right = '-70%';
    transitionForm.style.transition = '1.5s';
    setTimeout(function(){
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    },600)
})

nextPage1.addEventListener('click',function(){
    signUpPage1.style.left = '-1200px';
    signUpPage2.style.left = '0px';
    
})

nextPage2.addEventListener('click',function(){
    signUpPage2.style.left = '-1200px';
    signUpPage3.style.left = '0px';
})

nextPage3.addEventListener('click',function(){
    signUpPage3.style.left = '-1200px';
    signUpPage4.style.left = '0px';
})

prevPage2.addEventListener('click',function(){
    signUpPage1.style.left = '0px';
    signUpPage2.style.left = '1200px';
})

prevPage3.addEventListener('click',function(){
    signUpPage2.style.left = '0px';
    signUpPage3.style.left = '1200px';
})

prevPage4.addEventListener('click',function(){
    signUpPage3.style.left = '0px';
    signUpPage4.style.left = '1200px';
})

window.addEventListener('resize',function(){
    if(window.screen.width < 670){
        
        preloading.classList.remove('hidden');
        containerForm.style.visibility = 'hidden';
        containerForm.style.position = 'absolute';
        containerFormMobile.classList.remove('hidden');
        setTimeout(function(){
            preloading.classList.add('hidden');
        },800);
        
    }else{
        containerForm.style.visibility = 'visible';
        containerForm.style.position = 'relative';
        containerFormMobile.classList.add('hidden');

    }

    if(window.screen.width >= 600){
        loginFormMobile.style.marginTop = '-140vh';
    }
    else if(window.screen.width >= 400 && window.screen.width < 600){
        loginFormMobile.style.marginTop = '-115vh';
    }else if(window.screen.width >= 375 && window.screen.width < 400){
        loginFormMobile.style.marginTop = '-120vh';
    }else if(window.screen.width >= 350 && window.screen.width < 375){
        loginFormMobile.style.marginTop = '-130vh';
    }else if(window.screen.width >= 280 && window.screen.width < 350){
        loginFormMobile.style.marginTop = '-270%';
    }else if(window.screen.width < 280){
        loginFormMobile.style.marginTop = '-400%';
    }
})

// mobile event

arrowTop.addEventListener('click',function(){
    if(window.screen.width >= 600){
        loginFormMobile.style.marginTop = '-140vh';
    }
    else if(window.screen.width >= 400 && window.screen.width < 600){
        loginFormMobile.style.marginTop = '-115vh';
    }else if(window.screen.width >= 375 && window.screen.width < 400){
        loginFormMobile.style.marginTop = '-120vh';
    }else if(window.screen.width >= 350 && window.screen.width < 375){
        loginFormMobile.style.marginTop = '-130vh';
    }else if(window.screen.width >= 280 && window.screen.width < 350){
        loginFormMobile.style.marginTop = '-270%';
    }else if(window.screen.width < 280){
        loginFormMobile.style.marginTop = '-400%';
    }
    // loginFormMobile.style.marginTop = '-280%';
    // loginFormMobile.style.marginTop = '-130vh';
    
})

arrow.addEventListener('click',function(){
    loginFormMobile.style.marginTop = '0%';
})

nextPage1Mobile.addEventListener('click',function(){
    signUpPage1Mobile.style.left = '-800px';
    signUpPage2Mobile.style.left = '10px';
})

nextPage2Mobile.addEventListener('click',function(){
    signUpPage2Mobile.style.left = '-800px';
    signUpPage3Mobile.style.left = '10px';
})

prevPage2Mobile.addEventListener('click',function(){
    signUpPage1Mobile.style.left = '10px';
    signUpPage2Mobile.style.left = '800px';
    
})

nextPage3Mobile.addEventListener('click',function(){
    signUpPage3Mobile.style.left = '-800px';
    signUpPage4Mobile.style.left = '10px';
})

prevPage3Mobile.addEventListener('click',function(){
    signUpPage2Mobile.style.left = '10px';
    signUpPage3Mobile.style.left = '800px';
})

prevPage4Mobile.addEventListener('click',function(){
    signUpPage3Mobile.style.left = '10px';
    signUpPage4Mobile.style.left = '800px';
})