// HalfRoundedRectangle.js
import React from 'react';
import {Stage, Layer, Rect} from 'react-konva';

const HalfRoundedRectangle = () => {
    return (
        <Stage width={window.innerWidth}
               height={window.innerHeight}>
            <Layer>
                {/* Draw the half-rounded rectangle at the bottom of the page */}
                <Rect
                    x={0}
                    y={670} // Set to the bottom of the page
                    width={window.innerWidth}
                    height={100} // Smaller height
                    fill="#ffffff" // Set the fill color to white
                    cornerRadius={{
                        topLeft: 30, // More rounded top-left corner
                        topRight: 30, // More rounded top-right corner
                        bottomLeft: 20,
                        bottomRight: 20,
                    }}
                    shadowOffset={{x: 0, y: -10}} // Increased shadow upwards
                    shadowBlur={15} // Increased shadow blur
                    shadowColor="rgba(0, 0, 0, 0.5)" // Adjusted shadow color and transparency
                />
            </Layer>
        </Stage>
    );
};

export default HalfRoundedRectangle;
