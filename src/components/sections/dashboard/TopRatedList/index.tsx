import { Grid } from "@mui/material";
import { TopRatedCard } from "..";

export function TopRatedList() {
  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={12} md={6} lg={4} marginLeft="-32px">
        <TopRatedCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TopRatedCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TopRatedCard />
      </Grid>
    </Grid>
  );
}
