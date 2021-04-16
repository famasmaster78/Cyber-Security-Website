// Imports
import React from 'react';
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
		"Body": "Space security handler om at holde sig sikker når vi udvider vores  digitale horisont til rummet.\n\n Der vil komme nye farer som du skal være opmærksomme på og have metoder til at bestkytte dig mod. \n\n Vi vil forsøge at forklarer de mulige farer bedst muligt. Der er 5 sikkerhedstrulser i rummet, og du kan læse mere om hver enkelt nedenunder.",
		"id": 1
	},
	{
		"Title": "Kinetic physical",
		"Body": "Direct strikes against space infrastructure and assets. \n\n Dette kunne være en anden satellite man med vilje støder ind i en anden. Eller det kan være en Anti Satellite Systems (ASATs).\n\n Det kan også være en meteor der rammer satelitten. Generalt alt der fysisk kan ramme og beskadige den",
		"id" : 2
	},
	{
		"Title": "Non-kinetic physical",
		"Body": "Gør skade til Space Assets på lang afstand. Eks: elektromagnetisk pulser (EMP), en skarp laser mod sensorer eller anden fysisk skade som ikke er pga. ballistik skade",
		"id" : 3
	},
	{
		"Title": "Electronic",
		"Body": "Damage transmission and reception of data (jamming). Eller udsendelse af falske data (Spoofing)",
		"id" : 4
	},
	{
		"Title": "Cyber",
		"Body": "Direkte indsendelse af falske data. Uautoriseret monitoring af trafik eller aktiviteter. \n\n Hvis det bliver hacket, er det på dette trusels niveaus",
		"id" : 5
	},
	{
		"Title": "Earth-based",
		"Body": "Skade til fysisk udstyr på jorden. Ødelægger supply chain. Ødelæggelse af udstyr til afsendelse / modtagelse af data eller ødelæggelse af storage af disse data.",
		"id" : 6
	},
	{
		"Title": "Logisk Sikkerhed",
		"Body": "Også kaldet programmeret sikkerhed. Passwords / Kodeord osv.",
		"id" : 7
	},
	{
		"Title": "Fyskisk Sikkerhed",
		"Body": "Det er alt sådan noget som døre, hegn, vagter, lås med nøle og andre fysiske ting, som holder det sikkert",
		"id" : 8
	},
	{
		"Title": "Fortrolighed, Integritet & Tilgængelighed",
		"Body": "Fortrolighed. \n Kun personer der er autoriseret kan se og læse dette indhold. Eks: kun bankrådgiveren og brugeren har adgang til banko-konto. \n\n Integritet. \n Kun personder og systemer, der er autoriseret til at læse eller ændre denne information har adgang. Eks: bank saldo er som den skal være, den er ikke blevet pillet ved. \n\n Tilgængelighed. \n Alle personer som har adgang til disse informationer har også muligheden for at tilgå disse informationer. Eks: Kunden har mulighed for at tilgå hendes konto når hun har brug for det.",
		"id" : 9
	}
]

// Function export Forside()
export default function LæsMere() {

	const classes = useStyles();
	const [expanded, setExpanded] =React.useState(false)
	const handleChange = (panel) => (event,isExpanded) => {setExpanded(isExpanded ? panel : false );};
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

					// console.log("Content", content);
					return(
						<Accordion expanded={expanded === content.id} onChange={handleChange(content.id)} style={{ marginTop: "10px" }}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography><b>{content.Title}</b></Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography style={{ textAlign: "left", whiteSpace: "pre-line" }}>
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
