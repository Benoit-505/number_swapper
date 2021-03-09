input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num2)
    basic.showNumber(num1)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    num2 += 1
    basic.showNumber(num2)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let num1 = 0
let num2 = 0
num2 = 0
num1 = 0
basic.forever(function () {
	
})
