// Imports
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles, List, ListItem, ListItemIcon, ListItemText, Paper, AccordionDetails, AccordionSummary, Accordion } from "@material-ui/core";
import { CenterFocusStrong } from "@material-ui/icons";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

// Array til de data som skal vises i højre side.
const accordionContent = [
	{
		"Title": "Hvad er space security?",
		"Body": "<p>Space security handler om at holde sig sikker når vi udvider vores horisont til rummet.</p><p>Der vil komme nye farer som du skal være opmærksomme på og have metoder til at bestkytte dig mod.</p><p>Vi vil forsøge at give dig de bedste tips til dette på denne hjemmeside.</p>"
	},
	{
		"Title": "Kinetic physical",
		"Body": "Det er noget vigtigt!"
	}
]

// Function export Forside()
export default function LæsMere() {

	const classes = useStyles();

	return (
		<div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>

			<h1 style={{ width: "100%", textAlign: "center" }}>
				Hvad står på spil?
			</h1>

			<Paper elevation={3} style={{ padding: "0.8rem", width: "30rem", textAlign: "center", margin: "10px" }}>
				<h2 style={{ marginTop: "5px" }}>
					IT Sikkerhed
				</h2>

				<p>
					Det er vigtigt at holde sig sikker på internettet. Der er mange trusler som gerne vil misbruge din brug af internettet eller din uvidenhed omkring internettet.

					<br /><br />

					For at holde sig sikker skal man gerne kunne skelne mellem hvad er rigtigt og hvad er bare et forsøg på at tage røven på dig.

					<br /><br />

					Det handler om at være kildekrisk, ligesom når man læser nyhederne. Kan vi stole på hvad vi ser eller læser?
				</p>
			</Paper>

			<Paper elevation={3} style={{ padding: "0.8rem", width: "30rem", textAlign: "center", margin: "10px" }}>
				<h2 style={{ marginTop: "5px" }}>
					FAQ
				</h2>

				{accordionContent.map((content) => {

					console.log("Content", content);

					return(
						<Accordion style={{ marginTop: "10px" }}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography><b>{content.Title}</b></Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ textAlign: "left" }}>
									{content.Body}
								</Typography>
							</AccordionDetails>
						</Accordion>
					)

				})}


			</Paper>

		</div>
	);
}
