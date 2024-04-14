import { useState, useEffect, useRef } from "react";

export default function useAudio(options) {
    const ref = useRef();
    
  
    useEffect(() => {
     
    }, [options]);
  
    return [ref, isIntersecting];
  }

  function getLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
  }