
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" className='text-center'>
      {'Copyright © '}
        Alec Scott{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function StickyFooter() {
  return (
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="md" className='m-auto'>
            <Container maxWidth="sm">
                <Typography variant="body1" className='flex justify-between'>
                <Link underline="none" color="inherit" href="/contact-me">Contact Me</Link>
                <Link underline="none" color="inherit" href="/tutoring">Tutoring</Link>
                <Link underline="none" color="inherit" href="/afterschool">After School</Link>
                </Typography>
            </Container>
            <hr className="h-px my-1 bg-gray-400 border-0" />
            <Copyright />
          </Container>
        </Box>
  );
}
