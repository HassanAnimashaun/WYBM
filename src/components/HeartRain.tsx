import Snowfall from "react-snowfall";
import { useMemo } from "react";

export default function HeartRain() {
  const images = useMemo(() => {
    const heart1 = new Image();
    heart1.src = "/assets/heart1.png";

    const heart2 = new Image();
    heart2.src = "/assets/heart2.png";

    return [heart1, heart2];
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <Snowfall
        snowflakeCount={100}
        images={images}
        speed={[1.5, 2]}
        enable3DRotation
        wind={[-0.3, 0.3]}
        // rotationSpeed={[0, 1]}
        radius={[18, 32]}
      />
    </div>
  );
}
