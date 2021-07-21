import { MainLayout } from "../../components/MainLayout";
import Image from 'next/image'
import profilePic from '../../img/image-14.jpg'
import Router from 'next/router'
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import Link from 'next/link';
export default function Index() {
  const linkClickHandler = () => {

  }
  return (
    <MainLayout title={'Portfolio'}>
      <div className="navigation">  
          <div className="container">
            <div className="navbar">
              <div className="logo">
                <h1>Firdavs Faxriddinov</h1>
              </div>  
              <div className="topnav" id="myTopnav">
                <Link href="/"><a>Bosh Sahifa</a></Link>
                <Link href="#"><a>Xizmatlar</a></Link>
                <Link href="#"><a className="active1">Portfolio</a></Link>
                <Link href="#"><a>Ma'lumot</a></Link>
                <Link href="#"><a>Aloqa</a></Link>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars "></i></a>
              </div>
            </div>  
          </div>
        </div>
      <header>
          <div className="container">
            <div className="home-portfolio">
              <div className="image-1">
                <Image src={profilePic} alt="Pictures of the author"/>
              </div>
              <div className="buttons">
                <button onClick={() => Router.push('/portfolio-pages/page-13')} className="button-1">Oldingi</button>
                <button onClick={() => Router.push('/portfolio')} className="button-2">Orqaga</button>
                <button onClick={() => Router.push('/portfolio-pages/page-15')} className="button-3">Keyingi</button>
              </div>
            </div>     
          </div>
      </header>
    
      <footer id="footer">
        <div className="container">
          <h4 className="footer-text">
             Copyright ©2021 All rights reserved | made by Davlat Farruxov</h4>
        </div>
      </footer>
      <style jsx>{`
        * {
          font-family: 'Robota', sans-serif;
          padding: 0;
          margin: 0;
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
          width: 1333px;  
          margin: 0 auto;   
      }
      .active1 {
          color: #000;
          background-color: #ddd;
      }
        .buttons {
          display: flex;
          justify-content: center;
        }
        .button-1 {
          margin-top: 50px;
          margin-bottom: 30px;
          font-size: 18px;
          color: #ffffff;
          background-color: #333333;
          padding: 13px 40px;
          border: none;
          cursor: pointer;
        }
        .button-1:hover {
          background-color: #f7c08a;
          color: #333333;
        }
        .button-2 {
          margin-top: 50px;
          margin-bottom: 30px;
          margin-left: 50px;
          margin-right: 50px;
          font-size: 18px;
          color: #ffffff;
          background-color: #333333;
          padding: 13px 40px;
          border: none;
          cursor: pointer;
        }
        .button-2:hover {
          background-color: #f7c08a;
          color: #333333;
        }
        .button-3 {
          margin-top: 50px;
          margin-bottom: 30px;
          font-size: 18px;
          color: #ffffff;
          background-color: #333333;
          padding: 13px 40px;
          border: none;
          cursor: pointer;
        }
        .button-3:hover {
          background-color: #f7c08a;
          color: #333333;
        }
        .image-1  {
          width: 1000px; 
          margin: auto;
      }
        .footer-text {
          background: #242f51;
          text-align: center;
          color: #fff;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .line-portfolio {
          border: 1px solid #000;
          width: 250px;
          margin: auto;
        }
        .home-portfolio {
          text-align: center;
          font-size: 25px; 
          margin:  120px 0;
        }
        
      `}</style>
    </MainLayout>
  )
}