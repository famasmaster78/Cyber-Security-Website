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

			<Card className={classes.root} style={{ transform: "scale(1.1)" }}  onClick={() => window.location.href = "/kontakt"}>
				<CardActionArea>
					<CardMedia
					className={classes.media}
					image="https://image.freepik.com/vektoren-kostenlos/premium-qualitaet-schriftzug-banner_28633-267.jpg"
					title="Premium"
					/>
					<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Premium
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						<List component="nav" dense={true} aria-label="contacts">
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="12 beskyttede enheder" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="Beskyttelse mod extreme aliens" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="Beskyttelse mod 6 space threats" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="Staten holder sikker backup af dine data" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="Cute alien sticker" />
							</ListItem>
						</List>
						<span style={{ textAlign: "center", display: "block", fontSize: "18px" }}>Kun 899kr<span style={{ fontSize: "9px" }}>/md</span></span>
					</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button onClick={() => window.location.href = "/kontakt"} size="small" color="secondary" variant="contained" style={{ flexGrow: 1, fontWeight: "bold" }}>
						Bliv ekstra sikker!
					</Button>
				</CardActions>
			</Card>

			<Card className={classes.root} onClick={() => window.location.href = "/kontakt"}>
				<CardActionArea>
					<CardMedia
					className={classes.media}
					image="https://marltonag.org/wp-content/uploads/2018/06/1.png"
					title="Premium"
					/>
					<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Basic
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						<List component="nav" dense={true} aria-label="contacts">
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="3 beskyttede enheder" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="Beskyttelse mod aliens" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="Beskyttelse mod 2 space threats" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<FiberManualRecordIcon style={{ fontSize: "small" }} />
								</ListItemIcon>
								<ListItemText primary="Staten holder backup af dine data" />
							</ListItem>
						</List>
						<span style={{ textAlign: "center", display: "block" }}>Kun 599kr<span style={{ fontSize: "9px" }}>/md</span></span>
					</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button onClick={() => window.location.href = "/kontakt"} size="small" color="secondary" variant="contained" style={{ flexGrow: 1, fontWeight: "bold" }}>
						Bliv sikker!
					</Button>
				</CardActions>
			</Card>

		</div>
	);
}
