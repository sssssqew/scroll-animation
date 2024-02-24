const container = document.querySelector('.container')
const items = container.querySelectorAll('.item')
const text = document.body.querySelector('p')
const documentHeight = document.documentElement.clientHeight
let distFromBottom
let offset = -100
console.log(documentHeight)


window.addEventListener('scroll', (e) => {
  distFromBottom = documentHeight - text.getBoundingClientRect().bottom
  if(distFromBottom > offset){
    text.classList.add('fade')
  }
  items.forEach(function(item, index){
    distFromBottom = documentHeight - item.getBoundingClientRect().bottom
    if(distFromBottom > offset){
      console.log("인", index, item, item.getBoundingClientRect().bottom)
      item.classList.add('fade')
    }
  })
})