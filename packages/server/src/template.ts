export const htmlTemplate = (artist:string,venue:string,id:string) => {
return (`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta property="og:title" content="${artist}-${venue}" />
    <meta property="og:image" content="https://raw.githubusercontent.com/traysiMay/fullstack-react-native-graphql/prod/packages/web/public/og-image.png" /> 
    <meta property="og:description" 
          content="trying to see ${artist}?? your ticky could be inside! :D" />
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500" rel="stylesheet">
    <title>${artist}-${venue}</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">
      you should be redirected...</br>
      in case something went wrong</br>
      click <a href="https://lostminiticky.com/listing/${id}">here</a>
    </div>
    <script>
     window.location.href="https://lostminiticky.com/listing/${id}";
    </script>
  </body>
</html>`)
}



