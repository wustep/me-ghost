/*
Tagify labels with Bulma styles!

Turn "[##Tag]" into span.tag with is-primary-label
Turn "[#Tag]" into span.tag with is-secondary-label
Turn "[##Tag or #Tag]: Description" into span with tag-description
Turn "<p>[#Tag] ... [#Tag]</p>" into p with tag-collection
 */
$(document).ready(function() {
  var collectionRegex = new RegExp(/<p>[ \t]*\[#(.*?)\][ \t]*<\/p>/, "g");
  var collectionReplace = '<p class="label-collection">[#$1]</p>';

  var instructionRegex = new RegExp(/\[#(.*?)\]: (.*?)(<br>|<\/p>)/, "g");
  var instructionReplace = '<span class="label-description">[#$1]$2</span>$3';

  var primaryRegex = new RegExp(/\[##(.*?)\]/, "g");
  var primaryReplace = '<span class="tag is-primary-label">#$1</span>';

  var secondaryRegex = new RegExp(/\[#(.*?)\]/, "g");
  var secondaryReplace = '<span class="tag is-secondary-label">#$1</span>';

  $(".post-content, .page-content").html(function(i, html) {
    return html
      .replace(collectionRegex, collectionReplace)
      .replace(instructionRegex, instructionReplace)
      .replace(primaryRegex, primaryReplace)
      .replace(secondaryRegex, secondaryReplace);
  });
});
