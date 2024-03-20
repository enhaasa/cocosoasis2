import { useLayoutEffect, useRef } from "react"

// Animations
import animations from "../../animations";
import { gsap } from "gsap";

export default function FadeIn({ children, delay = 0 }: any) {

    const ANIMATION = animations.fadeInSlow;
    const ref = useRef(null);

    useLayoutEffect(() => {
        if (ref.current) {
            const timeline = gsap.timeline();

            timeline.fromTo(ref.current, {opacity: 0}, ANIMATION, delay);

            return () => {
                timeline.kill();
            }
        }
    }, [ANIMATION]);

    return (
        <span ref={ref}>
            {children}
        </span>
    )
}