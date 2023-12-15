input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . # #
        . . . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(2000)
    basic.showString("" + (control.deviceSerialNumber()))
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showArrow(ArrowNames.South)
    basic.pause(5000)
    basic.pause(5000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
})
basic.showIcon(IconNames.Happy)
basic.showLeds(`
    . # . . .
    . # . . .
    . # # # .
    . # . # .
    . # # # .
    `)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
music.setBuiltInSpeakerEnabled(true)
basic.pause(5000)
basic.showString("Hello!")
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    # # # # #
    # # # # #
    # . # . #
    `)
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # . # . #
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    . # . # .
    # . # . #
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . . . # .
    . # . # .
    . # . . #
    # . # # .
    `)
basic.showLeds(`
    . . . . #
    . . . . .
    . # . . .
    . . . . #
    # . . . .
    `)
basic.showLeds(`
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . # # # .
    `)
