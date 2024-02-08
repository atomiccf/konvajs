import {Stage,Layer} from "react-konva";
import React from "react";

type CanvasProps = {
    children: React.ReactElement,

}

export const Canvas:React.FC<CanvasProps> = ({children}) => {
const root = document.getElementById('root');
    console.log()
return(
    <Stage width={root?.offsetWidth} height={root?.offsetHeight}>
        <Layer>
            {children}
        </Layer>
     </Stage>
)

}