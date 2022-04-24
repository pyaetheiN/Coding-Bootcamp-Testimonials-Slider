const tab = document.querySelector('.testimonials__slider'),
btn = document.querySelectorAll('.testimonials__btn');

btn[0].onclick = function() {
  tab.style.transform = 'translateX(0%)';
}

btn[1].onclick = function() {
  tab.style.transform = 'translateX(-100%)';
}

btn[2].onclick = function() {
  tab.style.transform = 'translateX(0%)';
}

btn[3].onclick = function() {
  tab.style.transform = 'translateX(-100%)';
}