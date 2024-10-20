export type Props = {
  children: string;
  isGreen?: boolean;
};

type Todo = {
  id: string;
};

export type Test = {
  description: string;
  isCondition: boolean;
  count: number;
  options: {
    src: string;
    size: number;
  };
  onChange: (value: string) => string;
  list: Todo[];
  uncertainText: string | undefined | null;
  nonRequiredText?: string;
};
