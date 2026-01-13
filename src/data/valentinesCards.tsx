const imageModules = import.meta.glob("../assets/images/*.{jpg,png}", {
  eager: true,
});

const images = Object.values(imageModules).map(
  (mod) => (mod as { default: string }).default
);

export function getRandomValentineCard() {
  return images[Math.floor(Math.random() * images.length)];
}
