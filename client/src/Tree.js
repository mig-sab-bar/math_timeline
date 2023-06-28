import React, { useLayoutEffect} from "react"
import  { canvas1 } from  "./canvas.js";

const Tree = () => {
    useLayoutEffect(() => {
        canvas1()
    }, []);

    return (
        <>
            <div id="div1">
                <img  style={{position: "absolute", left: "600px", top: "347px" }} src="logomoeb1.png" />
            </div>

            <div id="div2" style={{position: "absolute",  left: "600px", top: "20px"}}>
                <img    src="fencoger2.gif "/>
                <br />
                <img    src="fv5.gif" />
            </div>
        
            <canvas id="micanvas" width="2000px" height="1075px">
                Tu navegador no soporta canvas.
            </canvas>
        </>
    )
}

export { Tree };