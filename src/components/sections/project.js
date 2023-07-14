import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <Box
      sx={{ padding: { lg: "0 5rem", md: "0 5rem", sm: "1em", xs: "1em" } }}
      id="project"
    >
      <Typography
        sx={{
          color: "#aaa",
          fontSize: "14px",
          fontFamily: "Poppins",
          display: "flex",
          alignItems: "center" 
        }}
      >
        PROJECTS{" "}
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: { lg: "5rem", md: "5rem", sm: "5rem", xs: "5rem  0" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#0f0f0f",
            borderRadius: "1rem",
            margin: "2rem",
            minHeight: "370px",
            width: "450px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          <Stack spacing={1}>
            <img
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "1rem 1rem 0 0",
                height: "12rem",
                width: "100%",
                fontWeight: "700"
              }}
              alt="img"
              src="https://img.freepik.com/free-psd/youtube-video-player-mockup-3d-style_204659-77.jpg?w=740"
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Youtube Clone
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "max-content"
                },
                gap: { lg: 0, md: 0, sm: 0, xs: "10px" }
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/Youtube_clone.git")}
              >
                Github FE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://comforting-donut-299aa8.netlify.app/")}
              >
                View Site
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
                </svg>
              </Button>

            </Box>
          </Stack>
          <Box sx={{ marginTop: "10px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.1rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              Youtube contains standard features that enables
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.1rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              you to launch your own video sharing website instanly.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "10px"
              }}
            >
              <Typography
                sx={{
                  color: "rgb(65, 201, 255)",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                TECH USED :{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#d18d0d",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                JAVASCRIPT, HTML, CSS
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#0f0f0f",
            borderRadius: "1rem",
            margin: "2rem",
            minHeight: "390px",
            width: "450px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          <Stack spacing={1}>
            <img
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "1rem 1rem 0 0",
                height: "12rem",
                width: "100%",
                fontWeight: "700"
              }}
              alt="img"
              src="https://static.javatpoint.com/blog/images/student-management-system.png"
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Student Management System
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "max-content"
                },
                gap: { lg: 0, md: 0, sm: 0, xs: "10px" }
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/studentMentor-fe.git")}
              >
                Github FE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://heroic-sprinkles-c88613.netlify.app")}
              >
                View Site
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/studentMentor.git")}
              >
                Github BE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>
            </Box>
          </Stack>
          <Box sx={{ marginTop: "10px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.1rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              Student Management Project is helpful for students.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.1rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              In the current system, all the activities are done
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "10px"
              }}
            >
              <Typography
                sx={{
                  color: "rgb(65, 201, 255)",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                TECH USED :{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#d18d0d",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                REACT, NODE, EXPRESS JS, MONGODB
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#0f0f0f",
            borderRadius: "1rem",
            margin: "2rem",
            minHeight: "390px",
            width: "450px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          <Stack spacing={1}>
            <img
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "1rem 1rem 0 0",
                height: "12rem",
                width: "100%",
                fontWeight: "700"
              }}
              alt="img"
              src="data:image/jpeg;base64,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"
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Shopify
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "max-content"
                },
                gap: { lg: 0, md: 0, sm: 0, xs: "10px" }
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/passwordReset-fe.git")}
              >
                Github FE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://dynamic-beignet-22a6ac.netlify.app")}
              >
                View Site
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/passwordReset-be.git")}
              >
                Github BE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>
            </Box>
          </Stack>
          <Box sx={{ marginTop: "10px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.1rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
               Customize Your Store With Our Website Builder. 
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.1rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              No.1 eCommerce Platform For All Businesses
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "10px"
              }}
            >
              <Typography
                sx={{
                  color: "rgb(65, 201, 255)",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                TECH USED :{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#d18d0d",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                REACT, NODE, EXPRESS JS, MONGODB
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#0f0f0f",
            borderRadius: "1rem",
            margin: "2rem",
            minHeight: "390px",
            width: "450px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          <Stack spacing={1}>
            <img
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "1rem 1rem 0 0",
                height: "12rem",
                width: "100%",
                fontWeight: "700"
              }}
              alt="img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://assets.designhill.com/design-blog/wp-content/uploads/2020/10/Quicker-Query-Resolution.jpg"
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Query Resolving System
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "max-content"
                },
                gap: { lg: 0, md: 0, sm: 0, xs: "10px" }
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/ticketResolving-fe.git")}
              >
                Github FE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://gleeful-khapse-2c5cb2.netlify.app/")}
              >
                View Site
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/ticketResolving-be.git")}
              >
                Github BE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>
            </Box>
          </Stack>
          <Box sx={{ marginTop: "10px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.1rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              This is Fullstack MERN website.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.1rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              This application is used to resolve the user queries.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "10px"
              }}
            >
              <Typography
                sx={{
                  color: "rgb(65, 201, 255)",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                TECH USED :{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#d18d0d",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                REACT, NODE, EXPRESS JS, MONGODB
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
