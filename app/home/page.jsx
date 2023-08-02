import Image from "next/image";
import Styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <main className={`${Styles.bg_gradient} p-14`}>
            <section className="relative">
                <Image
                    className="w-full h-full"
                    src="/img/bg-robot.svg"
                    width={500}
                    height={500}
                    alt="bg-robot"
                />
                <div className="absolute top-0 w-full">
                    <div className="flex justify-between items-center mx-20 py-14">
                        <p className="text-3xl font-bold">noon</p>
                        <div className="flex gap-16 font-bold">
                            <p>Pricing</p>
                            <p>Features</p>
                            <p>Open Sources</p>
                            <p>Contact</p>
                        </div>
                        <button
                            className="bg-[#000] text-[#fff] text-sm px-8 py-2 rounded-full"
                        >Sign In</button>
                    </div>
                    <div className="flex flex-col gap-7 mx-56">
                        <h1 className="text-8xl w-1/3 font-bold">Make it awesome.</h1>
                        <p className="text-2xl text-[#88888C]">AI trained to generate  realistic 3D objects.</p>
                        <button
                            className="flex justify-center gap-4 text-[#fff] bg-[#3D5CFF] w-40 p-4 rounded-full mt-6"
                        > 
                            <p>Get Started</p>
                            <p>{'>'}</p>
                        </button>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home