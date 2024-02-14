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
import decoratepng from "../images/decorate.jpg"
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';

import titlebg from "../images/title.jpg"

import Head from "next/head";
import { useAccount } from 'wagmi'
import { useState } from "react";
import { Modal } from "antd";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import bgModal from "../images/bg-modal.png"

const ShowMoreCom = NiceModal.create(({ }) => {
    // Use a hook to manage the modal state
    const modal = useModal();
    return (
        <Modal
            title={<div className="flex gap-2 items-center"><img className=" w-[40px] h-[40px]" src={titlebg.src} alt="" /> Loong City</div>}
            // onOk={() => modal.hide()}
            visible={modal.visible}
            onCancel={() => modal.hide()}
            afterClose={() => modal.remove()}
            footer={null}
            // classNames="bg-black"
            className="note"
        >
            <div className=" text-3xl gold my-4">欢迎来到 龍城</div>
            <div style={{
                    lineHeight: "1.5",
                }}>
                <span className=" gold text-xl">龍城（Loong City）</span>
                是一座架空的中国城市。传统与未来的各种元素在这里交织和碰撞，由此产生了许许多多未知的可能。蒸汽朋克与传统中国构成了龍城的核心元素。每个龍城PFP都是这个架空世界的入场券。</div>
            <div className=" w-full my-4">
                <img src={bgModal.src} width="100%" height="100%" />
            </div>
            <div className=" space-y-4" style={
                {
                    lineHeight: "1.5",
                }
            }>
                <p> Loong City是第一个基于改进的ERC404协议的原创IP PFP 元宇宙项目，它的诞生寄托着我们对于WEB3最好的憧憬与幻想。</p>
                <p> 东方的古老文化总是令人着迷。广袤的土地被厚重的历史书写出无数动人的故事。LoongCity便诞生于这片热土。</p>
                <p>儿时我时常幻想，如果五百年前明朝没有崩溃于满清与农民起义的狂潮里，而是成功完成了工业革命并延续国祚至今，将会创造的是怎样的一个世界？藉由AI带来的生产力与最优秀的美术从业者，我们有幸创造一个完全架空的元宇宙世界。在曾经被称为紫禁城、如今被称作龍城的世界里，明朝并没有在十七世纪覆灭，而是成功完成了工业革命并延续国祚至今。</p>
                <p>龍城团队希望通过龍城和它的故事，让更多人体验和创造一个全新的世界。最初是PFP-NFT，然后将是AI驱动的短视频与艺术创作，在更远的未来，我们会创造一个基于NTF与Gamefi的全架空世界。龍城NFT将是这个未来世界的入场券。这种多维度的方式可以让任何人以一种全方位的方式感知中国文化和艺术，包括令人惊叹的古代纪念碑和前沿的技术创新。</p>
                <p>我们相信，这个超越艺术，拥抱无限自由的项目，将被更广泛的观众所接受。龍城NFT不仅仅是一张图片，它也是手工绘画的艺术品。藉由时代洪流里生产力的革命与ERC404协议的创新，我们有幸作为先行者为NFT与加密市场创造新的活力与可能性。</p>
                <p>首批龍城PFP NFT共有两万一千张不同的创作。他们有的是虎师和四相兽，也有分青龙战术支援部队（机械化）和皇帝御用与帝国最强战力白虎军（叄佰军），以及空天部队朱雀军 ，海军方面与特种作战部队（毒气部队鸩战斗算卜等…），同样也有中央科研与核心制造神工寺——的PFP。</p>
                <p>这些独一无二的架空创作未来都会作为蒸汽朋克大明1850这款gamefi中的角色来进行映射。我们计划在2024Q4推出最早的体验版本。</p>
            </div>
        </Modal>
    );
});


const Home: NextPage = () => {
    const { address, isConnected, isDisconnected, isConnecting } = useAccount();
    const { openConnectModal } = useConnectModal();
    const [openUserDetails, setOpenUserDetails] = useState(false)

    const showMoreCom = useModal(ShowMoreCom);

    const showMoreDetails = () => {
        // Show a modal with arguments passed to the component as props
        showMoreCom.show()
    }

    return (
        <div>
            <Head>
                <title>龍城 Loong City</title>
                <meta name="description" content="Generated by create next wagmi dapp" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=720, initial-scale=1, maximum-scale=1, user-scalable=no"
                />

            </Head>
            <Script src="https://cdn.tailwindcss.com"></Script>
            <div className="h-screen p-16" style={{
                minWidth: "1200px",
                minHeight: "730px"
            }}>
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
                                    <a href="https://twitter.com/LoongCity">  <RiTwitterXFill /></a>
                                </div>
                                {/* <div className=" hover:opacity-60">
                                    <a href=""><FaDiscord /></a>
                                </div>
                                <div className=" hover:opacity-60">
                                    <a href=""><FaTelegram /></a>
                                </div>*/}
                                </div> 
                            <div className="rounded-full hover:text-[#e8b23e] cursor-pointer relative flex items-center">
                                <BasciConnect></BasciConnect>
                            </div>
                        </div>
                    </div>
                    {/* right */}

                    <div className=" w-full flex flex-col justify-between relative"
                        style={{
                            borderTopRightRadius: "2rem",
                            backgroundSize: "100% 100%",
                            overflow: "hidden"
                            // maskImage: "image(url(mask.png), skyblue)"
                        }}
                    >
                        <video className="absolute top-0 right-0 left-0 bottom-0 -z-1 h-full w-screen objectfit opacity-50" autoPlay loop muted src="https://vpn.4everland.store/loongcity-webvideo2.mp4" style={{
                            borderTopRightRadius: "2rem",
                        }}>
                        </video>
                        <div className="pr-2 pb-2 bg-black absolute top-0" style={{
                            borderEndEndRadius: "2rem"
                        }}>
                            <div className=" absolute bottom-[-57px] left-[-1px]">
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className=" absolute right-[-50px] top-[3px]">
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className=" w-[420px] flex gap-4  pr-4 pb-4 " style={{
                                backgroundImage: `url(${longbg.src})`,
                                backgroundSize: "50% 100%",
                                backgroundPosition: "right",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: "rgb(0,0,0)",
                                borderEndEndRadius: "2rem",
                                overflow: "hidden"
                            }}>

                                <Image width={400} height={100} src={Ten.src} alt="" className="rounded-xl" />

                                <div className=" flex flex-col justify-between gap-4">
                                    <div className=" text-xs gold note leading-4">
                                        <span className=" text-lg">龍城</span>（Loong City）是一座架空的中國城市。傳統與未來的各種元素在這裏交織和碰撞，由此產生了許許多多未知的可能。蒸汽朋克與傳統中國構成了龍城的核心元素。每個龍城PFP都是這個架空世界的入場券。
                                    </div>
                                    <div className="flex justify-between gap-2 items-center">
                                        <div className=" px-8 py-1 bg-white text-black text-center rounded-3xl w-full cursor-pointer hover:text-[#e8b23e] font-bold" onClick={showMoreDetails}>More</div>
                                        {/* <a href="">
                                            <div className="p-2 bg-white rounded-full text-black justify-center flex items-center">
                                                <FaBook />
                                            </div>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr-2 pt-2 absolute bottom-0 bg-black" style={{
                            borderTopRightRadius: "2rem",
                        }}>
                            <div className=" absolute right-[-53px] bottom-[-1px]" style={{
                                transform: "rotate(270deg)",
                            }}>
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className=" absolute top-[-53px] left-[3px]" style={{
                                transform: "rotate(270deg)"
                            }}>
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className="flex justify-between " style={{
                                borderTopRightRadius: "2rem",
                                overflow: "hidden"
                            }}>
                                <div className="flex gap-12 pr-4 pt-4  outline-8" style={{
                                    backgroundImage: `url(${longbg2.src})`,
                                    backgroundSize: "50% 100%",
                                    backgroundPosition: "right",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "rgb(0,0,0)"
                                }}>
                                    <div className=" flex flex-col gap-2">
                                        <div className="flex gap-4">
                                            <div>
                                                <Image src={lineActive.src} width={10} height={70} alt="" />
                                            </div>
                                            <div>
                                                <div className=" text-sm text-[rgba(255,255,255,.4)] pb-2 anony">01-Status</div>
                                                <div className="gold">White List Mint</div>
                                                <div className=" text-xs flex gap-2 gold">
                                                    <div>FREE MINT</div>
                                                    <div>February 16, 2024</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div>
                                                <Image src={line.src} width={10} height={70} alt="" />
                                            </div>
                                            <div>
                                                <div className=" text-sm text-[rgba(255,255,255,.4)] pb-2 anony">02-Status</div>
                                                <div className="gold">Public Mint</div>
                                                <div className=" text-xs flex gap-2 gold">
                                                    <div>0.025 ETH</div>
                                                    <div>February 16, 2024</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex flex-col justify-between">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-4 justify-between">
                                                <div>
                                                    <div className=" text-gray-400 text-xs anony">Minted</div>
                                                    <div>100/1000</div>
                                                </div>
                                                <div>
                                                    <div className=" text-gray-400 text-xs anony">Price</div>
                                                    <div className=" flex justify-center items-center">0.0025

                                                        <FaEthereum />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className=" text-gray-400 text-xs anony">Amount</div>
                                                <div className="flex gap-2">
                                                    {/* <div className=""><input className="w-10 bg-transparent text-xs outline-none border text-center rounded-lg border-[rgba(255,255,255,.1)] text-[#DFD1B3]" type="nunmber" defaultValue={10} /></div> */}
                                                    <div className=" bg-[rgba(255,255,255,.1)] px-6 border border-[rgba(255,255,255,.2)] flex items-center text-xs rounded-2xl cursor-pointer hover:text-black hover:bg-[#DFD1B3]">1</div>
                                                    <div className=" bg-[rgba(255,255,255,.1)] px-6 border border-[rgba(255,255,255,.2)] flex items-center text-xs rounded-2xl cursor-pointer hover:text-black hover:bg-[#DFD1B3]">2</div>
                                                    {/* <div className=" bg-[rgba(255,255,255,.1)] px-6 border border-[rgba(255,255,255,.2)] flex items-center text-xs rounded-2xl cursor-pointer hover:text-black hover:bg-[#DFD1B3]">10</div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" px-8 py-1 bg-white text-black text-center rounded-3xl w-full cursor-pointer mt-4 font-bold hover:text-[#e8b23e]">
                                            Mint
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="pl-2 pt-2 rounded-tl-3xl absolute right-0 bottom-0 bg-black" style={{
                            borderTopLeftRadius: "2rem",
                        }}>
                            <div className=" absolute top-[-57px] right-0 rotate-180">
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className=" absolute left-[-50px] bottom-[3px] rotate-180">
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className="pt-4 pl-4 " style={{
                                backgroundColor: "rgb(0,0,0)",
                                borderTopLeftRadius: "2rem",
                                overflow: "hidden"
                            }}>
                                <Image width={250} height={180} src={logobig.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Home;
