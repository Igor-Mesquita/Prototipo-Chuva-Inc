var btn = document.querySelector('#btn-topic')
var div = document.querySelector('.card-script')
var oldTopic = document.querySelector('.topics-text')
btn.addEventListener('click', function(){
  if (div.style.display === "none") { 
    div.style.display = "block"
    oldTopic.style.display = 'none'
  }
})

