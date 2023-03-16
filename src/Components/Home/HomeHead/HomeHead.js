import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React, { Component } from "react";
import Navbar from "../../../Assets/Navbar/Navbar";
import HomeCards from "../HomeCards/HomeCards";
import HomeTrailer from "../HomeTrailer/HomeTrailer";
import './HomeHead.css'
export default class Home_head extends Component {
  render() {
    return (
      <>
        <div className="HomeHead">
          <Box width={"100%"} height={"30%"}>
            <Navbar />
            <Box
              width={"80%"}
              height={"100%"}
              marginLeft={"10%"}
              display={"flex"}
            >
              <Box
                width={"30%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
              >
                <Typography
                  variant="h2"
                  fontSize={"50px"}
                  fontFamily={"Qanelas"}
                  fontWeight={"900"}
                  color={"#fff"}
                >
                  Сейчас в кино
                </Typography>
              </Box>

              <Box width={"50%"} height={"100%"} display={"flex"}>
                <List
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#838D97",
                  }}
                >
                  <ListItem>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Все</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Боевики </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Приключения </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Комедии</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Фантастика </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Триллеры </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Драма </Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <HomeCards />
            {/* <HomeTrailer /> */}
          </Box>
        </div>
      </>
    );
  }
}
