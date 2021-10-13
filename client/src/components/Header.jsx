import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Context from '../context';
import useStyles from '../useStyles';

export default function Header() {
  const {
    setDisplayUserRecipes,
    setShowShoppingModal,
    logout,
    displayUserRecipes,
    username,
  } = useContext(Context);
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Typography variant="h4" component="h1">
          {'MealPreppers'}
        </Typography>
        <ButtonGroup variant="text" aria-label="text primary button group">
          <Button onClick={() => setDisplayUserRecipes(!displayUserRecipes)}>
            {displayUserRecipes ? 'Back' : 'Your Recipes'}
          </Button>
          <Button onClick={() => setShowShoppingModal(true)}>
            Shopping List
          </Button>
          {username
            ? <Button onClick={logout}>Logout</Button>
            : null
          }
        </ButtonGroup>
      </Toolbar>
    </AppBar>
    // <div className="header">
    //     <h1 className="title">Meal Preppers</h1>
    //     <button type="button" onClick={() => setDisplayUserRecipes(!displayUserRecipes)}>
    //       {displayUserRecipes ? 'Back' : 'Your Recipes'}
    //     </button>
    //     <button type="button" onClick={() => setShowShoppingModal(true)}>
    //       Your Shopping List
    //     </button>
    //     <span>
    //       You are logged in as:
    //       <br />
    //       {` ${username}`}
    //       <br />
    //       <span className="logout" onClick={logout}>Logout?</span>
    //     </span>
    //   </div>
  );
}
