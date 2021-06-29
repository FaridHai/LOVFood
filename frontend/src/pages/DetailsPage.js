import Main from "../components/Main";

export default function DetailsPage() {
  const location = useLocation();
  const nav = useHistory();
  const classes = useStyles();

  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardContent>
          <Title>Titel:</Title>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {location.state.title}
          </Typography>
          <Title>Zutaten:</Title>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {location.state.ingredients
              .map(ingredient => ingredient["name"])
              .join(", ")}
          </Typography>
          <Title>Anleitung:</Title>
          <Typography
            className={classes.text}
            color="textSecondary"
            gutterBottom
          >
            {location.state.instruction}
          </Typography>
          <Title>Dauer:</Title>
          <Typography
            className={classes.text}
            color="textSecondary"
            gutterBottom
          >
            {location.state.duration}
          </Typography>
          <Title>Schwierigkeit:</Title>
          <Typography
            className={classes.text}
            color="textSecondary"
            gutterBottom
          >
            {location.state.level}
          </Typography>
          <Title>Portion:</Title>
          <Typography
            className={classes.text}
            color="textSecondary"
            gutterBottom
          >
            {location.state.portion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            size="small"
            onClick={() => {
              nav.goBack();
            }}
          >
            Zurück
          </Button>
        </CardActions>
      </Card>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  width: 94%;
`;

const Title = styled.h4`
  display: flex;
  margin-top: 20px;
  height: 10%;
  color: white;
`;
