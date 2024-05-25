import { useLayoutEffect, useRef } from 'react';

// Icons
import closeIcon from './../../icons/close2-white.png';

// Animations
import { gsap } from 'gsap';
import animations from '../../animations';

type Props = {
    handleClose: () => void;
}

function Modal(props: Props & { children?: React.ReactNode}) {
    const { handleClose } = props;

    const backgroundRef = useRef<HTMLButtonElement>(null);
    const foregroundRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (backgroundRef.current && foregroundRef.current) {
            const timeline = gsap.timeline();

            timeline.to(backgroundRef.current, animations.fadeIn, 0);
            timeline.to(foregroundRef.current, animations.slideIn, 0);

            return () => {
                timeline.kill();
            }
        }
    }, []);

    function close() {
        gsap.to(backgroundRef.current, animations.fadeOut);
        gsap.to(foregroundRef.current, animations.slideOut);

        setTimeout(()=> {
            handleClose();
        }, animations.fadeOut.duration * 1500);
    }

    return (
        <div className="modal" >
            <button className="background" ref={backgroundRef} onClick={() => close()}/>
            
            <div className="content" ref={foregroundRef}>
                <div className="titleBar">
                    <button className="closeButton" onClick={() => close()}>
                        <img alt="Close" src={closeIcon} />
                    </button>
                </div>
                
                {props.children}
            </div>
        </div>
    )
}

export default Modal;