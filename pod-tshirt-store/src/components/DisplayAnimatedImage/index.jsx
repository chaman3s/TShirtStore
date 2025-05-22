import React from "react";
import img1 from "../../assets/images/img1.webp"; // Replace with your image

export default function LoadingStyleImageAnimation() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <img
        src={img1}
        alt="loading"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "auto",
          clipPath: "inset(100% 0 0 0)",
          animation: "topToBottomReveal 3s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes topToBottomReveal {
          0% {
            clip-path: inset(0 0 100% 0);
            opacity: 0;
          }
          30% {
             clip-path: inset(0 0 0 0);
            opacity: 1;
          }
          60% {
            clip-path: inset(30% 0 0 0);
           
            opacity: 1;
          }
          100% {
            clip-path: inset(100% 0 0 0);
            opacity: 0;
          }
        }

        @supports not (clip-path: inset(10%)) {
          img {
            clip-path: none !important;
            animation: fallbackReveal 3s ease-in-out infinite !important;
          }

          @keyframes fallbackReveal {
            0% {
              transform: translate(-50%, -100%) scale(1);
              opacity: 0;
            }
            30% {
              transform: translate(-50%, 20%) scale(1.1);
              opacity: 1;
            }
            60% {
              transform: translate(-50%, 50%) scale(1.15);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, 120%) scale(1.2);
              opacity: 0;
            }
          }
        }
      `}</style>
    </div>
  );
}
