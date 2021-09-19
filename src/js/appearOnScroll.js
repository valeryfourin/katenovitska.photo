let isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling === false) {
    window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
    });
    }
    isScrolling = true;
    console.log(1)
}

document.addEventListener("DOMContentLoaded", scrolling, false);

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

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
  }