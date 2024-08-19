import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userProfile } from "../redux/slice/UserProfileSlice";

const UserProfile = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.login.response);

  useSelector((state) => {
    console.log("state", state);
  });

  useEffect(() => {
    if (userToken) {
      console.log("userTokkken", userToken);
      dispatch(userProfile(userToken));
    }
  }, [dispatch, userToken]);

  const userProfileData = useSelector((state) => state.userProfile.response);

  console.log("userProfileData", userProfileData);

  return (
    <div className="bg-red-300 min-h-screen py-10">
      {userProfile && (
        <Card sx={{ display: "flex" }} className="max-w-[400px] mx-auto">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" className="capitalize">
                {`${userProfileData.first_name} ${userProfileData.last_name}`}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {userProfileData.email}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Live from space album cover"
          />
        </Card>
      )}
    </div>
  );
};

export default UserProfile;
