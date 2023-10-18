import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Typography,
} from "@mui/material";

export function TopRatedCard() {
  return (
    <Card variant="outlined">
      <CardMedia
        sx={{ height: 250 }}
        image="/images/top-rated-card-img.jpg"
        title="top rated"
      />
      <CardContent sx={{ minHeight: 150 }}>
        <Typography gutterBottom variant="h5" component="div">
          John Doe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Expert in React and other related technologies
        </Typography>
        <Rating
          name="rating"
          value={4}
          readOnly
          sx={{ marginTop: 4, fontSize: 40 }}
        />
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small">Visit Profile</Button>
      </CardActions>
    </Card>
  );
}
