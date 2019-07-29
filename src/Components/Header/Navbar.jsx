import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import './Logo.css';

const address = {
    logo : './images/Logo.png',
}
const Navbar = () => {
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                variant="h6" noWrap
                >
                    <img className='logo' src={address.logo} />
                </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}  

export default Navbar;