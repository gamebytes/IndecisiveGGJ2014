(function() {
    'use strict';

    require.config({
        paths: {
            'cog': 'libs/cog',
            'box2d': 'libs/Box2dWeb-2.1.a.3',
            'three': 'libs/three',
            'systems': 'app/systems',
            'components': 'app/components'
        },

        shim: {
            'box2d': { exports: 'Box2D' },
            'three': { exports: 'THREE' }
        }
    });

    require([
        'cog',
        'systems/threeSystem',
        'systems/steeringSystem',
        'systems/sandbox',
        'systems/playerSystem',
        'systems/soundSystem'

    ], function(cog, ThreeSystem, SteeringSystem, SandboxSystem, PlayerSystem, SoundSystem) {

        var game = cog.createDirector({
            fixedDt: false,
            soundEnabled: true,
            assetDirectory: "../public/src/assets/",
            sounds: [
                {
                    name: 'shape_appear',
                    fileName: 'sfx/shape-appear.mp3'
                },
                {
                    name: 'shape_disappear',
                    fileName: 'sfx/shape-disappear.mp3'
                },
                {
                    name: 'square',
                    fileName: 'music/square.mp3',
                    loop: {
                        start: 0,
                        stop: 13.10
                    }
                },
                {
                    name: 'triangle',
                    fileName: 'music/triangle.mp3',
                    loop: {
                        start: 0,
                        stop: 13.10
                    }
                },
                {
                    name: 'circle',
                    fileName: 'music/circle.mp3',
                    loop: {
                        start: 0,
                        stop: 13.10
                    }
                }
            ]
        });

        game.systems.add(SoundSystem);
        game.systems.add(ThreeSystem);
        game.systems.add(SteeringSystem);
        game.systems.add(SandboxSystem);
        game.systems.add(PlayerSystem);

        game.start();



        window.game = game;
    });

}());