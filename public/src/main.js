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
        
    ], function(cog, SoundSystem, KeyboardSystem, ThreeSystem, SteeringSystem, SandboxSystem,
                PlayerSystem, EnemyAISystem, MeshSystem, GamepadSystem, PromptSystem) {

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
                    name: 'negative_hit',
                    fileName: 'sfx/NegativeHit_01.mp3'
                },
                {
                    name: 'positive_hit',
                    fileName: 'sfx/PositiveHit_01.mp3'
                },
                {
                    name: 'circle_transformation',
                    fileName: 'sfx/CircleTransformation_01.mp3'
                },
                {
                    name: 'square_transform',
                    fileName: 'sfx/SquareTransformation_01.mp3'
                },
                {
                    name: 'triangle_transform',
                    fileName: 'sfx/TriangleTransformation_01.mp3'
                },
                {
                    name: 'mystery',
                    fileName: 'music/mystery.mp3',
                    loop: true
                },
                {
                    name: 'square',
                    fileName: 'music/square.mp3',
                    loop: true
                },
                {
                    name: 'triangle',
                    fileName: 'music/triangle.mp3',
                    loop: true
                },
                {
                    name: 'circle',
                    fileName: 'music/circle.mp3',
                    loop: true
                }
            ]
        });

        // Low level
        game.systems.add(SoundSystem);
        game.systems.add(KeyboardSystem);
        game.systems.add(ThreeSystem);
        game.systems.add(MeshSystem);

        game.events.emit('playSound', 'mystery');
        game.events.emit('playSound', 'triangle', 0);
        game.events.emit('playSound', 'square', 0);

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