//import { useState, useEffect, useRef } from "react";

export default function useAudio(options) {
   
  
    return getLocalStream()
  }

  function getLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream; // A
      })
      .catch((err) => {   
        
        console.error(`you got an error: ${err}`);
      });
      return window.localStream
  }