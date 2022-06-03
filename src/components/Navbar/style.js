import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh',
    fontFamily: 'Nunito',
    
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  link:{
    textDecoration: 'none',
     color: 'white'
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
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