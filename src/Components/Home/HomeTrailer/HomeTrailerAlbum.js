import { Box, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import BoxFilm from "./BoxFilm";
import img1 from "../../../Images/pagination image 1.png";
import img2 from "../../../Images/pagination image 3.png";
import img4 from "../../../Images/pagination  image 4.png";
import img5 from "../../../Images/pagination  image 5.png";

function Boxfilmm(image, name) {
  return { image, name };
}

let boxfilm = [
  Boxfilmm(img1, "Мулан"),
  Boxfilmm(img5, "Форсаж 9"),
  Boxfilmm(img2, "Чёрная Вдова"),
  Boxfilmm(img4, "Тихое место 2"),
];
export default function HomeTrailerAlbum() {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(null);
    const [scrollStart, setScrollStart] = useState(null);
    // const [right,setRight]=useState('30px')
    const handleMouseDown = (event) => {
      setIsDragging(true); // Set isDragging to true when mouse is down
      setDragStart(event.clientX);
      setScrollStart(containerRef.current.scrollLeft);
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const distance = event.clientX - dragStart;
      containerRef.current.scrollLeft = scrollStart - distance;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false); // Set isDragging to false when mouse is up
    };
    const scrolBtn = ()=>{
        
    }
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "10px",
          bgcolor: "#1B2133",
          position: "relative",
        }}
      >
        <Button 
           onClick={scrolBtn}
          sx={{
            width: "422px",
            height: "10px",
            bgcolor: "#3657CB",
            position: "absolute",
            // left:right,
          }}
        ></Button>
      </Box>
      <Box
         ref={containerRef}
         onMouseDown={handleMouseDown} // Add event listeners for mouse down, move, and up
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
        sx={{
          width: "100%",
          height: "400px",
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          display: "flex",
          gap:'19px',
        }}
      >
        <BoxFilm boxfilm={boxfilm} />
      </Box>
    </Box>
  );
}
