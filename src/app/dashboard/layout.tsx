import { Aside, TopRatedList } from "@/components/sections";
import { Box, Container, Stack } from "@mui/material";

export const drawerWidth = 300;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: { sm: "flex" } }}>
      <Aside />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          left: { sm: `${drawerWidth}px` },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <TopRatedList />
            <Box>{children}</Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
