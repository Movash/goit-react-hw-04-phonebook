import { styled } from 'styled-components';

export const List = styled('ul')(() => {
  return {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    '& li': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 5,
      marginBottom: 5,
      '& button': {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        color: '#2E2F42',
        border: '1px solid #ff2f00',
        backgroundColor: '#ff9e88',
        borderRadius: '5px',
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        '&:hover': {
          color: '#FFFFFF',
          backgroundColor: '#FF5733',
          transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  };
});
