type Props = {
  onClick: () => void;
  disabled?: boolean;
  text?: string;
};

export default function YesButton({
  onClick,
  disabled,
  text = "Yes 💘",
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className=" px-10 py-4 rounded-full text-white font-bold text-lg bg-pink-500 shadow-lg Stransition active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed animate-[yesPulse_1.6s_ease-in-out_infinite]"
    >
      {text}
    </button>
  );
}
