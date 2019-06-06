// ==UserScript==
// @name         Github collapse button
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Git collapse all button
// @author       Denis Žoljom
// @include      https://github.com/*
// @match        http://*.github.com/*/pulls
// @match        http://*.github.com/*/pulls/*
// @match        https://*.github.com/*/pulls
// @match        https://*.github.com/*/pulls/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @run-at       document-idle
// ==/UserScript==

(() => {
  'use strict';

  const element = document.querySelector('.float-right.pr-review-tools');

  if (typeof element == 'undefined') {
    return;
  }

  const parser = new DOMParser();
  const domString = '<span><a href="#" style="margin-left:20px;" class="btn btn-sm tooltipped tooltipped-nw js-collapse-all" rel="nofollow" aria-label="Collapse all files">Collapse all files</a><a href="#" style="margin-left:20px;" class="btn btn-sm tooltipped tooltipped-nw js-expand-all" rel="nofollow" aria-label="Expand all files">Expand all files</a></span>';
  const html = parser.parseFromString(domString, 'text/html');

  element.insertBefore(html.body.firstChild, element.firstChild);

  const collapseButton = document.querySelector('.js-collapse-all');
  const expandButton = document.querySelector('.js-expand-all');

  collapseButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    const openedElements = document.querySelectorAll('.js-file.open .js-details-target');

    [].forEach.call(openedElements, (element) => {
      element.click();
    });
  }, false);

  expandButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    const closedElements = document.querySelectorAll('.js-file:not(.open) .js-details-target');

    [].forEach.call(closedElements, (element) => {
      element.click();
    });
  }, false);
})();
