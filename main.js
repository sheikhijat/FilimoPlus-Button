// ==UserScript==
// @name             FilimoPlus Button
// @description      When on Filimo click this small button to open the movie/series in FilimoPlus (running locally)
// @namespace        sheikhijat
// @author           sheikhijat
// @copyright        2020, sheikhijat (https://github.com/sheikhijat/FilimoPlus-Button)
// @license          MIT
// @include          https://www.filimo.com/m/*
// @version          0.1
// @grant            none
// ==/UserScript==

(function() {
    'use strict';

    getMovieId();

    if (movieId) {

        let div = document.createElement('div');
        div.innerHTML = '<a id="filimoPlusButton">FilimoPlus</a>';

        div.style.display = "inline-block";
        div.style.position = "fixed";
        div.style.left = "1%";
        div.style.top = "15%";
        div.style.zIndex = '9999';

        document.body.append(div);

        let icon = document.getElementById('filimoPlusButton');

        icon.style.background = 'orange';
        icon.style.color = 'black';
        icon.style.fontWeight = '800';
        icon.style.padding = '5px';
        icon.style.border = 'solid 2px black';
        icon.style.borderRadius = '7px';
        icon.style.textDecoration = 'none';
        icon.style.fontSize = '1.5em';

        icon.href = 'http://localhost:1399/#/movie/' + movieId;
        icon.target = '_blank';
    }

    var movieId;

    function getMovieId() {
        let x = window.location.pathname;
        let arr = x.slice(-5);
        movieId = arr;
    }

})();