import { Box, Typography } from '@mui/material'
import React, { Component } from 'react'
import Navbar from '../../Assets/Navbar/Navbar'

export default class Afisha extends Component {
  render() {
    return (
     <Box width={'100%'} height={'30%'} bgcolor={'aqua'}>
      <Navbar/>
      <Typography variant='h1'>
          hello world
      </Typography>
     </Box>
    )
  }
}
