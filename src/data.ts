import { SIPrefix, Unit } from './types';

export const prefixes: SIPrefix[] = [
  {
    name: 'peta',
    symbol: 'P',
    exponent: 15,
  },
  {
    name: 'tera',
    symbol: 'T',
    exponent: 12,
  },
  {
    name: 'giga',
    symbol: 'G',
    exponent: 9,
  },
  {
    name: 'mega',
    symbol: 'M',
    exponent: 6,
  },
  {
    name: 'kilo',
    symbol: 'k',
    exponent: 3,
  },
  {
    name: 'deci',
    symbol: 'd',
    exponent: -1,
  },
  {
    name: 'centi',
    symbol: 'c',
    exponent: -2,
  },
  {
    name: 'milli',
    symbol: 'm',
    exponent: -3,
  },
  {
    name: 'micro',
    symbol: 'µ',
    exponent: -6,
  },
  {
    name: 'nano',
    symbol: 'n',
    exponent: -9,
  },
  {
    name: 'pico',
    symbol: 'p',
    exponent: -12,
  },
];

export const units: Unit[] = [
  {
    name: 'metre',
    symbol: 'm',
  },
  {
    name: 'gram',
    symbol: 'g',
  },
  {
    name: 'second',
    symbol: 's',
  },
  {
    name: 'ampere',
    symbol: 'A',
  },
  {
    name: 'kelvin',
    symbol: 'K',
  },
  {
    name: 'mole',
    symbol: 'mol',
  },
  {
    name: 'candela',
    symbol: 'cd',
  },
];
