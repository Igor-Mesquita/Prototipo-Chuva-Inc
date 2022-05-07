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
var textArea = document.querySelector('#conteudo')
var input = document.querySelector('#assunto')
submit.addEventListener('click', function() {
  if (divSent.style.display === 'none') {
    divSent.style.display = 'block'
    prevTopic.style.display = 'none'
  }
})

var button = document.getElementById('mais')
var divLorem = document.getElementsByClassName('lorem')
var oldlorem = document.getElementsById('lorem')
button.addEventListener('click', function() {
  if (divLorem.style.display === 'none') {
    divLorem.style.display = 'block'
    oldlorem.style.display = 'none'
  }
})
