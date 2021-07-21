import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'
import background from "../img/bg-image.jpg";
import Link from 'next/dist/client/link';
import Router from 'next/router'
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
function myFunction() {
  var x = document.getElementById("myTopnav");
       if (x.className === "topnav") {
             x.className += " responsive";
       } else {
        x.className = "topnav";
        }
  }

export default function Index() {
  const linkClickHandler = () => {
  }
  return (
    


    <MainLayout title={'Bosh Sahifa'}>
      
      <div className="navigation">  
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <h1>Firdavs Faxriddinov</h1>
            </div>  
            <div className="topnav" id="myTopnav">
              <Link href="#"><a className="active1">Bosh Sahifa</a></Link>
              <Link href="/xizmatlar"><a>Xizmatlar</a></Link>
              <Link href="/portfolio"><a>Portfolio</a></Link>
              <Link href="/ma'lumot"><a>Ma'lumot</a></Link>
              <Link href="/aloqa"><a>Aloqa</a></Link>
              <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars fa-2x"></i></a>
            </div>
          </div>  
        </div>
      </div>
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
      <footer id="footer">
        <div className="container">
          <h4 className="footer-text">Copyright ©2021 All rights reserved | made by Davlat Farruxov</h4>
        </div>
      </footer>
      <style jsx> {`
            *{
                font-family: 'Robota', sans-serif;
                margin: 0;
                padding: 0; 
            }
            header{  
                width: 100%;  
                height: 600px;
                padding-top: 100px;   
            }
            .home-header h1{
                font-size: 80px;
                text-align: center;
                margin:  53px 0;  
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
            .topnav a:hover {
                background-color: #ddd;
                color: black;
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
              color: #000;
              background-color: #999;
          }
          @media screen and (max-width: 600px) {
            .topnav a {display: none;}
            .topnav a.icon {
              float: right;
              display: block;
            }
          }
          
          @media screen and (max-width: 600px) {
            .topnav.responsive {position: relative;}
            .topnav.responsive .icon {
              position: absolute;
              right: 0;
              top: 0;
            }
            .topnav.responsive a {
              float: none;
              display: block;
              text-align: left;
              padding-top: 10px;
              padding-bottom: 10px;
            }
          }
          `}</style>
      </MainLayout>
  
  )
}
