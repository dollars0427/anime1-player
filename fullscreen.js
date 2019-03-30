const config = {
  iframeMouseOver: false,
  url: ""
};

document.addEventListener("keydown", function(e) {
  switch (e.key) {
    case "Escape":
      history.go(-1);
      break;
    default:
      return;
  }
  e.preventDefault();
});

window.addEventListener("blur", function() {
  if (config.iframeMouseOver) {
    window.location.href = config.url;
  }
});

const iframes = document.querySelectorAll("iframe");
for (let i = 0; i < iframes.length; i++) {
  const iframe = iframes[i];
  iframe.addEventListener("mouseover", function() {
    config.url = iframe.getAttribute("src");
    config.iframeMouseOver = true;
  });
  iframe.addEventListener("mouseout", function() {
    config.url = "";
    config.iframeMouseOver = false;
  });
}
