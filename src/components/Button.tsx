interface Props {
  className?: string;
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`font-bold text-slate-300 px-4 py-2 bg-gradient-to-tl from-slate-700 to-slate-600 border-2 border-slate-600 transition ease-in-out shadow-md hover:shadow-lg hover:gradient-to-tl hover:from-slate-800 hover:to-slate-700 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
