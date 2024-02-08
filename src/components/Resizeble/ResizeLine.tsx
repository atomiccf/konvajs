import  { useState } from 'react';
import {  Line, Circle } from 'react-konva';


function ResizableLine() {
    const [points, setPoints] = useState([
        { x: 50, y: 50 },
        { x: 50, y: 50 },]
    );

    // @ts-expect-error ededd
    const handleCircleDragMove = (index, e) => {
        const newPoints = [...points];
        newPoints[index] = { x: e.target.x(), y: e.target.y() };
        setPoints(newPoints);
    };

    return (
        <>
                  {/* Line */}
                <Line
                    points={[
                        points[0].x,
                        points[0].y,
                        points[1].x,
                        points[1].y,
                    ]}
                    stroke="green"
                    strokeWidth={2}
                />

                {/* Static Circle for the initial point */}
                <Circle
                    x={points[0].x}
                    y={points[0].y}
                    radius={6}
                    fill="red"
                />

                {/* Draggable Circle for the second point */}
                <Circle
                    x={points[0].x}
                    y={points[0].x}
                    radius={6}
                    fill="blue"
                    draggable
                    onDragMove={(e) => handleCircleDragMove(1, e)}
                />
              </>
           );
}

export default ResizableLine;