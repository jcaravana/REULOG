import { makeStyles } from '@mui/styles';
import {
  Dialog,
  DialogContent,
  Typography,
  Toolbar,
  AppBar,
  CircularProgress,
} from '@mui/material';

import { green, red } from '@mui/material/colors';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  wrapper: {
    margin: theme.spacing(1),

    position: 'relative',
  },
  buttonSpace: {
    margin: theme.spacing(3),
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  fab: {
    margin: 0,
    top: 20,
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    color: '#eaeaf0',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  fabReprovar: {
    margin: 0,
    top: 10,
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    color: '#eaeaf0',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  fabAprovar: {
    margin: 0,
    top: 10,
    right: 160,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    color: '#eaeaf0',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function ModalLoading(props) {
  const modalOpen = useSelector(({ fuse }) => fuse.modalLoading.open);
  const titulo = useSelector(({ fuse }) => fuse.modalLoading.titulo);
  const mensagem = useSelector(({ fuse }) => fuse.modalLoading.mensagem);

  return (
    <>
      <Dialog
        classes={{
          paper: 'm-10',
        }}
        open={modalOpen}
        /* onClose={closeComposeDialog} */
        fullWidth
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <AppBar position="static" elevation={1} className="items-center text-center">
          <Toolbar className="flex text-center items-center">
            <>
              <Typography variant="h6" color="inherit" align="center">
                {titulo}
              </Typography>
            </>
          </Toolbar>
        </AppBar>

        <DialogContent classes={{ root: 'p-24' }}>
          <div className="flex justify-center items-center">
            <CircularProgress size={60} />
            <Typography variant="subtitle1" color="inherit" className="ml-16" align="center">
              {mensagem}
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ModalLoading;
