import React from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { CssBaseline} from "@material-ui/core";
const theme = createMuiTheme({
    palette: {
      type: "dark"
    },
    typography:{
      fontFamily:`'Baloo Tammudu 2', 'cursive';`,
      fontSize: 15
    }
  });
function Defi(){
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>Defi</div>
        </ThemeProvider>
    )
}

export default Defi