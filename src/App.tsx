import './App.css';
import {Line,Text,Rect} from "react-konva";
import {Canvas} from "./components/Canvas/Canvas.tsx"
    import ResizeLine from "./components/Resizeble/ResizeLine.tsx";
import {EditBox} from "./components/EditBox/EditBox.tsx";

function App() {
    const points = [50, 50, 150, 100, 200, 200, 150, 200];
    const handleClick = () => {
        alert('click')
    }

    return (

<Canvas>
    <>
        <ResizeLine />
        <Text text="Some text on canvas" fontSize={15} />

        <Line
            x={20}
            y={200}
            points={points}
            closed
            fill="rgba(0, 255, 0, 0.1)"
            stroke="black"
            strokeWidth={0.5}
            onClick={handleClick}
        />
        <EditBox />

        <Rect
            x={500}
            y={250}
            width={100}
            height={100}
            fill="rgba(0, 255, 0, 0.1)"

        />
    </>

</Canvas>



    );
}

export default App
