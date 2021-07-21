import Head from "next/head"
import  Link  from "next/link"

export function MainLayout({children, title = 'Next App'}) {
  return (
    <>
      <Head>
          <title>{title} | Firdavs Faxriddinov's Personal Website</title>
          <meta name="keywords" content="next,javascript,next.js,react" />
          <meta name="description" content="this is Persoanl page Firdavs Faxriddinov" />
          <meta charSet="utf-8"/>  
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <main>
        {children}
      </main>    
      <style jsx global>{`{style}    
          *{
            font-family: 'Robota', sans-serif;
          }
          
          
          
        `}
      </style>
    </>
  )
}
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}