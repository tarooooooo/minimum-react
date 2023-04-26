import * as z from 'zod';

export const zodRequiredString = (attrName: string, maxLength: number) => {
  return z
    .string()
    .min(1, { message: `${attrName}の入力をお願いします。` })
    .max(maxLength, { message: `${attrName}は${maxLength}文字以内で入力をお願いします。` });
};

export const zodRequiredNumber = (attrName: string, min: number, max: number) => {
  return z
    .number()
    .min(min, { message: `${attrName}は${min}以上でお願いします。` })
    .max(max, { message: `${attrName}は${max}以内でお願いします。` });
};