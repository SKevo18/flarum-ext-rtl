module.exports=function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=3)}([function(e,o){e.exports=flarum.core.compat.app},function(e,o){e.exports=flarum.core.compat["components/DiscussionListPane"]},function(e,o){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,o,t){"use strict";t.r(o);var n=t(0),r=t.n(n),i=t(1),u=t.n(i),c=t(2),a=t.n(c),s=function(e){var o=95*document.body.offsetWidth/100;e.pageX>=o&&r.a.pane.show()};r.a.initializers.add("irmmr-flarum-rtl-ext",(function(){u.a.prototype.onremove=function(e){r.a.cache.discussionListPaneScrollTop=$(e.dom).scrollTop(),$(document).off("mousemove",s)},u.a.prototype.oncreate=function(e){var o=$(e.dom),t=r.a.pane;if(o.hover(t.show.bind(t),t.onmouseleave.bind(t)),$(document).on("mousemove",s),r.a.previous.matches(a.a)){var n=r.a.cache.discussionListPaneScrollTop||0;o.scrollTop(n)}else{var i=o.find(".DiscussionListItem.active");if(i.length){var u=o.offset().top,c=u+o.outerHeight(),f=i.offset().top,l=f+i.outerHeight();(f<u||l>c)&&o.scrollTop(o.scrollTop()-u+f)}}}}))}]);
//# sourceMappingURL=forum.js.map