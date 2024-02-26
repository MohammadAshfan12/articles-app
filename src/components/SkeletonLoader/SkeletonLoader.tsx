import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        width={250}
        height={120}
        sx={{ width: "100%", maxWidth: 345 }}
      />
    </Stack>
  );
}
