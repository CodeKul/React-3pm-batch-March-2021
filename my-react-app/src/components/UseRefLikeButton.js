import React, { useEffect, useRef, useState } from 'react'


export default function UseRefLikeButton() {

    const [mouseDown, setMouseDown] = useState(false);

    const holdDetectionTimeoutRef = useRef ();

    useEffect (() => {
        if (mouseDown) {
            holdDetectionTimeoutRef.current = setTimeout (() => {

            }, 500);
        } else {
            holdDetectionTimeoutRef.current && clearTimeout(holdDetectionTimeoutRef.current);
        }
    }, [mouseDown])

    return (
        <div>
            
        </div>
    )
}
