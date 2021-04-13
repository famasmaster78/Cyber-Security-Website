// Imports
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles,Paper, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import st from './forside.css'
import { Link } from "react-router-dom";
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
		<div  style={{display:"flex", flexFlow:"row", justifyContent:"center"}}>
			<div style={{ display: "inline-flex", justifyContent: "center",verticalAlign: "middle"  }}>

				<div style= {st.div}>
				<Paper elevation={3} style={{ padding: "0.8rem", width: "45rem",height:"38rem", textAlign: "center", margin: "10px" }}>
					<h1 style={{ marginTop: "5px", fontWeight: 900 }}>
						KOM I SIKKERHED NU!
					</h1>

					<p style={{fontSize:"1.5rem"}}>
						Dine filer er i fare medmindre du handler med det samme! <br /><br />
						Der er hackere ude på at stjæle dine oplysninger lige nu! <br /><br />
						De kan tage dine filer som gidsel indtil du betaler en hæftig sum for at få dem tilbage.
					</p>

					<Link to="bliv-sikker"><Button color="secondary" variant="contained">Kom i sikkerhed!	</Button></Link>


				</Paper>

				</div>
			</div>

			<div style={{ display: "inline-flex", justifyContent: "center", verticalAlign: "middle" }}>

				<div style= {st.div}>
				<Paper elevation={3} style={{ padding: "0.8rem", width: "45rem",height:"38rem", textAlign: "center", margin: "10px" }}>
					<h1 style={{ marginTop: "5px", fontWeight: 900 }}>
						HVAD STÅR PÅ SPIL?
					</h1>

					<p style={{fontSize:"1.5rem"}}>
						Alle dine filer kan gå tabt, hvis du ikke holder dig sikker!<br /> <br />
						Dine bankoplysninger kan blive opsnappet og misbrugt <br /> <br />
						Din computer kon være inficeret med virus og kan holde øje med alt hvad du gør!
					</p>
					<Link to="/læs-mere">
					<Button variant="contained" color="secondary">Læs mere</Button>
					</Link>
				</Paper>

				</div>
			</div>
	</div>
	);

}
