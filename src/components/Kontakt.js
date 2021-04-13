// Imports
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles, List, ListItem, ListItemIcon, ListItemText, Paper, Box } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Link } from "react-router-dom";

// Importer kort
import MapChart from "./MapChart";

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
export default function Kontakt() {

	const classes = useStyles();

	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

			<Paper elevation={3} style={{ padding: "0.8rem", width: "90%", height:"100%", textAlign: "center", margin: "10px", backgroundColor: "#c4c4c4"  }}>
				<h1 style={{ marginTop: "5px", fontWeight: 900 }}>
					KONTAKT.
				</h1>

				<p style={{fontSize:"1.5rem"}}>
					Giver det stadig ingen mening? <br />
					Har du brug for rådgivning til færdsel på nettet? <br />
					Du er altid velkommen til at kontakte os. Se kontakt info herunder, vi glæder os til at høre fra dig.
				</p>

				<Box display="flex">

					<Box display="flex" width="50%" style={{ flexFlow: "column", flexWrap: "wrap" }}>
						<h1>Kontakt Info</h1>
						<Box display="flex" style={{ textAlign: "right", fontSize: "22px", justifyContent: "flex-end" }}>
							<div><b>E-Mail:</b></div>
							<div>
								<Link to="#" onClick={() => window.location.href = 'mailto:trash@AJSECURITY.net'}>
									trash@AJSECURITY.net
								</Link>
							</div>
						</Box>
						<Box display="flex" style={{ textAlign: "right", fontSize: "22px", justifyContent: "flex-end" }}>
							<div><b>Tlf:</b></div>
							<div>
								<Link to="#" onClick={() => window.location.href = 'tel:77652222'}>
									+45 77 65 22 22
								</Link>
							</div>
						</Box>
						<Box display="flex" style={{ textAlign: "right", fontSize: "22px", justifyContent: "flex-end" }}>
							<div><b>Adresse:</b></div>
							<div>Viborggade 5, 8800 Viborg</div>
						</Box>
					</Box>

					<Box width="50%">
						<MapChart />
					</Box>

				</Box>

				<Button onClick={() => window.location.href = 'mailto:trash@AJSECURITY.net'} color="secondary" variant="contained">Kontakt nu!</Button>


			</Paper>

		</div>
	);
}
