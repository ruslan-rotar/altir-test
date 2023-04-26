import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { RewardItem } from "../../types/RewardItem";

type Props = {
  item: RewardItem
};

const RewardListItem = ({ item }: Props) => {
  return (
    <Card
      sx={{
        border: "none",
        borderBottom: "1px solid #e1e1e1",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label="recipe"></Avatar>}
        title={
          <>
            <b>{item.sender}</b> rewarded by <b>{item.receiver}</b>
          </>
        }
        subheader={item.createdAt}
      />
      <CardContent sx={{ padding: "0 16px 0 72px" }}>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RewardListItem;
