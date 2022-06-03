import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '90vh',
      display:'center',
      marginTop:100,     
    },
    colorText: {
        color: '#5AFF3D',
      },
      container: {
        textAlign: 'center',
      },
      title: {
        color: '#fff',
        fontSize: '4.5rem',
      },
      goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
      },
  }));

