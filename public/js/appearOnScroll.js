let isScrolling = false;

function showToTopBtnOnScroll(){
    (window.pageYOffset > 100) 
        ?
        document.getElementById("arrow").classList.add('is-shown')
        :
        document.getElementById("arrow").classList.remove('is-shown');
}
window.addEventListener("scroll", showToTopBtnOnScroll); 

function throttleScroll(e) {
    if (isScrolling === false) {
    window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
    });
    }
    isScrolling = true;
}

window.addEventListener("scroll", throttleScroll, false);

let listItems = document.querySelectorAll(".arisen-item");

function scrolling(e) {
    for (let i = 0; i < listItems.length; i++) {
        
        let listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
        
        
        listItem.classList.add("appear");
    } else {
        listItem.classList.remove("appear");
        }
    }
}

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

document.addEventListener("DOMContentLoaded", scrolling, false);
