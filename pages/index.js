import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function Home() {
  return (
    <div >
      <Head>
        <title>Next App</title>
        <meta name="description" content="Adrihsh's Next Starter Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <Card sx={{
            width: 300,
            height: 300,

          }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }}  color="text.secondary" gutterBottom>
                Welcome to
              </Typography>
              <Typography variant="h3" component="div">
                Next.js Starter Template
              </Typography>
             
              <Typography variant="body2">
              Next.js, React.js, TypeScript, MUI, Sass, 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>





    </div>
  )
}
