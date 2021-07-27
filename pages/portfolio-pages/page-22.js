import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../../img/image-22.jpg'
import Router from 'next/router'
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import Link from 'next/link';
export default function Index() {
  return (
    <>
      <div className={styles.container}>
      <header>
          <div className="container">
            <div className="home-portfolio">
              <div className="image-1">
              <div className="images">
                <Image src={profilePic} alt="Pictures of the author" className="image"/></div>
              </div>
              <div className="buttons">
                <button onClick={() => Router.push('/portfolio-pages/page-21')} className="button-1">Oldingi</button>
                <button onClick={() => Router.push('/portfolio')} className="button-2">Orqaga</button>
                <button onClick={() => Router.push('/portfolio-pages/page-23')} className="button-3">Keyingi</button>
              </div>
            </div>     
          </div>
      </header>
      <style jsx>{`
        * {
            font-family: 'Robota', sans-serif;
            padding: 0;
            margin: 0;
            box-sizing: content-box;
        }
        .image-1 {
            padding-top: 100px;
        }
        .topnav a.active {
            background-color: #04AA6D;
            color: white;
        }
        .container {
            width: 1200px;  
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
        @media only screen and (max-width: 768px) {
            .container {
                width: 90%;
                margin: auto;
            }
            .image-1  {
                width: 100%; 
                margin: auto;
            }
            .button-2 {
                margin-left: 10px;
                margin-right: 10px;
                font-size: 12px;
                color: #ffffff;
                background-color: #333333;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
            }
            .button-3 {
                font-size: 12px;
                padding: 10px 20px;
            }
            .button-1 {
                font-size: 12px;
                padding: 10px 20px;
            }
        }
      `}</style>
    </div></>
  )
}