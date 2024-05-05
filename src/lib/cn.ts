import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

type ClassValue =
  | string
  | number
  | ClassDictionary
  | ClassArray
  | undefined
  | null
  | false;

interface ClassDictionary {
  [id: string]: never;
}

interface ClassArray extends Array<ClassValue> {}
export const cn = (...classname: ClassValue[]) => {
  return twMerge(clsx(classname));
};
