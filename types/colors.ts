export type ValueOf<T> = T[keyof T];
export const Colors = {
  primary: 'primary',
} as const;

export type Colors = ValueOf<typeof Colors>;
