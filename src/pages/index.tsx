import { BasciConnect } from "components/ConnectWallet";
import type { NextPage } from "next";
import Image from "next/image";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import logobig from "../images/logobig.png"
import lineActive from "../images/line-active.png"
import line from "../images/line.png"
import Ten from "../images/ten.png"
import Logo from "../Logo.svg"
import longbg from "../images/long-bg.png"
import longbg2 from "../images/longbg2.png"
import bgmax from "../images/bgmax.png"
import Script from 'next/script'

import Head from "next/head";
const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Wagmi Dapp</title>
                <meta name="description" content="Generated by create next wagmi dapp" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=720, initial-scale=1, maximum-scale=1, user-scalable=no"
                />
            </Head>
            <div className="h-screen p-16">
                {/* <BasciConnect></BasciConnect> */}
                <div className="flex h-full gap-8">
                    {/* left */}
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex flex-col items-center gap-2">
                            <Image width={60} height={60} src={Logo.src} alt="" />
                            <div className=" ordinal gold" style={{
                                writingMode: "vertical-rl",
                            }}>Loong City</div>
                        </div>
                        <div className="text-xl flex flex-col gap-8 justify-center items-center">
                            <div className=" flex flex-col gap-4 ">
                                <div className=" hover:opacity-60">
                                    <a href="">  <RiTwitterXFill /></a>

                                </div>
                                <div className=" hover:opacity-60">
                                    <a href=""><FaDiscord /></a>
                                </div>
                                <div className=" hover:opacity-60">
                                    <a href=""><FaTelegram /></a>
                                </div></div>
                            <div className="p-4 bg-[rgba(255,255,255,.1)] rounded-full"><FaWallet /></div>
                        </div>
                    </div>
                    {/* right */}
                    <div className=" w-full flex flex-col justify-between relative"
                    style={{
                        backgroundImage: `url(${bgmax.src})`,
                        backgroundSize: "100% 100%",
                    }}
                    >
                        <div className=" w-[420px] flex gap-4 rounded-ee-3xl pr-4 pb-4 absolute top-0" style={{
                            backgroundImage: `url(${longbg.src})`,
                            backgroundSize: "50% 100%",
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "rgb(0,0,0)"
                        }}>

                            <Image width={700} height={100} src={Ten.src} alt="" />

                            <div className=" flex flex-col justify-between gap-4">
                                <div className=" text-xs gold">
                                    <span className=" text-lg">龍城</span>（Loong City）是一座架空的中国城市。传统与未来的各种元素在这里交织和碰撞，由此产生了许许多多未知的可能。蒸汽朋克与传统中国构成了龍城的核心元素。每个龍城PFP都是这个架空世界的入场券。
                                </div>
                                <div className="flex justify-between gap-2 items-center">
                                    <div className=" px-8 py-2 bg-white text-black text-center rounded-3xl w-full cursor-pointer">More</div>
                                    <a href="">
                                        <div className="p-3 bg-white rounded-full text-black justify-center flex items-center">
                                            <FaBook />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between absolute bottom-0">
                            <div className="flex gap-4 pr-4 pt-4 rounded-tr-3xl outline-8"  style={{
                            backgroundImage: `url(${longbg2.src})`,
                            backgroundSize: "50% 100%",
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "rgb(0,0,0)"
                        }}>
                            <div>
                                <div className="flex gap-4">
                                    <div>
                                    <Image src={lineActive.src} width={10} height={70} alt="" />
                                    </div>
                                    <div>
                                        <div className=" text-sm text-[rgba(255,255,255,.4)]">01-Status</div>
                                        <div className="gold">Whiter Mint</div>
                                        <div className=" text-xs flex gap-2 gold">
                                            <div>0.05ETH</div>
                                            <div>February 16, 2024</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                <div>
                                    <Image src={line.src} width={10} height={70} alt="" />
                                    </div>
                                    <div>
                                    <div className=" text-sm text-[rgba(255,255,255,.4)]">02-Status</div>
                                        <div className="gold">Public Mint</div>
                                        <div className=" text-xs flex gap-2 gold">
                                            <div>0.05ETH</div>
                                            <div>February 16, 2024</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <div className="flex gap-8 justify-between">
                                    <div>
                                        <div className=" text-gray-400 text-xs">Minted</div>
                                        <div>100/1000</div>
                                    </div>
                                    <div>
                                    <div className=" text-gray-400 text-xs">Price</div>
                                        <div className=" flex justify-center items-center">0.01

                                            <FaEthereum/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className=" text-gray-400 text-xs">Amount</div>
                                    <div className="flex justify-between gap-1">
                                        <div className=""><input className="w-10 bg-transparent outline-none border text-center rounded-lg border-[rgba(255,255,255,.1)]" type="nunmber" defaultValue={10} /></div>
                                        <div className=" bg-[rgba(255,255,255,.1)] px-4 rounded-2xl cursor-pointer">1</div>
                                        <div className=" bg-[rgba(255,255,255,.1)] px-4 rounded-2xl cursor-pointer">5</div>
                                        <div className=" bg-[rgba(255,255,255,.1)] px-4 rounded-2xl cursor-pointer">10</div>
                                    </div>
                                </div>
                                <div className=" px-8 py-2 bg-white text-black text-center rounded-3xl w-full cursor-pointer mt-4">
                                    Mint
                                </div>
                            </div>
                            </div>
                  
                        </div>
                        <div className="pt-4 pl-4 rounded-tl-3xl absolute right-0 bottom-0" style={{
                                backgroundColor: "rgb(0,0,0)"
                            }}>
                                <Image width={200} height={150} src={logobig.src} alt="" />
                            </div>
                    </div>
                </div>
            </div>
            {/* <Script src="https://cdn.tailwindcss.com" async></Script> */}
        </div>
    );
};

export default Home;
