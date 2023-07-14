import React, { useLayoutEffect} from "react"
import  { canvas0 } from  "./canvas.js";

const Tree = () => {
    useLayoutEffect(() => {
        canvas0()
    }, []);

    return (
        <>
       
            <canvas id="micanvas" width="2000px" height="1075px">
                Tu navegador no soporta canvas.
            </canvas>
        </>
    )
}

export { Tree };