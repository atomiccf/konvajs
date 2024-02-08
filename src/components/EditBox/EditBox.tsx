import React,{useState} from "react";
import {Text,Rect,} from "react-konva";
import { Html } from "react-konva-utils";

export const EditBox:React.FC = () => {
    const [text, setText] = useState('Edit me!');
    const [isEditing, setIsEditing] = useState(false);

    const handleTextClick = () => {
        setIsEditing(true);
    };

    // @ts-expect-error error
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (

     <>
         {/* Background rectangle */}
         <Rect
             width={200}
             height={30}
             fill="#f0f0f0"
             cornerRadius={5}


         />
         {/* Editable text */}
         {isEditing ? (
             <Html>
               <textarea
                   value={text}
                   onChange={handleTextChange}
                   onBlur={handleBlur}
                   style={{
                       position: 'absolute',
                       top: 5,
                       left: 5,
                       width: 200,
                       height: 20,
                       border: 'none',
                       outline: 'none',
                       resize: 'none',
                       fontFamily: 'Arial',
                       fontSize: 14,
                       lineHeight: '20px',
                       padding: '0 5px',
                       backgroundColor: 'transparent',
                   }}
                   autoFocus
               />
             </Html>
         ) : (
             <Text
             text={text}
             x={15}
             y={5}
             width={180}
             height={20}
             fontSize={14}
             fontFamily="Arial"
             fill="black"
             align="left"
             verticalAlign="middle"
             onClick={handleTextClick}
             
             />)



         }
     </>

    )


}



