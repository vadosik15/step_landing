document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.container__paralaxer--image').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
};

const twoD = document.querySelector('.twoD');
const web = document.querySelector('.web');
const treeD = document.querySelector('.treeD');
const anim = document.querySelector('.anim');

twoD.addEventListener('click', function() {
  this.nextElementSibling.classList.toggle('activeBlock');
  this.lastElementChild.classList.toggle('activeArrow')
})
web.addEventListener('click', function() {
  this.nextElementSibling.classList.toggle('activeBlock');
  this.lastElementChild.classList.toggle('activeArrow')
})
treeD.addEventListener('click', function() {
  this.nextElementSibling.classList.toggle('activeBlock');
  this.lastElementChild.classList.toggle('activeArrow')
})
anim.addEventListener('click', function() {
  this.nextElementSibling.classList.toggle('activeBlock');
  this.lastElementChild.classList.toggle('activeArrow')
})

$(document).ready(function(){
  $('.slider').slick({
  });
});
