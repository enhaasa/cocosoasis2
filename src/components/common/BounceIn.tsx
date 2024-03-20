import { useLayoutEffect, useRef } from "react"

// Animations
import animations from "../../animations";
import { gsap } from "gsap";

export default function BounceIn({ children }: any) {

    const ANIMATION = animations.bounceIn;
    const ref = useRef(null);

    useLayoutEffect(() => {
        if (ref.current) {
            const timeline = gsap.timeline();

            timeline.fromTo(ref.current, animations.slideInBelow.start, animations.slideInBelow.end, 0.2);

            return () => {
                timeline.kill();
            }
        }
    }, []);

    return (
        <span ref={ref} style={{display: 'inline-block', width: '100%'}}>
            {children}
        </span>
    )
}