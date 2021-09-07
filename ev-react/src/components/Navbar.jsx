import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import EmailIcon from '@material-ui/icons/Email';

export default function Navbar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h5">Evelyns Photography</Typography>
        {/* <FacebookIcon className={props.classes.socials} />
        <InstagramIcon className={props.classes.socials} />
        <TwitterIcon className={props.classes.socials} />
        <EmailIcon className={props.classes.socials} /> */}
      </Toolbar>
    </AppBar>
  );
}
