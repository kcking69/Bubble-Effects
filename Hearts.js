const heart = document.getElementById('heart')
const container = document.getElementById('container')

document.addEventListener('mousemove', (e)=>{
    const div = document.createElement('div')
    div.innerHTML = '💙'
    div.classList.add('hearts')
    const random = Math.random()*5
    const yPos = e.clientY
    const xPos = e.clientX
    div.style.left = xPos + 'px'
    div.style.top = yPos + 'px'
    div.style.fontSize = random + 'rem'
    container.appendChild(div)

    setInterval(()=>{
        div.remove()
    },6000)
})






















