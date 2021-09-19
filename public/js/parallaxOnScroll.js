window.onload = function () {
    let _containerHeight = 4000;
    let _width, _height, _scrollHeight;
    let _movingElement;
    let _scrollPercent = 0;
    let pre = prefix();
    let _jsPrefix  = pre.lowercase;
    if(_jsPrefix === 'moz') _jsPrefix = 'Moz'
    // let _cssPrefix = pre.css;
    let _positions = 
    {
        name: 'joey', 
        start: {
        percent: 0.2, x: -0.2, y: 0.2
        },
        end: {
        percent: 0.8, x: 0.9, y: 0.9
        }
    }
    

    resize();
    initMovingElements();

    function initMovingElements() {
    for (let i = 0; i < _positions.length; i++) {
        _positions[i].diff = {
        percent: _positions[i].end.percent - _positions[i].start.percent,
        x: _positions[i].end.x - _positions[i].start.x,
        y: _positions[i].end.y - _positions[i].start.y,
        }
        let el = document.getElementsByClassName('side-image')[0];
        _movingElement = el;
    }
    }

    function resize() {
    _width = window.innerWidth;
    _height = window.innerHeight;
    _scrollHeight = _containerHeight-_height;
    }

    function updateElements() {
    for (let i = 0; i < _movingElement.length; i++) {
        let p = _positions[i];
        if(_scrollPercent <= p.start.percent) {
        _movingElement[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.start.x*_width)+'px, '+(p.start.y*_containerHeight)+'px, 0px)';
        } else if(_scrollPercent >= p.end.percent) {
        _movingElement[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.end.x*_width)+'px, '+(p.end.y*_containerHeight)+'px, 0px)';
        } else {
        _movingElement[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.start.x*_width + (p.diff.x*(_scrollPercent-p.start.percent)/p.diff.percent*_width))+'px, '+
            (p.start.y*_containerHeight + (p.diff.y*(_scrollPercent-p.start.percent)/p.diff.percent*_containerHeight))+'px, 0px)';
        }
    }
    }



    function loop() {
    let _scrollOffset = window.pageYOffset || window.scrollTop;
    _scrollPercent = _scrollOffset/_scrollHeight || 0;
    updateElements();
    
    requestAnimationFrame(loop);
    }

    loop();

    window.addEventListener('resize', resize);

    /* prefix detection http://davidwalsh.name/vendor-prefix */

    function prefix() {
    let styles = window.getComputedStyle(document.documentElement, ''),
        pre = (Array.prototype.slice
        .call(styles)
        .join('') 
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
        )[1],
        dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
        dom: dom,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre[0].toUpperCase() + pre.substr(1)
    };
    }
}