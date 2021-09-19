
window.onload = function () {

    // disabling context menu for images and dragging images
    let img = document.getElementsByTagName('img');

    for(let i in img)
    {
      img[i].oncontextmenu = function() { return false; }
      img[i].ondragstart = function() { return false; };
    }

    // preloader
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);

    // parallax on move
    const frontImg = document.querySelector("#front-image");
    if (frontImg) {
        document.addEventListener("mousemove", parallax);
        function parallax(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
            let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
            let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
            let x = `${_depth3}, ${_depth2}, ${_depth1}`;
            // console.log(x);
            frontImg.style.backgroundPosition = x;
        }
    }
}



// var bLazy = new Blazy({
//     offset: -100,
//     breakpoints: [{
//         width: 420,
//         src: 'data-src-small'
//     }],
//     success: function(element) {
//         setTimeout(function() {
//             // We want to remove the loader gif now.
//             // First we find the parent container
//             // then we remove the "loading" class which holds the loader image
//             var parent = element.parentNode;
//             parent.className = parent.className.replace(/\bloading\b/, '');
//         }, 200);
//     }
// });
