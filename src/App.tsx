import { useEffect, useState } from 'react';
import Prompt from './components/Prompt';
import Button from './components/Button';
import ProgressBar from './components/ProgressBar';
import { SIPrefix, Unit } from './types';
import { prefixes, units } from './data';
import { FaQuestionCircle } from 'react-icons/fa';
import Guide from './components/Guide';

const App = () => {
  const getRandomFromArray = (arr: any[]): any => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const getPrefixPair = (): SIPrefix[] => {
    let prefixPair = [
      getRandomFromArray(prefixes),
      getRandomFromArray(prefixes),
    ];

    while (prefixPair[0] === prefixPair[1]) {
      prefixPair[0] = getRandomFromArray(prefixes);
      prefixPair[1] = getRandomFromArray(prefixes);
    }

    return prefixPair;
  };

  const generatePrompt = (): Prompt => {
    const prefixPair = getPrefixPair();
    console.log(prefixPair);
    const significand = Math.random() * 10;
    const unit = getRandomFromArray(units);

    return {
      fromPrefix: prefixPair[0],
      toPrefix: prefixPair[1],
      significand,
      unit,
      answered: false,
    };
  };

  const handleReset = () => {
    setCurrentPrompt(generatePrompt());
  };

  const handleSubmit = () => {
    const answer =
      currentPrompt.fromPrefix.exponent - currentPrompt.toPrefix.exponent;
    console.log(answer);
    if (userExponent === answer && !currentPrompt.answered) {
      setScore(score + 1);
      setCurrentPrompt(generatePrompt());
    }
  };

  const handleInput = (exponent: number) => {
    setUserExponent(exponent);
  };

  const handleQuestionClick = () => {
    setShowGuide(!showGuide);
  };

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [userExponent, setUserExponent] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState(generatePrompt());
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const storageHighscore = parseFloat(
      localStorage.getItem('prefixer-highscore') as string
    );
    setHighscore(storageHighscore);
  }, []);

  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
    }
  }, [score]);

  return (
    <main className="flex items-center justify-center h-screen w-screen bg-slate-400 bg-gradient-to-br from-slate-700 to-slate-900">
      <button
        onClick={handleQuestionClick}
        className="text-slate-400 transition ease-in-out hover:text-slate-100 flex gap-4 absolute top-4 right-4"
      >
        <span className="text-slate-500">How to play?</span>
        <FaQuestionCircle size={24} />
      </button>
      <div className="flex flex-col gap-2 w-96">
        <h1 className="font-bold text-slate-600">
          Prefixer by Mattis Møl Kristensen
        </h1>

        <Prompt prompt={currentPrompt} onInput={handleInput} />

        <div className="flex gap-4 ">
          <Button className="flex-1" onClick={handleReset}>
            Reset
          </Button>
          <Button className="flex-1" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        <ProgressBar percentage={(score / highscore) * 100} className="" />
        <div className="text-slate-300 flex justify-between">
          <p>Score: {score}</p>
          <p>Highscore: {highscore}</p>
        </div>
        {showGuide && <Guide className="mt-8" />}
      </div>
    </main>
  );
};

export default App;
