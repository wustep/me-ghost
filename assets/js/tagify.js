/*
Tagify labels with Bulma styles!

Turn "[##TagName]" into span.tag with with #TagName is-primary-label
Turn "[##!TagName]" with the same treatment with anchor link
Turn "[#TagName]" into span.tag with #TagName is-secondary-label
Turn "[##TagName or #TagName]: Description" into span with tag-description
Turn "<p>[#TagName] ... [#TagName]</p>" into p with tag-collection
 */
$(document).ready(function() {
  var collectionRegex = new RegExp(/<p>[ \t]*\[#(.*?)\][ \t]*<\/p>/, "g");
  var collectionReplace = '<p class="label-collection">[#$1]</p>';

  var instructionRegex = new RegExp(/\[#(.*?)\]: (.*?)(<br>|<\/p>)/, "g");
  var instructionReplace = '<span class="label-description">[#$1]$2</span>$3';

  var primaryWithLinkRegex = new RegExp(/\[##!(.*?)\]/, "g");
  function primaryWithLinkReplace(match, tag) {
    return (
      '<a href="#' +
      /*
        Convert tag name its to anchor link id:
        This doesn't catch all cases, but the full algorithm is pretty overkill.
        See: https://github.com/Galadirith/markdown-it-lazy-headers/blob/master/index.js
      */
      tag.toLowerCase().replace(new RegExp(/([ \t]+)/, "g"), "-") +
      '"><span class="tag is-primary-label">#' +
      tag +
      "</span></a>"
    );
  }

  var primaryRegex = new RegExp(/\[##(.*?)\]/, "g");
  var primaryReplace = '<span class="tag is-primary-label">#$1</span>';

  var secondaryRegex = new RegExp(/\[#(.*?)\]/, "g");
  var secondaryReplace = '<span class="tag is-secondary-label">#$1</span>';

  $(".post-content, .page-content").html(function(i, html) {
    return html
      .replace(collectionRegex, collectionReplace)
      .replace(instructionRegex, instructionReplace)
      .replace(primaryWithLinkRegex, primaryWithLinkReplace)
      .replace(primaryRegex, primaryReplace)
      .replace(secondaryRegex, secondaryReplace);
  });
});
