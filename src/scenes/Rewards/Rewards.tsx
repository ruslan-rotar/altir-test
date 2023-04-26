import React, { useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import RewardListItem from "./RewardListItem";
import RewardPopup from "../../common/RewardPopup/RewardPopup";

import { useRewards } from "../../hooks/useRewards";

const userName = "Jane Doe";
const tabs = {
  feed: "feed",
  myRewards: "myRewards",
};

const Rewards = () => {
  const [activeTab, setActiveTab] = useState(tabs.feed);
  const [openPopup, setOpenPopup] = useState(false);

  const { data, loading, error } = useRewards(
    activeTab === tabs.myRewards ? userName : undefined
  );

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };
  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const handleSubmit = (values: any) => {
    console.log(values);
    setOpenPopup(false);
  };
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "80%", margin: "32px auto" }}>
      <Grid container sx={{ padding: 3 }}>
        <Grid item xs={4} sm={3}>
          <Avatar sx={{ width: 72, height: 72 }} />
          <Typography variant="subtitle1" display="block" gutterBottom>
            <b>{userName}</b>
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography variant="subtitle1" display="block" gutterBottom>
            My Reward
          </Typography>
          <div></div>
          <Typography variant="h6" display="block" gutterBottom>
            <b>$250</b>
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Give
          </Typography>
          <div></div>
          <Typography variant="h6" display="block" gutterBottom>
            <b>$100</b>
          </Typography>
        </Grid>
      </Grid>

      <Tabs
        value={activeTab}
        onChange={handleChangeTab}
        aria-label="basic tabs example"
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="Feed" value={tabs.feed} />
        <Tab label="My Rewards" value={tabs.myRewards} />
      </Tabs>

      <Box
        sx={{
          backgroundColor: "#f9f8fd",
          marginTop: 2,
          position: "relative",
        }}
      >
        <Divider />

        <IconButton
          size="large"
          color="secondary"
          sx={{
            border: "1px solid",
            position: "absolute",
            top: "-30px",
            right: "30px",
            backgroundColor: "#fff",
            ":hover": {
              backgroundColor: "#f9f8fd",
            },
          }}
          onClick={handleOpenPopup}
        >
          <AddIcon fontSize="large" />
        </IconButton>

        {loading && (
          <Stack
            sx={{
              minHeight: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <CircularProgress color="secondary" />
          </Stack>
        )}
        {!loading && error && (
          <Alert severity="error">{JSON.stringify(error)}</Alert>
        )}
        {!loading &&
          !error &&
          data?.length > 0 &&
          data.map((item) => <RewardListItem item={item} key={item.id} />)}
      </Box>
      <RewardPopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default Rewards;
