/*
Convert external links to open in a new tab
https://stackoverflow.com/questions/7901679/jquery-add-target-blank-for-outgoing-link
*/
$(document).ready(function() {
  $("a").each(function() {
    var a = new RegExp("/" + window.location.host + "/");
    if (!a.test(this.href)) {
      $(this).attr("target", "_blank");
    }
  });
});
