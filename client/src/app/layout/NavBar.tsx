import { AppShortcut } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Container, MenuItem, Typography, Button } from "@mui/material";

export default function NavBar() {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage:
        'linear-gradient(135deg, #600030 35%, #201830 35% 70%, #0000 70%)',
        backgroundColor:'#0000'}}>
        <Container maxWidth={false}>
          <Toolbar sx={{display:'flex',
            justifyContent:'space-between'}}>
            <Box>
              <MenuItem sx={{display:'flex', gap : 2}}>
                <AppShortcut fontSize='large'  />
                <Typography variant='h4' fontWeight='bold'>
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{display:'flex'}}>
              <MenuItem sx={{fontSize:'1.2rem',
                textTransform:'uppercase',
                fontWeight:'bold'}}>
                Activities
              </MenuItem>
              <MenuItem sx={{fontSize:'1.2rem',
                textTransform:'uppercase',
                fontWeight:'bold'}}>
                About
              </MenuItem>
              <MenuItem sx={{fontSize:'1.2rem',
                textTransform:'uppercase',
                fontWeight:'bold'}}>
                Contact
              </MenuItem>
            </Box>
            <Box sx={{display:'flex', padding:'0 24px'}}>
              <Button
                size="large"
                variant="contained"
                sx={{backgroundColor:'#e09000',
                color:'#ffffff'}}>
                Create activity
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}