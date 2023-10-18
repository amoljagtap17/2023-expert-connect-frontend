import { Aside } from "@/components/sections";
import { Box } from "@mui/material";

export const drawerWidth = 240;

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
        {children}
      </Box>
    </Box>
  );
}
