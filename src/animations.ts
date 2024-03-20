enum SlideSpeed {
    Fast = 0.2,
    Medium = 0.5,
    Slow = 1,
}

enum FadeSpeed {
    Fast = 0.15,
    Slow = 1,
}

const animations = {
    slideIn: {
        duration: SlideSpeed.Fast,
        y: 25,
        opacity: 1,
    },
    slideOut: {
        duration: SlideSpeed.Fast,
        y: -25,
        opacity: 0,
    },
    slideInBelow: {
        start: {
            y: 25,
            opacity: 0,
        },
        end: {
            duration: SlideSpeed.Medium,
            y: 0,
            opacity: 1,
        }
    },
    fadeIn: {
        duration: FadeSpeed.Fast,
        opacity: 1,
    },
    fadeOut: {
        duration: FadeSpeed.Fast,
        opacity: 0
    },
    fadeInSlow: {
        duration: FadeSpeed.Slow,
        opacity: 1,
    },
    bounceIn: {
        duration: SlideSpeed.Slow,
        scaleY: 1,
        opacity: 1,
        ease: 'elastic'
    }
}

export default animations;