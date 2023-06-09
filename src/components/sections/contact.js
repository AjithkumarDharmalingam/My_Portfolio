import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import ContactsIcon from "@mui/icons-material/Contacts";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Box
      sx={{ padding: { lg: "0 5rem", md: "0 5rem", sm: "1em", xs: "1em" } }}
      id="contact"
    >
      <Box>
        <Typography
          sx={{
            color: "#aaa",
            fontSize: "14px",
            fontFamily: "Poppins",
            display: "flex",
            alignItems: "center"
          }}
        >
          REACH OUT TO ME
          <hr
            style={{
              width: "10%",
              margin: "0px 15px",
              background: "#41c9ff",
              border: "none",
              height: "1px"
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          justifyContent: "space-evenly",
          alignItems: "baseline",
          paddingBlock: "40px",
          paddingInline: "2em"
        }}
      >
        <Stack
          spacing={{ lg: 4, md: 4, sm: 3, xs: 3 }}
          sx={{ width: { lg: "50%", md: "50%", sm: "50%", xs: "100%" } }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Poppins",
              fontSize: { lg: "2.5rem", md: "2.5rem", sm: "1rem", xs: "1rem" },
              fontWeight: "bold",
              mt: 2,
              textTransform: "capitalize",
              fontWeight: "bold",
              textAlign: { lg: "left", md: "left", sm: "left", xs: "center" }
            }}
          >
            Contact Me
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TelegramIcon sx={{ color: "#ff004f" }} />
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
              }}
            >
              ajithkumarbe97@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <ContactsIcon sx={{ color: "#ff004f" }} />
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
              }}
            >
              8220782876
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <LocationOnIcon sx={{ color: "#ff004f" }} />
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
              }}
            >
              Namakkal, India
            </Typography>
          </Box>
          <Button
            sx={{
              background: "#ff004f",
              width: "fit-content",
              color: "#fff",
              width: { lg: "30%", md: "30%", sm: "50%", xs: "100%" },
              textTransform: "capitalize",
              fontFamily: "Poppins",
              padding: "10px"
            }}
          >
            Download CV
          </Button>
        </Stack>
        <Stack
          sx={{
            width: { lg: "50%", md: "50%", sm: "50%", xs: "100%" },
            mt: { xs: 3 }
          }}
          spacing={{ lg: 3, md: 3, sm: 2, xs: 2 }}
        >
          <TextField
            placeholder="Your Name"
            size="small"
            sx={{
              background: "#454545",
              ":placeholder": { color: "#838686" },
              borderRadius: "5px"
            }}
          />
          <TextField
            placeholder="Your Email"
            size="small"
            sx={{
              background: "#454545",
              ":placeholder": { color: "#838686" },
              borderRadius: "5px"
            }}
          />

          <TextField 
            placeholder="Your Message"
            size="normal"
            multiline
            rows={3}
            sx={{
              background: "#454545",
              ":placeholder": { color: "#838686" },
              borderRadius: "5px",
            }}
          />
          
          <Button
            sx={{
              background: "#ff004f",
              width: "fit-content",
              color: "#fff",
              width: { lg: "25%", md: "25%", sm: "auto", xs: "auto" },
              textTransform: "capitalize",
              fontFamily: "Poppins",
              padding: "10px"
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
