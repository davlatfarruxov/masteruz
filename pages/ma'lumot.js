import Router from 'next/router'
import { MainLayout } from "../components/MainLayout";
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../img/image-malumot.jpg'
import profilePic2 from '../img/image-malumot-2.jpg'

export default function Portfolio(params) {
    return (
      <MainLayout title={'Ma\'lumot'}>
          <div className="navigation">  
            <div className="container">
              <div className="navbar">
                <div className="logo">
                  <h1>Firdavs Faxriddinov</h1>
                </div>  
                <div className="topnav" id="myTopnav">
                  <Link href="/"><a>Bosh Sahifa</a></Link>
                  <Link href="/xizmatlar"><a>Xizmatlar</a></Link>
                  <Link href="/portfolio"><a>Portfolio</a></Link>
                  <Link href="#"><a className="active1" >Ma'lumot</a></Link>
                  <Link href="/aloqa"><a>Aloqa</a></Link>
                  <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars "></i></a>
                </div>
              </div>  
            </div>
          </div>
          <header>
            <din className="container">
              <div className="text-xizmatlar">
                <h1>Ma'lumot</h1>
                <div className="line-portfolio"></div>  
                <div className="image-malumot">
                  <div className="imge-malumot-1">
                    <Image src={profilePic} alt="Pictures of the author"/>
                  </div> 
                  <div className="imge-malumot-1">
                    <Image src={profilePic2} alt="Pictures of the author"/>
                  </div> 
                </div>
              </div>  
            </din>
          </header>
          <div className= "xizmatlar-btns">
            <button onClick={() => Router.push('/portfolio')} className="btn-aloqa">Portfolio</button>
            <button onClick={() => Router.push('/aloqa')} className="btn-aloqa">Aloqa</button>
          </div>
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
          `} </style>
    </MainLayout>
  )
}