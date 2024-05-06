import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 headering</Typography>
      <Typography variant="h2">H2 headering</Typography>
      <Typography variant="h3">H3 headering</Typography>
      <Typography variant="h4" component="h1" >H4 headering</Typography>
      <Typography variant="h5">H5 headering</Typography>
      <Typography variant="h6">H6 headering</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="button">button</Typography>
      <Typography variant="overline">overline</Typography>
    </div>

  )

}

export default MuiTypography