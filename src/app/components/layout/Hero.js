import Image from "next/image";

export default function Hero(){
    return(
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold text-primary leading-12">Helping Patients Out One at a Time</h1>
                <p className="my-6">Our Number one Priority</p>
                <div className="flex gap-4">
                    <button className="bg-primary text-white px-8 py-2 rounded-full">Patients</button>
                    <button>Menu</button>
                </div>
            </div>
            <div className="w-200 h-200 relative">
                <Image src={'/usman-yousaf-pTrhfmj2jDA-unsplash.jpg'} layout={'fill'} objectFit={'contain'} alt={'doctor'}></Image>
            </div>
        </section>
    ); 
}