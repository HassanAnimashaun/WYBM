declare module "canvas-confetti" {
  export type ConfettiShape =
    | "circle"
    | "square"
    | "triangle"
    | "star"
    | "heart"
    | ConfettiShapeInstance;

  export type ConfettiShapeInstance = {
    type: "path" | "text";
    path?: string;
    matrix?: [number, number, number, number, number, number];
    color?: string;
    text?: string;
  };

  export type ConfettiOrigin = {
    x?: number;
    y?: number;
  };

  export type ConfettiOptions = {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: ConfettiOrigin;
    colors?: string[];
    shapes?: ConfettiShape[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
  };

  export type GlobalConfettiOptions = {
    resize?: boolean;
    useWorker?: boolean;
  };

  export type ConfettiCannon = {
    (options?: ConfettiOptions): Promise<null> | null;
    reset: () => void;
  };

  export type Confetti = {
    (options?: ConfettiOptions): Promise<null> | null;
    create: (
      canvas?: HTMLCanvasElement | null,
      options?: GlobalConfettiOptions
    ) => ConfettiCannon;
    reset: () => void;
    shapeFromText: (options: { text: string; scalar?: number }) => ConfettiShape;
  };

  const confetti: Confetti;
  export default confetti;
}
