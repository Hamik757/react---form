import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";

const ProfileCardMUI = ({ avatar, name, bio }) => {
  return (
    <Card sx={{ width: 260, borderRadius: 3, textAlign: "center" }}>
      <CardContent>
        <img
          src={avatar}
          style={{ width: 100, height: 100, borderRadius: "50%" }}
        />
        <Typography variant="h6" sx={{ mt: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2">{bio}</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Follow
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCardMUI;