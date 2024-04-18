import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../assets/logo.png';


function Navbar() {
    const [,] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [menuState, setMenuState] = useState({});

    const handleMenuClick = (menu) => (event) => {
        setMenuState({ ...menuState, [menu]: event.currentTarget });
    };

    const handleMenuClose = (menu) => () => {
        setMenuState({ ...menuState, [menu]: null });
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItemButton component={RouterLink} to="/">
                    <ListItemText primary="Accueil" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/about-us">
                    <ListItemText primary="À propos de nous" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/services">
                    <ListItemText primary="Prestations de Service" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/approach">
                    <ListItemText primary="Approche" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/team">
                    <ListItemText primary="Équipe" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/contact">
                    <ListItemText primary="Contactez-nous" />
                </ListItemButton>
            </List>
        </div>
    );

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(true)}
                sx={{ position: 'fixed', top: 0, left: 0 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerContent}
            </Drawer>
            <AppBar position="static" sx={{ backgroundColor: '#000000', display: { xs: 'none', sm: 'block' } }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center', }}>
                    <img src={logo} alt="Logo" style={{ height: '85px' }} />
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '30px', }}>
                        <Button color="inherit" component={RouterLink} to="/">Accueil</Button>
                        <Button color="inherit" endIcon={<ArrowDropDownIcon />} onClick={handleMenuClick('aboutUs')}>À propos de nous</Button>
                        <Menu
                            id="about-us-menu"
                            anchorEl={menuState.aboutUs}
                            open={Boolean(menuState.aboutUs)}
                            onClose={handleMenuClose('aboutUs')}
                        >
                            <MenuItem onClick={handleMenuClose('aboutUs')} component={RouterLink} to="/about-us/investors">Investisseurs</MenuItem>
                            <MenuItem onClick={handleMenuClose('aboutUs')} component={RouterLink} to="/about-us/history">Notre Histoire</MenuItem>
                        </Menu>
                        <Button color="inherit" endIcon={<ArrowDropDownIcon />} onClick={handleMenuClick('services')}>Services</Button>
                        <Menu
                            id="services-menu"
                            anchorEl={menuState.services}
                            open={Boolean(menuState.services)}
                            onClose={handleMenuClose('services')}
                        >
                            <MenuItem onClick={handleMenuClose('services')} component={RouterLink} to="/services/family-office">Family Office</MenuItem>
                            <MenuItem onClick={handleMenuClose('services')} component={RouterLink} to="/services/wealth-management">Wealth Management</MenuItem>
                        </Menu>
                        <Button color="inherit" endIcon={<ArrowDropDownIcon />} onClick={handleMenuClick('approach')}>Approche</Button>
                        <Menu
                            id="approach-menu"
                            anchorEl={menuState.approach}
                            open={Boolean(menuState.approach)}
                            onClose={handleMenuClose('approach')}
                        >
                            <MenuItem onClick={handleMenuClose('approach')} component={RouterLink} to="/approach/clients">Clients</MenuItem>
                        </Menu>
                        <Button color="inherit" component={RouterLink} to="/team">Équipe</Button>
                        <Button color="inherit" component={RouterLink} to="/contact">Contactez-nous</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
