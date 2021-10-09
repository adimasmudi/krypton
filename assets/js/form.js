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

const containerFormMobile = document.querySelector('.card-container');
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
    containerFormMobile.style.visibility = 'visible';
    containerFormMobile.style.position = 'relative';
}else{
    containerFormMobile.style.visibility = 'hidden';
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

// step by step form
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");
const progressActive = document.querySelectorAll(".progress-step-active");

nextPage1.addEventListener('click',function(){
    signUpPage1.style.left = '-1200px';
    signUpPage2.style.left = '0px';
    progressSteps[1].classList.add('progress-step-active');
    progress.style.width = `${(1/3)*100}%`;
    
})

nextPage2.addEventListener('click',function(){
    signUpPage2.style.left = '-1200px';
    signUpPage3.style.left = '0px';
    progressSteps[2].classList.add('progress-step-active');
    progress.style.width = `${(2/3)*100}%`;
})

nextPage3.addEventListener('click',function(){
    signUpPage3.style.left = '-1200px';
    signUpPage4.style.left = '0px';
    progressSteps[3].classList.add('progress-step-active');
    progress.style.width = `${(3/3)*100}%`;
})

prevPage2.addEventListener('click',function(){
    signUpPage1.style.left = '0px';
    signUpPage2.style.left = '1200px';
    progressSteps[1].classList.remove('progress-step-active');
    progress.style.width = `${0}%`;
})

prevPage3.addEventListener('click',function(){
    signUpPage2.style.left = '0px';
    signUpPage3.style.left = '1200px';
    progressSteps[2].classList.remove('progress-step-active');
    progress.style.width = `${(1/3)*100}%`;
})

prevPage4.addEventListener('click',function(){
    signUpPage3.style.left = '0px';
    signUpPage4.style.left = '1200px';
    progressSteps[3].classList.remove('progress-step-active');
    progress.style.width = `${(2/3)*100}%`;
})

window.addEventListener('resize',function(){
    if(window.screen.width < 670){
        
        preloading.classList.remove('hidden');
        containerForm.style.visibility = 'hidden';
        containerForm.style.position = 'absolute';
        containerFormMobile.style.visibility = 'visible';
        containerFormMobile.style.position = 'relative';
        setTimeout(function(){
            preloading.classList.add('hidden');
        },800);
        
    }else{
        containerForm.style.visibility = 'visible';
        containerForm.style.position = 'relative';
        containerFormMobile.style.visibility = 'hidden';
        

    }
});

// step by step form
const progressMobile = document.getElementById("progress-mobile");
const progressStepsMobile = document.querySelectorAll(".progress-step-mobile");
const progressActiveMobile = document.querySelectorAll(".progress-step-active-mobile");

nextPage1Mobile.addEventListener('click',function(){
    signUpPage1Mobile.style.left = '-800px';
    signUpPage2Mobile.style.left = '10px';
    progressStepsMobile[1].classList.add('progress-step-active-mobile');
    progressMobile.style.width = `${(1/3)*100}%`;
})

nextPage2Mobile.addEventListener('click',function(){
    signUpPage2Mobile.style.left = '-800px';
    signUpPage3Mobile.style.left = '10px';
    progressStepsMobile[2].classList.add('progress-step-active-mobile');
    progressMobile.style.width = `${(2/3)*100}%`;
})

prevPage2Mobile.addEventListener('click',function(){
    signUpPage1Mobile.style.left = '10px';
    signUpPage2Mobile.style.left = '800px';
    progressStepsMobile[1].classList.remove('progress-step-active-mobile');
    progressMobile.style.width = `${(0)*100}%`;
})

nextPage3Mobile.addEventListener('click',function(){
    signUpPage3Mobile.style.left = '-800px';
    signUpPage4Mobile.style.left = '10px';
    progressStepsMobile[3].classList.add('progress-step-active-mobile');
    progressMobile.style.width = `${(3/3)*100}%`;
})

prevPage3Mobile.addEventListener('click',function(){
    signUpPage2Mobile.style.left = '10px';
    signUpPage3Mobile.style.left = '800px';
    progressMobile.style.width = `${(1/3)*100}%`;
    progressStepsMobile[2].classList.remove('progress-step-active-mobile');
})

prevPage4Mobile.addEventListener('click',function(){
    signUpPage3Mobile.style.left = '10px';
    signUpPage4Mobile.style.left = '800px';
    progressMobile.style.width = `${(2/3)*100}%`;
    progressStepsMobile[3].classList.remove('progress-step-active-mobile');
})

document.addEventListener('DOMContentLoaded',  (event) => {

    const rotateCard = () => {
      const cardContainer = document.querySelector('.card-container') 
      cardContainer.classList.toggle('rotate')
    }
    
    const btnSignup = document.querySelector('#btn-signup') ,
          btnLogin = document.querySelector('#btn-login')
    
    btnSignup.addEventListener('click', rotateCard)
    btnLogin.addEventListener('click', rotateCard)
    

    })