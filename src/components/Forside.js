// Imports
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles,Paper, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import st from './forside.css';
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
export default function Forside() {
	const classes = useStyles();

	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

			<div style= {st.div}>
			<Paper elevation={3} style={{ padding: "0.8rem", width: "30rem", textAlign: "center", margin: "10px" }}>
				<h2 style={{ marginTop: "5px", fontWeight: 900 }}>
					KOM I SIKKERHED NU!
				</h2>

				<p>
					Dine filer er i fare medmindre du handler med det samme! <br /><br />
					Der er hackere ude på at stjæle dine oplysninger lige nu! <br /><br />
					De kan tage dine filer som gidsel indtil du betaler en hæftig sum for at få dem tilbage.
				</p>
				<Button variant="contained">Kom i sikkerhed!</Button>
			</Paper>
			
			</div>
		</div>
	);

}
