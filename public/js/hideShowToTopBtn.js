function testScroll(){
    if(window.pageYOffset > 500){
        document.getElementById("arrow").classList.add('is-shown');
    } else {
        document.getElementById("arrow").classList.remove('is-shown');
    };
}
window.onscroll = testScroll; 
