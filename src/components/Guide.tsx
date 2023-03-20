interface Props {
  className?: string;
}

const Guide = ({ className }: Props) => {
  return (
    <div className={`text-slate-600 ${className}`}>
      <h1 className="font-bold text-xl ">How to play?</h1>
      <p>
        In this game you are converting from one{' '}
        <a
          className="underline font-bold"
          href="https://physics.nist.gov/cuu/Units/prefixes.html"
        >
          SI prefix
        </a>{' '}
        to another.
      </p>

      <ol className="list-decimal my-4">
        <li>See the input box? Thats the exponent.</li>
        <li>Find the answer by subtracting the two prefixes' exponents.</li>
      </ol>
      <p>You are challenging yourself by beating your highscore</p>
    </div>
  );
};

export default Guide;
