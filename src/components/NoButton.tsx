type Props = {
  onClick: () => void;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
};
export default function NoButton({
  onClick,
  text = "No😭",
  className = "",
  style,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        px-10 py-4
        rounded-full
        font-bold text-lg
        bg-white/80 text-gray-900
        border border-gray-300
        shadow-md
        transition
        active:scale-90
        ${className}
      `}
      style={style}
    >
      {text}
    </button>
  );
}
