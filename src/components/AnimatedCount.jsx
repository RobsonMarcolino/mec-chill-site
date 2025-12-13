import React, { useEffect, useState, useRef } from 'react';

const AnimatedCount = ({ to, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const end = parseInt(to.toString().replace(/\D/g, ''), 10);
                    if (start === end) return;

                    let totalDuration = duration;
                    let incrementTime = (totalDuration / end) * 1000;

                    // Cap increment time for performance on large numbers
                    if (incrementTime < 10) {
                        incrementTime = 10;
                        totalDuration = 10 * end / 1000; // Recalculate duration effectively
                    }

                    let timer = setInterval(() => {
                        start += Math.ceil(end / (duration / 10)); // Increment chunk
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(start);
                        }
                    }, 10);

                    observer.disconnect(); // Only run once
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [to, duration]);

    return <span ref={elementRef}>{count}{suffix}</span>;
};

export default AnimatedCount;
