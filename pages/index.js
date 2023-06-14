/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ButtonLink from "../components/ButtonLink";
import Layout from "../components/Layout";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Pixel1 from "../components/facebook/Pixel1";
import { BsCheck2Square } from "react-icons/bs";
import {
  HomeShopEquipment,
  HomeMobileAppSupporting,
  SectionOurProgram,
} from "../components/Pages/Home";
import { SectionPromotionItems } from "../components/Pages/SectionPromotionItems";
import { SectionSupportingYouEvery } from "../components/Pages/SectionSupportingYouEvery";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img
          src="/image/Header_home.jpg"
          alt="Fitnesswork Hero Page"
          className="object-cover object-center min-w-min lg:min-w-full max-h-[80vh]"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30"></div>
        <div className="container absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-2xl mx-auto text-white text-center">
          <img
            src="./image/LogoFitnessworkPutih.png"
            alt="Fitnessworks"
            className="w-full"
          />
          <p>
            Fitnessworks is a new experience in fitness. We are the first Gym &
            Fitness Centre with technology & time-based membership system, in
            Indonesia. With technology we can provide high level facility &
            activity with low-cost membership plan, so everyone can join & begin
            their fitness journey. it is our mission to create fitness for
            everyone.
          </p>
          <ButtonLink text="VIEW MORE" link="/about" />
        </div>
      </div>
      <div className="2xl:container bg-blue-primary px-0 md:max-h-96 relative overflow-hidden object-fill md:flex">
        <div className="text-white w-full max-w-xl min-h-[13rem] relative md:static">
          <div className="absolute mx-8 xl:ml-12 z-20 grid items-center h-full">
            <div className="container">
              <p>
                START NOW FOR FREE ! be a better version of you, NO EXCUSES !
              </p>
              <div className="text-yellow-primary my-4">
                <ButtonLink text="GET TRIAL" link="/form-free-trial" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-blue-primary"></div>
          <img
            src="/image/home/Slide2.jpg"
            alt="FitnessWork"
            className="object-cover object-center w-full h-full md:ml-auto max-w-5xl"
          />
        </div>
      </div>

      <SectionOurProgram />

      <div className="flex justify-center lg:max-h-screen overflow-hidden">
        <video
          className="object-cover object-right min-w-min lg:min-w-full"
          loop
          autoPlay
          muted
        >
          <source src="/video/VideoBannerUA.mp4" type="video/mp4" />
        </video>
      </div>

      <SectionPromotionItems />

      <SectionSupportingYouEvery />

      <HomeShopEquipment />

      <div className="py-8">
        <div className="relative py-10 text-center text-blue-primary font-BebasNeue font-black">
          <h1 className="text-[10rem] opacity-20 py-8">SHOP</h1>
          <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <h1 className="text-5xl">PRICING PLAN</h1>
          </div>
        </div>
        <div className="lg:flex justify-center">
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-yellow-primary text-blue-primary text-center">
              <h1 className="text-4xl py-4 font-BebasNeue font-black tracking-wider">
                EARLY RISER
              </h1>
            </div>
            <div className="bg-neutral-100 p-6 text-blue-primary">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8">
                UNLIMITED <br />
                ACCES
              </h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">
                START FROM
              </h1>
              <div className="flex pb-4">
                <p>RP</p>
                <p className="text-4xl font-black mx-2">248.000</p>
                <p className="mt-auto">All Club / Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8">
                  <BsCheck2Square className="inline text-2xl mr-2" /> Check in
                  start from 06.00 WIB
                </p>
                <p className="-indent-8">
                  <BsCheck2Square className="inline text-2xl mr-2" /> Free
                  Access All Class
                </p>
                <p className="-indent-8">
                  <BsCheck2Square className="inline text-2xl mr-2" /> Get Gym
                  Bag
                </p>
                <p className="-indent-8">
                  <BsCheck2Square className="inline text-2xl mr-2" /> Free 3
                  sessions with <br />
                  Personal Trainer
                </p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-blue-primary text-yellow-primary text-center">
              <h1 className="text-4xl py-4 font-BebasNeue font-black tracking-wider">
                NIGHT OWL
              </h1>
            </div>
            <div className="bg-neutral-100 p-6 text-blue-primary">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8">
                UNLIMITED <br />
                ACCES
              </h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">
                START FROM
              </h1>
              <div className="flex pb-4">
                <p>RP</p>
                <p className="text-4xl font-black mx-2">278.000</p>
                <p className="mt-auto">All Club / Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8">
                  <BsCheck2Square className="inline text-2xl mr-2" /> Check in
                  start from 15.00 WIB
                </p>
                <p className="-indent-8">
                  <BsCheck2Square className="inline text-2xl mr-2" /> Free
                  Access All Class
                </p>
                <p className="-indent-8">
                  <BsCheck2Square className="inline text-2xl mr-2" /> Get Gym
                  Bag
                </p>
                <p className="-indent-8">
                  <BsCheck2Square className="inline text-2xl mr-2" /> Free 3
                  sessions with <br />
                  Personal Trainer
                </p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-blue-primary">
        <h1 className="font-judul text-center text-6xl">LATEST BLOG POSTS</h1>
        <div className="container mx-auto md:flex md:flex-wrap md:justify-center">
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link href="/article">
              <img
                src="/image/article/news3.png"
                alt="LATEST BLOG POSTS"
                className="object-cover object-center min-w-min mx-auto max-h-72"
              />
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">
                  5 hal yang perlu kamu siapkan sebelum pertama kali pergi ke
                  gym?
                </h2>
                <p>
                  Buat kamu yang pertama kali melakukan sesuatu biasanya
                  mengalami kebingungan dan keraguan. Apalagi ...{" "}
                </p>
              </div>
            </Link>
          </div>
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link href="/article">
              <img
                src="/image/article/news1.png"
                alt="LATEST BLOG POSTS"
                className="object-cover object-center min-w-min mx-auto max-h-72"
              />
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">
                  Apa penyebab lemak perut
                </h2>
                <p>
                  Lemak perut memang menjengkelkan. Apalagi kalau sudah merusak
                  penampilan dan jadi membatasi ruang ...{" "}
                </p>
              </div>
            </Link>
          </div>
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link href="/article">
              <img
                src="/image/article/news5.png"
                alt="LATEST BLOG POSTS"
                className="object-cover object-center min-w-min mx-auto max-h-72"
              />
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">
                  Program diet untuk turunkan berat badan
                </h2>
                <p>
                  Terkadang untuk menurunkan berat badan, olahraga saja tidak
                  cukup. Beberapa orang, mungkin ...{" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div id="partnership">
        <div className="text-center">
          <p className="font-judul text-2xl">UNPARALLELED</p>
          <h2 className="font-judul text-6xl text-blue-primary">
            BUSINESS SUPPORT
          </h2>
        </div>
        <div className="flex flex-wrap justify-around items-center py-4 lg:px-10">
          <img
            src="/image/logo/LOGO_UA_HITAM_TM.png"
            alt="BUSINESS SUPPORT"
            className="h-20 m-4"
          />
          <img
            src="/image/logo/URBAN-LOGO_JR_HIRES.png"
            alt="BUSINESS SUPPORT"
            className="h-20 m-4"
          />
          <img
            src="/image/logo/URBAN-FALCON FINAL-TM.png"
            alt="BUSINESS SUPPORT"
            className="h-20 m-4"
          />
          <img
            src="/image/logo/Valor_TM.png"
            alt="BUSINESS SUPPORT"
            className="h-20 m-4"
          />
          <img
            src="/image/logo/LogoFitnessworkPanjang.png"
            alt="BUSINESS SUPPORT"
            className="h-12 m-4"
          />
          <img
            src="/image/logo/CIRCUIT.png"
            alt="BUSINESS SUPPORT"
            className="h-20 m-4"
          />
        </div>
      </div>
      <Pixel1 />
    </Layout>
  );
}
