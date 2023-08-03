import Image from "next/image";
import Styles from "../styles/Home.module.css";
import {Dongle} from "next/font/google";

const dongle = Dongle({
    subsets: ['latin'],
    weight: '400'
  })
  

const Home = () => {
    return (
        <main className={`${Styles.bg_gradient} p-14`}>
            <section className="relative">
                <Image
                    className={`${Styles.robot_animation} w-full h-full`}
                    src="/img/bg-robot.svg"
                    width={500}
                    height={500}
                    alt="bg-robot"
                />
                <div className="absolute top-0 w-full h-full">
                    <div className={`${Styles.bar_animation} flex justify-between items-center px-16 py-10`}>
                        <p className={`${dongle.className} text-6xl font-bold`}>noon</p>
                        <div className="flex gap-12 font-bold">
                            <p className="hover:-translate-y-2 transition-all cursor-pointer">Pricing</p>
                            <p className="hover:-translate-y-2 transition-all cursor-pointer">Features</p>
                            <p className="hover:-translate-y-2 transition-all cursor-pointer">Open Sources</p>
                            <p className="hover:-translate-y-2 transition-all cursor-pointer">Contact</p>
                        </div>
                        <button
                            className="bg-[#000] text-[#fff] text-sm px-8 py-2 rounded-full hover:-translate-y-2 transition-all"
                        >Sign In</button>
                    </div>
                    <div className="flex flex-col gap-40">
                        <div className={`${Styles.heading_animation} flex flex-col gap-4 ml-52 mt-14`}>
                            <h1 className="text-7xl w-1/3 font-bold">Make it awesome.</h1>
                            <p className="text-xl text-[#88888C]">AI trained to generate  realistic 3D objects.</p>
                            <button
                                className="flex justify-center gap-4 text-[#fff] bg-[#3D5CFF] w-40 px-4 py-3 rounded-full mt-6 hover:-translate-y-2 transition-all "
                            >
                                <p>Get Started</p>
                                <p>{'>'}</p>
                            </button>
                        </div>
                        <div className={`${Styles.section_animation} mx-52 divide-y bg-[#fff] rounded-xl shadow-2xl`}>
                            <div className="flex justify-between py-4 px-10">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/img/ai-trained.svg"
                                        width={20}
                                        height={20}
                                        alt="Ai"
                                    />
                                    <p className="text-[#88888C]">AI trained to generate realistic 3D objects</p>
                                </div>
                                <button
                                    className="bg-[#3D5CFF] p-2 rounded-full"
                                >
                                    <Image
                                        src="/img/star-blue.svg"
                                        width={20}
                                        height={20}
                                        alt="star"
                                    />
                                </button>
                            </div>
                            <div className="pt-6 pb-8 px-10 grid grid-cols-4">
                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/img/styles.svg"
                                        width={20}
                                        height={20}
                                        alt="style"
                                        className="mt-2"
                                    />
                                    <div>
                                        <p className="text-2xl tracking-wide font-bold">Style</p>
                                        <p className="text-base text-[#88888C] ">Choose your style</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/img/material.svg"
                                        width={20}
                                        height={20}
                                        alt="style"
                                        className="mt-2"
                                    />
                                    <div>
                                        <p className="text-2xl tracking-wide font-bold">Material</p>
                                        <p className="text-base text-[#88888C] ">Choose material</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/img/creativity.svg"
                                        width={20}
                                        height={20}
                                        alt="style"
                                        className="mt-2"
                                    />
                                    <div>
                                        <p className="text-2xl tracking-wide font-bold">Creativity</p>
                                        <p className="text-base text-[#88888C] ">High level</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/img/ai-model.svg"
                                        width={20}
                                        height={20}
                                        alt="style"
                                        className="mt-2"
                                    />
                                    <div>
                                        <p className="text-2xl tracking-wide font-bold">AI Model</p>
                                        <p className="text-base text-[#88888C] ">Midjourney 5.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home