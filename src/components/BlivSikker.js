// Imports
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

/* Styling */
const useStyles = makeStyles({
	root: {
	  maxWidth: 345,
	  margin: "2rem",
	},
	media: {
	  height: 140,
	},
  });

// Function export Forside()
export default function BlivSikker() {

	const classes = useStyles();

	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

			Bliv sikker!

		</div>
	);
}
