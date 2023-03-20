import { ChangeEvent, useEffect, useState } from 'react';
import type { SIPrefix, Unit } from '../types';
import Button from './Button';
import { prefixes, units } from '../data';
import ProgressBar from './ProgressBar';

interface Prompt {
  fromPrefix: SIPrefix;
  toPrefix: SIPrefix;
  unit: Unit;
  significand: number;
  answered: boolean;
}

interface Props {
  prompt: Prompt;
  onInput: (exponent: number) => void;
}

const Prompt = ({ onInput, prompt }: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(parseFloat(e.target.value));
  };

  return (
    <div className="flex flex-col w-96">
      <div className="flex flex-col border-2 border-slate-600 p-8 rounded-lg flex-1 shadow-md bg-gradient-to-tl text-slate-300 from-slate-800 to-slate-600">
        <div className="">
          <h2 className="text-center text-xl font-bold mb-4">
            What is {prompt?.fromPrefix.symbol}
            {prompt.unit.symbol} in {prompt?.toPrefix.symbol}
            {prompt.unit.symbol}?
          </h2>
          <div className="flex text-xl h-16 rounded-lg justify-center items-center">
            <span>
              {`${prompt?.significand.toFixed(2)} ${prompt?.fromPrefix.symbol}${
                prompt?.unit.symbol
              }`}{' '}
              * 10
            </span>
            <div className="h-full">
              <input
                className="w-8 h-8 border-2 border-slate-500 bg-slate-700 mx-2 text-center text-base rounded-md p-1 focus:outline-none"
                type="text"
                onChange={handleInput}
              />
            </div>
            <span>{`${prompt?.toPrefix.symbol}${prompt?.unit.symbol}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
