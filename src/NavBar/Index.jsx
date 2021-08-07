import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import { useStyles } from './Styles';
import '../Css/navbar.css';
 const NavBar=()=> {
  const classes = useStyles();
  const [showInput,setShowInput] = useState(false);
  return (
    <div className='row m-0 text-white '>
      <div className='Navbar_container col-lg-6 col-md-6 col-sm-6'>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          Home
        </IconButton>
        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
          <AddIcon />
        </Fab>
        
        <div className='Search_box' onMouseEnter={()=>setShowInput(true)} onMouseLeave={()=>setShowInput(false)}>
          <input type='text' className={`${showInput && 'active'} Search_input_box`} />
          <SearchIcon className="Search_icon" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

{/* <AppBar position="fixed" color="primary" className={classes.appBar}>
<Toolbar>
  <IconButton edge="start" color="inherit" aria-label="open drawer">
      Home
  </IconButton>
  <Fab color="secondary" aria-label="add" className={classes.fabButton}>
    <AddIcon />
  </Fab>
  <IconButton color="inherit">
    <SearchIcon />
  </IconButton>
</Toolbar>
</AppBar> */}