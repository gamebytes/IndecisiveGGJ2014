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
            'questions': 'app/questions',
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
        'systems/threeSystem',
        'systems/meshSystem',
        'systems/keyboardSystem',
        'systems/gamepadSystem',
        'systems/promptSystem',
        'systems/sandbox',
        'systems/playerSystem',
        'systems/enemyAISystem',
        'systems/steeringSystem',
        'systems/questionSystem',
        'systems/backgroundSystem',
        'systems/roomSystem'


    ], function(cog, $,
                SoundSystem,
                ThreeSystem,
                MeshSystem,
                KeyboardSystem,
                GamepadSystem,
                PromptSystem,
                SandboxSystem,
                PlayerSystem,
                EnemyAISystem,
                SteeringSystem,
                QuestionSystem,
                BackgroundSystem,
                RoomSystem
        ) {

        var game = cog.createDirector({
            fixedDt: false,
            soundEnabled: true
            ,
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
                    fileName: 'music/mystery.mp3',
                    loop: true
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
        game.systems.add(QuestionSystem);
        game.systems.add(BackgroundSystem);

        // Loccmotion
        game.systems.add(SteeringSystem);
        game.systems.add(RoomSystem);

        game.start();

        window.game = game;
    });

}());