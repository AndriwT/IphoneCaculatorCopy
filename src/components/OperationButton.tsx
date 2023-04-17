interface OperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  className?: string;
}

export const OperationButton: React.FC<OperationButtonProps> = ({
  operation,
  selectOperation,
  className,
}) => {
  return (
    <div>
      <button
        className={`transition ease-in-out delay-90 hover:bg-stone-300 rounded-full bg-stone-400 m-1 w-14 h-14 text-white text-2xl ${className}`}
        onClick={() => selectOperation(operation)}
      >
        {operation}
      </button>
    </div>
  );
};
