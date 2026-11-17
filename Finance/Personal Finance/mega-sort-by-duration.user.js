// ==UserScript==
// @name         MEGA - always sort by Duration (longest first)
// @namespace    http://tampermonkey.net/
// @version      2026-10-25
// @description  Sorts MEGA folder views by video duration, largest to smallest, on load and every time a folder is opened.
// @author       
// @match        https://mega.nz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mega.nz
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // MEGA's internal key for the "Duration" sort column; -1 = arrow down (largest -> smallest), 1 = arrow up.
    const SORT_BY = 'playtime';
    const SORT_DIR = -1;

    function isSorted() {
        const M = window.M;
        return !!(M && M.sortmode && M.sortmode.n === SORT_BY && M.sortmode.d === SORT_DIR);
    }

    function applySort() {
        const M = window.M;
        if (!M || typeof M.doSort !== 'function' || !M.sortRules || !M.sortRules[SORT_BY]) {
            return;
        }
        // Only act on real folder views (skips albums, chat, settings, etc.).
        const node = M.d && M.d[M.currentdirid];
        if (!node || !node.t || isSorted()) {
            return;
        }
        // Same sequence MEGA runs when the sort-direction button is clicked.
        M.doSort(SORT_BY, SORT_DIR);
        M.previousdirid = M.currentdirid;
        M.renderMain();
    }

    // MEGA loads its bundles asynchronously, so wait until its event bus exists.
    const timer = setInterval(() => {
        const bus = window.mBroadcaster;
        if (!bus || typeof bus.addListener !== 'function') {
            return;
        }
        clearInterval(timer);

        // Fired after a folder has finished opening and rendering (initial load, navigation, view switch).
        bus.addListener('mega:openfolder', applySort);

        // The first folder may already be open if this script ran late.
        if (window.loadfm && window.loadfm.loaded && window.M && window.M.currentdirid) {
            applySort();
        }
    }, 250);
})();
