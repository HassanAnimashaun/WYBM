import { useNavigate } from "react-router-dom";
import heart from "../assets/WYBM.png";
import { useState } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  function handleClick() {
    setFade(true);

    setTimeout(() => {
      navigate("/love");
    }, 400);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={heart}
        alt="valentine"
        className="cursor-pointer animate-[pulseFloat_3s_ease-in-out_infinite]"
        onClick={handleClick}
        style={{
          animation: fade
            ? "fadeOut 0.4s ease forwards"
            : "animate-[pulseFloat_3s_ease-in-out_infinite]",
        }}
      />
    </div>
  );
}
