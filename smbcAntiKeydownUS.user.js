// ==UserScript==
// @name         SMBC anti key controls
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  stop keydown events from interfering with entering comments
// @author       Will and Zach Weinersmith
// @match        https://www.smbc-comics.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=smbc-comics.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if ( evt.target.nodeName == 'INPUT' ) return;
        if ( document.activeElement.tagName == 'HYVOR-TALK-COMMENTS' || evt.altKey || evt.shiftKey || evt.ctrlKey || evt.metaKey){
            return;
        }else{
            switch (evt.keyCode) {
                case 37:
                    leftArrowPressed();
                    break;
                case 89:
                    leftArrowPressed();
                    break;
                case 90:
                    leftArrowPressed();
                    break;
                case 39:
                    rightArrowPressed();
                    break;
                case 67:
                    rightArrowPressed();
                    break;
                case 86:
                    toggleBlock('aftercomic');
                    break;
                case 88:
                    randomKeyPressed();
                    break;
            }
        }
    };

})();
