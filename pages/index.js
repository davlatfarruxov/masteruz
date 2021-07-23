import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bosh Sahifa | Firdavs Faxriddinov's Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <header>       
        <div className= "container">
          <div className="home-header">
            <h1>Welcome</h1>
            <h1>Firdavs Faxriddinov's</h1>  
            <p>Personal Website!</p>
          </div>  
          <div className= "home-buttons">
            <button onClick={() => Router.push('/xizmatlar')} className="btn-xizmatlar">Xizmatlar</button>
            <button onClick={() => Router.push('/portfolio')} className="btn-portfolio">Portfolio</button>
          </div>
        </div>
      </header>
    
      <style jsx> {`
            *{
                font-family: 'Robota', sans-serif;
                margin: 0;
                padding: 0; 
                box-sizing: content-box;
            }
            .home-buttons {
                margin-bottom: 50px;
            }
            header{  
                width: 100%;  
                height: 600px;
                padding-top: 100px;   
            }
            .home-header h1{
                font-size: 80px;
                text-align: center;
                padding: 53px 0;
            }
            .home-header p{
                font-size: 40px;
                text-align: center; 
                margin:  40px 0;
            }
            .container {
                width: 1200px;
                margin: auto;
            }
            .home-buttons {
                display: flex;
                justify-content: center;
            }
            .btn-xizmatlar {
                display: inline-block;
                font-size: 18px;
                color: #ffffff;
                background-color: #333333;
                padding: 13px 20px;
                border: none;
                cursor: pointer;
                margin-right: 25px;
            }
            .btn-xizmatlar:hover {
                background-color: #f7c08a;
                color: #333333;
            }
            .btn-portfolio {
                display: inline-block;
                font-size: 18px;
                color: #ffffff;
                background-color: #333333;
                padding: 13px 20px;
                border: none;
                cursor: pointer;
            }
            .btn-portfolio:hover {
                background-color: #f7c08a;
                color: #333333;
            }
            .btn-port {
              margin-top: 50px;
              margin-bottom: 30px;
              font-size: 18px;
              color: #ffffff;
              background-color: #333333;
              padding: 13px 40px;
              border: none;
              cursor: pointer;
          }
          .btn-port:hover {
              background-color: #f7c08a;
              color: #333333;
          }
            

          .home-portfolio {
              padding-bottom: 50px;
              margin-bottom: 0;
          }


  
          .container {
              width: 1200px;  
              margin: 0 auto;   
          }

          
          @media only screen and (max-width: 768px) {
              .container {
                  width: 330px;
              }
              .home-header h1{
                font-size: 50px;
                text-align: center;
                padding: 0;
              }
              .home-header {
                  padding-top: 40px;
              }
          }  
          `}</style>


    </div>
  )
}
