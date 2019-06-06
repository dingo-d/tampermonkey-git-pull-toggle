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

  var $ = window.jQuery;

  var element = $('.float-right.pr-review-tools');

  if (typeof element !== 'undefined') {
    element.prepend('<a href="#" style="margin-left:20px;" class="btn btn-sm tooltipped tooltipped-nw js-collapse-all" rel="nofollow" aria-label="Collapse all files">Collapse all files</a><a href="#" style="margin-left:20px;" class="btn btn-sm tooltipped tooltipped-nw js-expand-all" rel="nofollow" aria-label="Expand all files">Expand all files</a>');
  }

  $('.js-collapse-all').on('click', (event) => {
    event.preventDefault();

    $('.js-file.open .js-details-target').each(function() {
      $(this).click();
    });
  });

  $('.js-expand-all').on('click', (event) => {
    event.preventDefault();

    $('.js-file:not(.open) .js-details-target').each(function() {
      $(this).click();
    });
  });
})();
