Copy Link and Open in Chrome
Website Link :- https://free-netflix.pages.dev/
<div id="my-link">
  My GitHub profile: https://github.com/my-username
</div>


<script>
function copyLink() {
  var copyText = document.getElementById("my-link");
  var input = document.createElement("input");
  input.setAttribute("value", copyText.textContent);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}
</script>


<button onclick="copyLink()">Copy Free - NetFlix Link</button>
