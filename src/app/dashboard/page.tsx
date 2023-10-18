import { IssueList } from "@/components/sections";
import { Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Issues
      </Typography>
      <IssueList />
    </>
  );
}
