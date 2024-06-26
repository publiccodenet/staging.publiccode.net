// Make collapsible boxes interactive
let arrows = document.querySelectorAll('img[alt="arrow.down"]');
Array.from(arrows).forEach(arrow => {
  let title = arrow.parentNode;
  let container = title.parentNode.children[1];
  container.style.overflow = 'hidden';
  container.style.height = '0px';
  container.style.transition = '0.2s'
  arrow.style.transform = 'rotate(90deg)';
  arrow.style.transition = '0.2s'

  title.addEventListener('click', () => {
    if (String(container.style.height) === '0px') {
      arrow.style.transform = '';
      container.style.height = ''
      container.style.overflow = '';
    } else {
      arrow.style.transform = 'rotate(90deg)';
      container.style.height = '0px'
      container.style.overflow = 'hidden';
    }
  });
});

// // Add feedback link
// var link = document.createElement('a');
// link.textContent = 'Feedback';
// link.href = 'mailto:pc-feedback@publiccode.net?subject=Feedback from ' + encodeURI(document.location);
// link.style = 'position: fixed; top: 50%; left: 100%; transform: translate(-70%, -50%) rotate(-90deg); font-family: var(--font-family-mulish); font-size: var(--font-size-m); color: var(--basic-link);';
// document.body.appendChild(link);

// Add Donate button
let stewardship = document.querySelectorAll("[href='/codebase-stewardship/']");
Array.from(stewardship).forEach(link => {
  if (link.childNodes[0].innerHTML != 'Stewardship') {
    return
  }
  html = link.outerHTML;
  html = html.replace('Stewardship', 'Donate')
  html = html.replace('/codebase-stewardship/', 'https://secure.infinitegiving.com/gift/foundation-for-public-code')
  link.insertAdjacentHTML('beforebegin', html);
})

// Modify CSS of floating menu
const navDiv = document.getElementById("overlay-navigation")
const navDivStyle = navDiv.style
navDivStyle.zIndex = 10000
navDivStyle.alignItems = 'flex-end'
navDivStyle.justifyContent = 'flex-start'
navDivStyle.paddingRight = '40px'
navDivStyle.background = 'rgba(0, 0, 0, .25)'
const childDivStyle = navDiv.children[0].children[0].style
childDivStyle.alignItems = 'flex-start'
