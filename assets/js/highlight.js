/*
Run highlight.js on every code tag.
https://github.com/highlightjs/highlight.js

To only use code blocks, change "code" to "pre code".
*/
$(document).ready(function() {
  $("code").each(function() {
    hljs.highlightBlock(this);
  });
});
