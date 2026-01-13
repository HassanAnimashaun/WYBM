import YesButton from "../components/YesButton";
import NoButton from "../components/NoButton";
import ResetButton from "../components/ResetButton";
import { getRandomFlirtyQuote } from "../data/flirtyQuotes";
import { getRandomValentineCard } from "../data/valentinesCards";
import confetti from "canvas-confetti";
import { useState } from "react";

export default function Generator() {
  const [quote, setQuote] = useState<string>("");
  const [card, setCard] = useState<string>("");
  const [scale, setScale] = useState(1);
  const [surrendered, setSurrendered] = useState(false);
  const noText = surrendered ? "Ok fine 😒" : "NO 😭";

  function handleYes() {
    setCard(getRandomValentineCard());
    setQuote(getRandomFlirtyQuote());
    confetti({
      particleCount: 80,
      spread: 100,
      shapes: ["heart"],
      scalar: 1.4,
      colors: ["#ff4d6d", "#ff8fab", "#ffc2d1"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 120,
        origin: { y: 0.4 },
      });
    }, 150);
  }
  function handleNo() {
    if (surrendered) {
      handleYes();
      return;
    }

    setScale((prev) => {
      const next = prev - 0.1;

      if (next <= 0.4) {
        setSurrendered(true);
        return 1;
      }
      return Math.max(0.35, next);
    });
  }

  function handleReset() {
    setCard("");
    setQuote("");
    setScale(1);
    setSurrendered(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      {card ? (
        <div className="fade-in flex flex-col items-center gap-3">
          <p className="text-3xl text-center font-bold">{quote}</p>
          <img
            src={card}
            alt="Generated Card"
            className="w-full max-w-sm rounded-xl"
          />
          <ResetButton onClick={handleReset} />
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-3xl text-center font-bold">
              Will You Be My Valentine?
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <YesButton onClick={handleYes} />
            <NoButton
              onClick={handleNo}
              className="transition-transform "
              text={noText}
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
