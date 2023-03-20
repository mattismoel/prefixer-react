import { useEffect, useState } from 'react';

interface Props {
  percentage: number;
  className: string;
}

const ProgressBar = ({ percentage, className }: Props) => {
  const [percentageClass, setPercentageClass] = useState('w-0');

  useEffect(() => {
    setPercentageClass(`w-[${percentage}%]`);
    console.log(percentageClass);
  }, []);

  return (
    <div
      className={`h-4 ${className} p-1 border-2 border-slate-700 shadow-md bg-gradient-to-tl from-slate-800 to-slate-700 rounded-lg`}
    >
      <div
        style={{ width: `${percentage}%` }}
        className={`bg-green-400 h-full rounded-full shadow-sm ${percentageClass}`}
      ></div>
    </div>
  );
};

export default ProgressBar;
