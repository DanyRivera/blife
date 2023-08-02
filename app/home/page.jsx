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
                <div className="absolute top-0">
                    <div className="flex m-10">
                        <p>Hola</p>
                        <p>Hola</p>
                        <p>Hola</p>
                        <p>Hola</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home