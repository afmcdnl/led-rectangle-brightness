input.onButtonPressed(Button.A, function () {
    ManyX += 1
})
input.onButtonPressed(Button.AB, function () {
    Brightness += 20
    if (Brightness > 255) {
        Brightness = 20
    }
})
input.onButtonPressed(Button.B, function () {
    ManyY += 1
})
let ManyY = 0
let ManyX = 0
let Brightness = 0
led.plot(0, 0)
Brightness = 100
basic.forever(function () {
    for (let indexY = 0; indexY <= ManyY; indexY++) {
        for (let indexX = 0; indexX <= ManyX; indexX++) {
            led.plot(indexX, indexY)
            led.setBrightness(Brightness)
        }
    }
})
