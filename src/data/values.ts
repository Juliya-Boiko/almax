import valueImg1 from '../assets/values/value-1.png';
import valueImg2 from '../assets/values/value-2.png';
import valueImg3 from '../assets/values/value-3.png';

export type ValueType = {
  id: number,
  name: string,
  descr: string,
  logo: string,
};

export type ArrayValuesType = ValueType[];

export const values: ArrayValuesType = [
  {
    id: 0,
    name: 'Boldness',
    descr: 'We make your design pop and stand out from your competitors. We don’t compromise work — we make things happen!',
    logo: valueImg1,
  },
  {
    id: 1,
    name: 'Balance',
    descr: 'We strive to create an anxiety free space not only for our customers, but also for our employees.',
    logo: valueImg2,
  },
  {
    id: 2,
    name: 'Bamzai!',
    descr: 'A traditional Japanese exclamation meaning “ten thousand years” of long life. To be short and sweet — we make your results last.',
    logo: valueImg3,
  },
];