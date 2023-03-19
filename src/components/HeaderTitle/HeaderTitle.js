import { Typography, Box } from "@mui/material";

const HeaderTitle = ({ title, subtitle }) => {
  return (
    <Box mt="30px" mb="20px" ml="30px">
      <Typography
        fontSize="32px"
        color="red"
        sx={{ m: "0 0 5px 0" }}
        display="flex"
        alignItems="center"
        fontFamily="'Source Sans Pro', sans-serif"
        lineHeight="1.2"
        fontWeight="750"
      >
        {title}
      </Typography>
      <Typography
        fontSize="16px"
        color="#3da58a"
        display="flex"
        alignItems="center"
        fontFamily="'Source Sans Pro', sans-serif"
        fontWeight="400"
        lineHeight="1.334"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
