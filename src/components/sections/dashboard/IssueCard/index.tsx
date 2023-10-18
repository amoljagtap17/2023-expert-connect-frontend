import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export function IssueCard() {
  return (
    <Card variant="outlined" sx={{ padding: 2 }}>
      <CardHeader
        title="something went wrong!"
        subheader="John Doe"
        avatar={<Avatar>JD</Avatar>}
      />
      <CardContent sx={{ minHeight: 150 }}>
        <Stack spacing={1} direction="row" marginBottom={2}>
          <Chip variant="outlined" label="react" />
          <Chip variant="outlined" label="typescript" />
        </Stack>
        <Typography variant="body2" color="text.secondary">
          came across an error for which need immediate attention
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
