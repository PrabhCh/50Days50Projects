const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEL = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})
