var btn = document.querySelector('#btn-topic')
var div = document.querySelector('.card-form')
var oldTopic = document.querySelector('.topics-text')
btn.addEventListener('click', function(){
  if (div.style.display === "none") { 
    div.style.display = "block"
    oldTopic.style.display = 'none'
  }
})

var submit = document.getElementById('submit')
var divSent = document.querySelector('.card-sent')
var prevTopic = document.querySelector('.card-form') 
submit.addEventListener('click', function() {
  if (divSent.style.display === 'none') {
    divSent.style.display = 'block'
    prevTopic.style.display = 'none'
  }
})
