// ==UserScript==
// @name         D2L Beautification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes D2L less ugly
// @author       Aaron Groeneveld
// @match        https://d2l.ucalgary.ca/*
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    $( ".d2l-navigation-s-header" ).css( "background-color", "#e30c00" );
    $( ".d2l-icon-0" ).css( "color", "#ffcc00" );
    $( ".d2l-navigation-s-personal-menu-text" ).css( "color", "white" );
    $( ".d2l-navigation-s-link" ).first().css( "color", "#ffcc00" );
})();
