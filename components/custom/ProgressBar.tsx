interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
  showText?: boolean;
  barHeight?: "sm" | "md" | "lg";
  color?: string;
}

export default function ProgressBar({
  current,
  total,
  className = "",
  showText = true,
  barHeight = "md",
  color = "#38a3a5",
}: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  const heightClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Progress Bar */}
      <div
        className={`w-full bg-gray-200 rounded-full ${heightClasses[barHeight]}`}
      >
        <div
          className={`${heightClasses[barHeight]} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>

      {/* Progress Text */}
      {showText && (
        <div className="flex items-center justify-end mt-2">
          <p className="text-sm text-gray-600">
            Progress: {current} of {total}
          </p>
        </div>
      )}
    </div>
  );
}
