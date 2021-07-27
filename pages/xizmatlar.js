import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xizmatlar | Firdavs Faxriddinov's Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container">
          <div className="text-xizmatlar">
            <h1>Xizmatlar</h1>
            <div className="line-portfolio"></div>  
          </div>
          <div className="xizmatlar">
            <div className="block-1">
              <h1>Uy qurish</h1>
              <h3>-Beton</h3>
              <h3>-Plitomantaj (manalit)</h3>
              <h3>-Devor ko'tarish</h3>
              <h3>-Tom yopish</h3>
              <h3>-Eshik o'rnatish</h3>
              <h3>-Styashka</h3>
              <h3>-Plitka (bruschatka)</h3>
            </div>
            <div className="block-2">
              <h1>Fasad</h1>
              <h3>-Shtukaturka</h3>
              <h3>-Travertin</h3>
              <h3>-Jidkiy Travertin</h3>
              <h3>-Kraska</h3>
              <h3>-Kafel</h3>
              <h3>-Tunukapon</h3>
              <h3>-Padrashifka</h3>
            </div>
            <div className="block-3">
              <h1>Ichki qism</h1>
              <h3>-Gipsakarton</h3>
              <h3>-Evro remont</h3>
              <h3>-Ganj ishlari</h3>
              <h3>-Kafel</h3>
              <h3>-Elektrik</h3>
              <h3>-Santexnik</h3>
              <h3>-Laminat pol</h3>
            </div>
          </div>
          <div className="maslahat">
            <h2>Va Boshqa Xizmatlar!</h2>
            <h1>Maslahat Berish Bepul!</h1>
          </div>
          <div className= "xizmatlar-btns">
            <button onClick={() => Router.push('/portfolio')} className="btn-aloqa">Portfolio</button>
            <button onClick={() => Router.push('/aloqa')} className="btn-aloqa">Aloqa</button>
          </div>        
        </div>
      </header>
      <style jsx> {`
          *{
              font-family: 'Robota', sans-serif;
              margin: 0;
              padding: 0; 
          }
          .footer-text {
              background: #242f51;
              text-align: center;
              color: #fff;
              padding-top: 50px;
              padding-bottom: 50px;
          }
          #footer {
              background: #242f51;
          }
          .home-portfolio {
              padding-bottom: 50px;
              margin-bottom: 0;
          }
          .topnav a.active {
              background-color: #04AA6D;
              color: white;
          }
          .topnav a:hover {
              background-color: coral;
              text-color: #000 !important;
          }
          .topnav a {
              color: #fff;
              text-decoration: none;
              font-weight: 700;
              padding-left: 15px;
              padding-right: 15px;
              height: 60px;
              padding-top: 21px;
              padding-bottom: 23px;
          }
          .topnav a:hover {
              background-color: coral;
              color: #000;
          }
          .topnav a i {
              display: none;
          }
          .navbar {
              position: fixed;
              display: flex;
              background: #242f51;
              height: 60px;
              left: 0;
              top:0;
              right: 0;
              align-items: center;
              justify-content: space-between;
              z-index: 9999;
              width: 1333px;
              margin: auto;
          }
          .logo h1 {
              color: #fff;
              padding-left: 35px;
          }
          .topnav .icon {
              display: none;
              color: #fff;
          }
          .container {
              width: 1200px;  
              margin: 0 auto;   
          }
          .active1 {
              color: #999;
              background-color: #999;
          }
          .line-portfolio {
              border: 1px solid #000;
              width: 250px;
              margin: auto;
          }
          .text-xizmatlar{
              text-align: center;
              font-size: 25px; 
              margin:  53px 0;
              margin-bottom: 0;
              padding-bottom: 50px;
              padding-top: 50px;
          }
          .text-xizmatlar h1{
              margin-bottom: 45px;
          }
          .xizmatlar {
              display: flex;
              justify-content: center;
          }
          .block-1 {
             
              box-shadow: 0 15px 34px rgb(40 42 53 / 25%);
              padding-left: 20px;
              padding-top: 40px;
              padding-right: 20px;
              padding-bottom: 30px;
              background: #afafafaf; 
          }
          .block-1:hover {
              background: #e7e7e7e7;
              border-radius: none;
          }
          .block-1 h1 {
              padding-bottom: 30px;
              color: #111;
          }
          .block-1 h3 {
              padding-bottom: 10px;
              color: #333;
          }
          .block-2 {
          
            box-shadow: 0 15px 34px rgb(40 42 53 / 25%);
            padding-left: 20px;
            padding-top: 40px;
            padding-right: 20px;
            padding-bottom: 30px;
            background: #afafafaf; 
            margin-left: 70px;
            margin-right: 70px;
          }
          .block-2:hover {
              background: #e7e7e7e7;
              border-radius: none;
          }
          .block-2 h1 {
              padding-bottom: 30px;
              color: #111;
          }
          .block-2 h3 {
              padding-bottom: 10px;
              color: #333;
          }
          .block-3 {
           
              box-shadow: 0 15px 34px rgb(40 42 53 / 25%);
              padding-left: 20px;
              padding-top: 40px;
              padding-right: 20px;
              padding-bottom: 30px;
              background: #afafafaf; 
          }
          .block-3:hover {
              background: #e7e7e7e7;
              border-radius: none;
          }
          .block-3 h1 {
              padding-bottom: 30px;
              color: #111;
          }
          .block-3 h3 {
              padding-bottom: 10px;
              color: #333;
          }
          .maslahat {
              
              box-shadow: 0 15px 34px rgb(40 42 53 / 25%);
              padding-left: 20px;
              padding-top: 10px;
              padding-right: 20px;
              padding-bottom: 10px;
              background: #afafafaf; 
              width: 698px;
              margin: auto;
              margin-top: 50px;
          }
          .maslahat:hover {
              background: #e7e7e7e7;
              border-radius: none;
          }
          .maslahat h2 {
              color: #111;
              text-align: center;
          }
          .maslahat h1 {
            color: #111;
            text-align: center;
          }
          .btn-aloqa {
              display: inline-block;
              font-size: 18px;
              color: #ffffff;
              background-color: #333333;
              padding: 13px 20px;
              border: none;
              cursor: pointer;
              width: 150px;
              margin-left: 25px;
              margin-right: 25px;
              margin-top: 70px;
              margin-bottom: 50px;
          }
          .btn-aloqa:hover {
              background-color: #f7c08a;
              color: #333333;
          }
          .xizmatlar-btns {
              display: flex;
              justify-content: center;
          }
          @media only screen and (max-width: 768px) {
            .xizmatlar {
                display: block;
                justify-content: center;
            }
            .container {
                width: 330px;
            }
            .maslahat {
                box-shadow: 0 15px 34px rgb(40 42 53 / 25%);
                padding-left: 20px;
                padding-top: 10px;
                padding-right: 20px;
                padding-bottom: 10px;
                background: #afafafaf; 
                width: 330px;
                margin: auto;
                margin-top: 50px;
            }
            .maslahat h2 {
                color: #111;
                text-align: center;
            }
            .maslahat h1 {
              color: #111;
              text-align: center;
            }
            .block-1, .block-2, .block-3{
                width: 190px;
                margin: 0 auto;
            }
            .block-2 h1 {
                text-align: center;
            }
            .block-2 {
                margin-top: 40px;
                margin-bottom: 40px;
            }
          }  
    `}</style>
      </div>
  )  
}