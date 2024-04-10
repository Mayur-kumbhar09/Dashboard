import React from "react";
import { Grid, styled, Paper, Box, TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Setting = () => {
  return (
    <div>
      <Grid container spacing={3} width="100%">
        <Grid item xs={12}>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "100%",
              }}
            >

              <TextField
                id="standard-basic"
                label="Search"
                variant="outlined"
                sx={{ width: "100%"}}
              />
              <Box
                sx={{
                  width: "25%",
                }}
              >
                <List xs={{ width: "95%" }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="Inbox"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Drafts" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Setting;
