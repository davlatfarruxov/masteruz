import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

import Image from 'next/image'
import profilePic from '../img/phone-call.png'
import profilePic2 from '../img/email.png'
import profilePic3 from '../img/youtube.png'
import profilePic4 from '../img/instagram.png'
import profilePic5 from '../img/telegram.png'
import profilePic6 from '../img/tik-tok.png'
import profilePic7 from '../img/youtube-images-1.jpg'
import profilePic8 from '../img/youtube-images-2.jpg'
import profilePic9 from '../img/youtube-images-3.jpg'
import profilePic10 from '../img/youtube-images-4.jpg'
import profilePic11 from '../img/youtube-images-5.jpg'
import profilePic12 from '../img/youtube-images-6.jpg'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aloqa | Firdavs Faxriddinov's Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <div className="container">
            <div className="text-xizmatlar">
              <h1>Aloqa</h1>
              <div className="line-portfolio"></div>  
            </div>
            <div className="aloqa-1">
              <div className="line-2"></div>
              <div className="aloqa">
                <div className="block-1">
                  <div className="phone">
                    <Image src={profilePic} alt="Pictures of the author"/>    
                  </div>
                  <div className="text">
                    <h3>+998 97 913 13 24 <br/> +998 33 913 13 24</h3>    
                  </div>
                </div>
              </div>
              <div className="line-2"></div>
              <div className="aloqa">
                <div className="block-2">
                  <div className="phone">
                    <Image src={profilePic2} alt="Pictures of the author"/>    
                  </div>
                  <div className="text">
                    <h3>firdavsfaxriddinov111@gmail.com</h3>    
                  </div>
                </div>
              </div>
              <div className="line-2"></div>
              <div className="aloqa">  
                <div className="block-3">
                  <div className="phone">
                    <Image src={profilePic3} alt="Pictures of the author"/>    
                  </div>
                  <div className="text">
                    <h3>Master Plus</h3>    
                  </div>
                </div>
              </div>
              <div className="line-2"></div>
              <div className="aloqa">  
                <div className="block-4">
                  <div className="phone">
                    <Image src={profilePic4} alt="Pictures of the author"/>    
                  </div>
                  <div className="text">
                    <h3>universalnie_mastera</h3>    
                  </div>
                </div>
              </div>
              <div className="line-2"></div>
              <div className="aloqa">  
                <div className="block-5">
                  <div className="phone">
                    <Image src={profilePic5} alt="Pictures of the author"/>    
                  </div>
                  <div className="text">
                    <h3>@Fedya_jan_tjk</h3>    
                  </div>
                </div>
              </div>
              <div className="line-2"></div>
              <div className="aloqa">
                <div className="block-6">
                  <div className="phone">
                    <Image src={profilePic6} alt="Pictures of the author"/>    
                  </div>
                  <div className="text">
                    <h3>@master_plus0</h3>    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
      
        <section id="youtube">
          <div className="container">
            <div className="youtube">
              <h1>Youtube</h1>
              <div className="images">
                <div className="youtube-images">
                  <din className="youtube-images1">
                    <div className="image-1">
                      <a href={'https://www.youtube.com/watch?v=2QnMIdyLrNg&t=24s'}><Image src={profilePic7} alt="Pictures of the author"/></a>  
                    </div>   
                    <div className="image-2">
                      <a href={'https://www.youtube.com/watch?v=ml1pZKWHtLw&t=1s'}><Image src={profilePic8} alt="Pictures of the author"/></a>  
                    </div>
                    <div className="image-1">
                      <a href={'https://www.youtube.com/watch?v=DvosKy3vaf8'}><Image src={profilePic9} alt="Pictures of the author"/></a>  
                    </div>
                  </din>
                  <div className="youtube-images2">
                    <div className="image-1">
                      <a href={'https://www.youtube.com/watch?v=UTIsPc9-HqM'}><Image src={profilePic10} alt="Pictures of the author"/></a>  
                    </div>   
                    <div className="image-5">
                      <a href={'https://www.youtube.com/watch?v=PZJ7mUz7UXY'}><Image src={profilePic11} alt="Pictures of the author"/></a>  
                    </div>
                    <div className="image-1">
                      <a href={'https://www.youtube.com/watch?v=_zYfihhm6XE'}><Image src={profilePic12} alt="Pictures of the author"/></a>  
                    </div>
                  </div>
                </div>
                <div className="instagram-images">
                  <dinv className="instagram-images1">

                 </dinv>
                  <div className="instagram-images2">

                  </div>
                </div>
                
              </div>
              
            </div>
            <div className="instagram">

            </div>
          </div>
        </section>
        <style jsx> {`
            *{
                font-family: 'Robota', sans-serif;
                margin: 0;
                padding: 0; 
                box-sizing: content-box;
            }
            .home-portfolio {
                padding-bottom: 50px;
                margin-bottom: 0;
            }
            .container {
                width: 1200px;  
                margin: 0 auto;   
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
            .block-1  .phone{
                width: 20px;
                padding-right: 30px;
            }
            .block-1  {
                display: flex;
                align-items: center;
                padding-top: 10px;
                padding-bottom: 10px;
            }
            .block-2  .phone{
              width: 20px;
              padding-right: 30px;
            }
            .block-2  {
              display: flex;
              align-items: center;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .block-3  .phone{
              width: 20px;
              padding-right: 30px;
            }
            .block-3  {
              display: flex;
              align-items: center;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .block-4  .phone{
              width: 20px;
              padding-right: 30px;
            }
            .block-4  {
              display: flex;
              align-items: center;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .block-5  .phone{
              width: 20px;
              padding-right: 30px;
            }
            .block-5  {
              display: flex;
              align-items: center;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .block-6  .phone{
              width: 20px;
              padding-right: 30px;
            }
            .block-6  {
              display: flex;
              align-items: center;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .aloqa {
              width: 350px;
              margin: 0 auto;
            }
            .line-2 {
                width: 100%;
                border: 1px solid #000;
            }
            .youtube-images1 {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .youtube-images1 .image-1 {
                width: 200px;
            }
            .youtube-images2 {
              display: flex;
              align-items: center;
              justify-content: center;
              padding-bottom: 50px;
          }
          .youtube-images2 .image-1 {
              width: 200px;
          }
          .youtube-images1 .image-2 {
            width: 200px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .youtube-images2 .image-5 {
            width: 200px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .youtube h1 {
              text-align: center;
              color: #fff;
              font-size: 40px;
              padding-top: 50px;
          }
          #youtube {
            background: #000;
            width: 100%;
          }
          @media only screen and (max-width: 768px) {
              .container {
                  width: 330px;
              }
              .text {
                font-size: 12px;
              }
              .phone {
                  padding-left: 20px;
              }
          }
      `}</style>
        </div>
    
    )  
  }


 
