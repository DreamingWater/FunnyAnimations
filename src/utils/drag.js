// src/directives/drag.js
export default {
    mounted(el) {

        el.onmousedown = function (e) {
            el.style.position = 'absolute';
            const disX = e.clientX - el.offsetLeft;
            const disY = e.clientY - el.offsetTop;

            document.onmousemove = function (e) {
                el.style.left = e.clientX - disX + 'px';
                el.style.top = e.clientY - disY + 'px';
            };

            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    },
};