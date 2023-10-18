"use client";

// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Rating,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useState } from "react";
import { HeroImage } from "..";

const drawerWidth = 300;

export function Aside() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <HeroImage />
        <Rating
          name="rating"
          value={4}
          readOnly
          sx={{ marginTop: 4, fontSize: 40 }}
        />
      </Box>
      <Divider />
      <List>
        <ListSubheader>Connect for Issues</ListSubheader>
        <ListItem>
          <Link
            href="/dashboard"
            component={NextLink}
            underline="none"
            sx={{ flexGrow: 1 }}
          >
            <ListItemButton>
              <ListItemText primary="All Issues" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/dashboard/issues"
            component={NextLink}
            underline="none"
            sx={{ flexGrow: 1 }}
          >
            <ListItemButton>
              <ListItemText primary="My Issues" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Create Issue" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Connect With Experts
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
