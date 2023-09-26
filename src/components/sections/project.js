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
              src="data:image/jpeg;base64,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sw8FtTm29lnPVpqK2oorTY+s9Iw2A2sY/gj9AZQfMZT4kqT4LM4B2Z1mNHbyB8ezkVV+G11Xs9P6NVxgwvcTcXII0aZYz2i1rtOvLlfWeCmEjc0ErXsdYizrg9xBGhXjvaOEeHrSUsoybcXu5rk1wZ6fA14YigoN55fnzOpidfnjPBdoCLkc/wDhcmgOUueb2awk/X+4r1HQSDmQ0cjqoptXtI9rvQMPbne8ZXvb0nEuFixlvjW5ns8iRhh8PKvLoqWd9XwW+79XOitWpYWk8zV3dYKzF62oqaiFjo8zncM9UyyvzNFh1gAHc9DcK+KLBoomhthYDRrQGsHqAChe6nZaTD4bS24jn8SQA3DbABjLjmdLn1k8+ashe4m+jShDJW/C7jx9OKqNzlnnl+77zwxoaLAAD1L2iLE6QiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAiO2Ox8OJRFj2G18zSywfG61rtvpb1Krq/dNU0x4lJVfCA9HOx0LvKRpOvkPJX+vDmg6EA+K1VXKzVzB0bO8XbyKAj3dYniD719U0ADo3LpneTBZrR6739SnGxW7eLD38S73yWtxJAGhoPMMZ2E95J+tWMyJreq1o8AAsiKooq0FZbuXZkg6UpdeV/XHUxxRtYA1osFkRFkbhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q=="
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Tournament System
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
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/Tournamentsystem_fe.git")}
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
                onClick={() => window.open("https://lucent-puppy-5e14b7.netlify.app/")}
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
                onClick={() => window.open("https://github.com/AjithkumarDharmalingam/Tournamentsystem_be.git")}
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
               The group tournament system
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
              common structure used in team sports.
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
                REDUX, NODE, EXPRESS JS, MONGODB
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
