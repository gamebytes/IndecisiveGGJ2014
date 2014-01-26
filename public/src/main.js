(function() {
    'use strict';

    require.config({
        paths: {
            'cog': 'libs/cog',
            'box2d': 'libs/Box2dWeb-2.1.a.3',
            'three': 'libs/three',
            'gamepad': 'libs/gamepad',
            'systems': 'app/systems',
            'components': 'app/components',
            'jquery': 'libs/jquery.min',
            'jquery.easing': 'libs/jquery.easing'

        },

        shim: {
            'box2d': { exports: 'Box2D' },
            'three': { exports: 'THREE' },
            'gamepad': { exports: 'Gamepad' }
        }
    });

    require([
        'cog',
        'jquery',
        'systems/soundSystem',
        'systems/keyboardSystem',
        'systems/threeSystem',
        'systems/steeringSystem',
        'systems/sandbox',
        'systems/playerSystem',
        'systems/enemyAISystem',
        'systems/meshSystem',
        'systems/gamepadSystem',
        'systems/promptSystem'

    ], function(cog, $, SoundSystem, KeyboardSystem, ThreeSystem, SteeringSystem, SandboxSystem, PlayerSystem, EnemyAISystem, MeshSystem, GamepadSystem, PromptSystem) {


        var game = cog.createDirector({
            fixedDt: false,
            soundEnabled: true,
            assetDirectory: '../public/src/assets/',
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
                    fileName: 'music/mystery.mp3',
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

        // Low level
        game.systems.add(SoundSystem);
        game.systems.add(ThreeSystem);
        game.systems.add(MeshSystem);

        // Input
        game.systems.add(KeyboardSystem);
        game.systems.add(GamepadSystem);
        game.systems.add(PromptSystem);

        // Entities
        game.systems.add(SandboxSystem);
        game.systems.add(PlayerSystem);
        game.systems.add(EnemyAISystem);

        // Locamotion
        game.systems.add(SteeringSystem);

        game.start();

        window.game = game;
    });

}());