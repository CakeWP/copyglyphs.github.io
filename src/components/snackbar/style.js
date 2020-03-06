import styled from 'styled-components';
import SnackbarBase from '@material-ui/core/Snackbar';
import SnackbarContentBase from '@material-ui/core/SnackbarContent';

export const Snackbar = styled(SnackbarBase)`
  /* >>> */
`;
export const SnackbarContent = styled(SnackbarContentBase)`
  /* >>> */
  && {
    background: ${props =>
      props.status === 'success' ? props.theme.success : props.theme.error};
	padding: 0.5rem 1.25rem;
	justify-content: center;
	min-width: auto;
  }
`;

export const InfoWrapper = styled.span`
  display: flex;
  align-items: center;
`;

