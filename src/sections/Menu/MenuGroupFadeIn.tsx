import React, { useRef, useLayoutEffect} from 'react';

// Animations
import animations from '../../animations';
import { gsap } from 'gsap';

// Components
import MenuItem from '../../components/MenuItem/_MenuItem';

// Types
import { type MenuItemType } from "../../commonTypes";

interface Props {
    items: MenuItemType[];
    delay?: number;
}

export default function MenuGroupFadeIn(props: Props) {
    const { items, delay = 0 } = props;

    const refs = useRef<React.RefObject<HTMLDivElement>[]>(items.map(() => React.createRef()))

    useLayoutEffect(() => {
        if (!refs.current) return;

        refs.current.forEach((ref, index) => {
            const timeline = gsap.timeline();
            const animation = animations.fadeInSlow;

            setTimeout(() => {
                if (!ref.current) return;
                timeline.to(ref.current, animation, delay);
            }, animation.duration * 100 * index);
        })
    }, []);

    return (
        <>
            {items.map((item, index) => (
                <div ref={refs.current[index]} style={{opacity: 0}}>
                    <MenuItem key={item.id} item={item} />
                </div>
            ))}
        </>
    );
}
