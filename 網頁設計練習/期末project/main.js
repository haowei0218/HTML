//實現導覽列切換功能
const navbars = document.querySelectorAll('.classdemo');
const demos = document.querySelectorAll('.demo');
navbars.forEach(function (navbar) {
    navbar.addEventListener('click', function () {
        demos.forEach(function (demo) {
            demo.classList.toggle('demo');
        });
    });
});


//導覽列關閉
const CloseBtn = document.querySelectorAll('.fa-solid');
const MainNav = document.querySelectorAll('.navbar');

CloseBtn.addEventListener('click',()=>{
    MainNav.classList.toggle('close');
})

const toggler = document.getElementById('theme-toggle');
toggler.addEventListener('change',function(){
    if(this.checked){
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');
    }
})