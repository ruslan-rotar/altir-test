import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  FormLabel,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (values: StateValues) => void;
};
type StateValues = {
  receiver: string;
  quantity: string;
  description: string;
};

const RewardPopup = ({ open, handleClose, handleSubmit }: Props) => {
  const [values, setValues] = useState<StateValues>({
    receiver: "",
    quantity: "",
    description: "",
  });

  const handleChange = (name: string) => (e: { target: { value: string } }) =>
    setValues({ ...values, [name]: e.target.value });
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"New Reward"}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ minWidth: "300px" }}>
          <FormControl>
            <FormLabel>To</FormLabel>
            <TextField
              name="receiver"
              id="outlined-To"
              placeholder="Alex Brown"
              color="secondary"
              value={values.receiver}
              onChange={handleChange("receiver")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Reward</FormLabel>
            <TextField
              name="quantity"
              id="outlined-Reward"
              placeholder="$30"
              color="secondary"
              value={values.quantity}
              onChange={handleChange("quantity")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Why?</FormLabel>
            <TextareaAutosize
              name="description"
              minRows={3}
              color="secondary"
              style={{ outlineColor: "#9c27b0" }}
              value={values.description}
              onChange={handleChange("description")}
            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} color="error">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => handleSubmit(values)}
          color="secondary"
        >
          Reward
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RewardPopup;
