import { styled } from 'styled-components';

export const Form = styled('form')(() => {
  return {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 350,
    border: '2px solid #000',
    gap: 20,
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      '& label': {
        marginBottom: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      '& input': {
        width: 200,
      },
    },
    '& button': {
      marginBottom: 20,
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      color: '#2E2F42',
      border: '1px solid #4d6dfa',
      backgroundColor: '#99acff',
      borderRadius: '5px',
      padding: '5px 15px',
      boxShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#2f28ff',
        transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  };
});