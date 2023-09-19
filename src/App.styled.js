import { styled } from 'styled-components';
import 'modern-normalize'

export const AppCont = styled('div')(() => {
  return {
    marginTop: 20,
    '& h1': {
      textAlign: 'center',
    },
    '& h2': {
      textAlign: 'center',
    },
  };
});
