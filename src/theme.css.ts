import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    brand: 'red',
  },
  font: {
    body: 'arial',
  },
});
