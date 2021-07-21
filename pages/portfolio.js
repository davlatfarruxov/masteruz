import { MainLayout } from "../components/MainLayout";
import Image from 'next/image'
import profilePic from '../img/image-1.jpg'
import profilePic2 from '../img/image-2.jpg'
import profilePic3 from '../img/image-3.jpg'
import profilePic4 from '../img/image-4.jpg'
import profilePic5 from '../img/image-5.jpg'
import profilePic6 from '../img/image-6.jpg'
import profilePic7 from '../img/image-7.jpg'
import profilePic8 from '../img/image-8.jpg'
import profilePic9 from '../img/image-9.jpg'
import profilePic10 from '../img/image-10.jpg'
import profilePic11 from '../img/image-11.jpg'
import profilePic12 from '../img/image-12.jpg'
import profilePic13 from '../img/image-13.jpg'
import profilePic14 from '../img/image-14.jpg'
import profilePic15 from '../img/image-15.jpg'
import profilePic16 from '../img/image-16.jpg'
import Link from 'next/link';
import Router from 'next/router'

export default function Portfolio(params) {
  return (
    <MainLayout title={'Portfolio'}>
      <header id="header1">
        <div className="navigation">  
          <div className="container">
            <div className="navbar">
              <div className="logo">
                <h1>Firdavs Faxriddinov</h1>
              </div>  
              <div className="topnav" id="myTopnav">
                <Link href="/"><a>Bosh Sahifa</a></Link>
                <Link href="/xizmatlar"><a>Xizmatlar</a></Link>
                <Link href="#"><a className="active1">Portfolio</a></Link>
                <Link href="/ma'lumot"><a>Ma'lumot</a></Link>
                <Link href="/aloqa"><a>Aloqa</a></Link>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars "></i></a>
              </div>
            </div>  
          </div>
        </div>
      </header>  
        <section id="portfolio">
            <div className="container">
              <div className="home-portfolio">
                <h1>Portfolio</h1>
                <div className="line-portfolio"></div>  
                <div className="Portfolio-images">
                  <div className="image-1">
                    <Link href={'/portfolio-pages/page-1'}><Image src={profilePic} alt="Pictures of the author"/></Link>
                  </div>  
                  <div className="image-2">
                    <Link href={'/portfolio-pages/page-2'}><Image src={profilePic2} alt="Pictures of the author"/></Link>
                  </div>
                  <div className="image-3">
                    <Link href={'/portfolio-pages/page-3'}><Image src={profilePic3} alt="Pictures of the author"/></Link>
                  </div>
                  <div className="image-4">
                    <Link href={'/portfolio-pages/page-4'}><Image src={profilePic4} alt="Pictures of the author"/></Link>
                  </div>   
                </div> 
                <div className="Portfolio-images-2">
                  <div className="image-5">
                    <Link href={'/portfolio-pages/page-5'}><Image src={profilePic5} alt="Pictures of the author"/></Link>
                  </div>  
                  <div className="image-6">
                    <Link href={'/portfolio-pages/page-6'}><Image src={profilePic6} alt="Pictures of the author"/></Link>
                  </div>
                  <div className="image-7">
                    <Link href={'/portfolio-pages/page-7'}><Image src={profilePic7} alt="Pictures of the author"/></Link>
                  </div>
                  <div className="image-8">
                    <Link href={'/portfolio-pages/page-8'}><Image src={profilePic8} alt="Pictures of the author"/></Link>
                  </div>   
                </div> 
                <div className="Portfolio-images-3">
                  <div className="image-9">
                    <Link href={'/portfolio-pages/page-9'}><Image src={profilePic9} alt="Pictures of the author"/></Link>
                  </div>  
                  <div className="image-10">
                    <Link href={'/portfolio-pages/page-10'}><Image src={profilePic10} alt="Pictures of the author"/></Link>
                  </div>
                  <div className="image-11">
                    <Link href={'/portfolio-pages/page-11'}><Image src={profilePic11} alt="Pictures of the author"/></Link>
                  </div>
                  <div className="image-12">
                    <Link href={'/portfolio-pages/page-12'}><Image src={profilePic12} alt="Pictures of the author"/></Link>
                  </div>   
                </div> 
                <div className="Portfolio-images-4">
                  <div className="image-13">
                    <Link href={'/portfolio-pages/page-13'}><Image src={profilePic13} alt="Pictures of the author"/></Link>
                  </div>  
                  <div className="image-14">
                    <Link href={'/portfolio-pages/page-14'}><Image src={profilePic14} alt="Pictures of the author"/></Link>
                  </div>
                  <div className="image-15">
                    <Link href={'/portfolio-pages/page-15'}><Image src={profilePic15} alt="Pictures of the author"/></Link>
                  </div>
                  <div className="image-16">
                    <Link href={'/portfolio-pages/page-16'}><Image src={profilePic16} alt="Pictures of the author"/></Link>
                  </div>   
                </div> 
              </div>
              <div className= "xizmatlar-btns">
                <button onClick={() => Router.push('/xizmatlar')} className="btn-aloqa">Xizmatlar</button>
                <button onClick={() => Router.push('/aloqa')} className="btn-aloqa">Aloqa</button>
               </div>  
            </div>  
          </section>
          <footer id="footer">
            <div className="container">
              <h4 className="footer-text">Copyright ©2021 All rights reserved | made by Davlat Farruxov</h4>
            </div>
          </footer>
          <style jsx> {`
            #portfolio {
                margin-top: ;
                padding-top: 40px;
            }
            .image-1  {
                width: 250px; 
            }
            .image-2  {
                width: 250px; 
                padding-left: 50px;
                padding-right: 50px;  
            }
            .image-3  {
                width: 250px;
                padding-right: 50px;   
            }
            .image-4  {
                width: 250px;   
            }
            .Portfolio-images {
                padding-top: 50px;
                display: flex;
                justify-content: center;
            }
            .image-5  {
                width: 250px; 
            }
            .image-6  {
                width: 250px; 
                padding-left: 50px;
                padding-right: 50px;  
            }
            .image-7  {
                width: 250px;
                padding-right: 50px;   
            }
            .image-8  {
                width: 250px;   
            }
            .Portfolio-images-2 {
                padding-top: 50px;
                display: flex;
                justify-content: center;
            } 
            .image-9  {
                width: 250px; 
            }
            .image-10  {
                width: 250px; 
                padding-left: 50px;
                padding-right: 50px;  
            }
            .image-11  {
                width: 250px;
                padding-right: 50px;   
            }
            .image-12  {
                width: 250px;   
            }
            .Portfolio-images-3 {
                padding-top: 50px;
                display: flex;
                justify-content: center;
            }
            .image-13  {
                width: 250px; 
            }
            .image-14  {
                width: 250px; 
                padding-left: 50px;
                padding-right: 50px;  
            }
            .image-15  {
                width: 250px;
                padding-right: 50px;   
            }
            .image-16  {
                width: 250px;   
            }
            .Portfolio-images-4 {
                padding-top: 50px;
                display: flex;
                justify-content: center;
            }
            .line-portfolio {
                border: 1px solid #000;
                width: 250px;
                margin: auto;
            }
            .home-portfolio{
                text-align: center;
                font-size: 35px; 
                margin:  53px 0;
                margin-bottom: 0;
                padding-bottom: 50px;
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
          `} </style>
    </MainLayout>
  )
}