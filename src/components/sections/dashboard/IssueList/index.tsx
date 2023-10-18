import { Grid } from "@mui/material";
import { IssueCard } from "..";

export function IssueList() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <IssueCard />
      </Grid>
      <Grid item xs={12}>
        <IssueCard />
      </Grid>
      <Grid item xs={12}>
        <IssueCard />
      </Grid>
    </Grid>
  );
}
