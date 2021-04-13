// Imports
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

// Importer logo
import {ReactComponent as Logo} from './favicon.svg';

// Function export Forside()
export default function Navbar() {
  return (
      <AppBar position="relative" style={{ width: "99%", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", margin: "10px 0px 10px 0px" }}>
        <Toolbar>
          <Link to="/bliv-sikker">
              <Button color="inherit" style={{ fontWeight: 600, textDecoration: "none", color: "white" }}>
                  Kom i sikkerhed!
              </Button>
          </Link>
          <Link to="/læs-mere">
              <Button color="inherit" style={{ fontWeight: 600, textDecoration: "none", color: "white" }}>
                  Læs mere...
              </Button>
          </Link>
          <Link to="/kontakt">
              <Button color="inherit" style={{ fontWeight: 600, textDecoration: "none", color: "white" }}>
                  Kontakt
              </Button>
          </Link>
          <Typography variant="h5" style={{ fontWeight: "bold", flexGrow: 1, textAlign: "right" }} >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  <Logo style={{ width: "30px", height: "30px", verticalAlign: "text-bottom" }} /> A&J SECURITY
              </Link>
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
