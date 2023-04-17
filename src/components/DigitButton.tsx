interface DigitButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
  className?: string;
}

export const DigitButton: React.FC<DigitButtonProps> = ({
  digit,
  enterDigit,
  className,
}) => {
  return (
    <div>
      <button
        className={`transition ease-in-out delay-90 hover:bg-stone-500 rounded-full bg-stone-600 m-1 w-14 h-14 text-white text-2xl ${className}`}
        onClick={() => enterDigit(digit)}
      >
        {digit}
      </button>
    </div>
  );
};
