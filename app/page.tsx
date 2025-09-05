import Image from "next/image";
import OrangeImg from "@/public/orange3.webp";

export default function Home() {
  return (
    <main className="bg-white max-w-xs p-4 my-10 md:max-w-3xl md:grid md:grid-cols-2 md:gap-4 md:p-5 shadow-[5px_5px_0px_orange]">
      <Image
        src={OrangeImg}
        alt="orange on a white background"
        className="block mx-auto md:h-auto md:w-full object-contain"
      />
      <section>
        <h1 className="font-title text-3xl">A single orange</h1>
        <p className="font-title text-xl text-gray-600">with stem and leaf</p>
        <h2 className="text-5xl font-light my-3">
          $1<span className="text-xl">.35</span>
        </h2>
        <p className="font-light text-gray-500">
          Experience a burst of sunshine in every bite with this hand-picked,
          sun-drenched jewel of the citrus world.
        </p>
        <div className="flex items-center gap-3 my-4">
          <button className="bg-gradient-to-b from-light_orange to-orange px-4 py-2 hover:bg-gradient-to-t text-white uppercase flex-grow-1 md:flex-grow-0">
            Add to Cart
          </button>
          <svg
            className="fill-orange transition-transform hover:scale-125 duration-300 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            height="3l4px"
            viewBox="0 -960 960 960"
            width="34px"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
          </svg>
        </div>
        <h3 className="uppercase font-light text-xl">Features</h3>
        <ul className="font-light list-disc ml-3 pl-3 text-sm marker:text-orange">
          <li>
            <span className="font-normal">Nature&apos;s candy</span>: A symphony
            of sweet and tangy notes
          </li>
          <li>
            <span className="font-normal">Vibrant hue</span>: A visual feast for
            the eyes
          </li>
          <li>
            <span className="font-normal">Invigorating aroma</span>: A sensory
            delight
          </li>
          <li>
            <span className="font-normal">Nutrient-rich</span>: Bursting with
            Vitamin C
          </li>
          <li>
            <span className="font-normal">Perfect for</span>: snacking, juicing,
            or culinary creations
          </li>
        </ul>
      </section>
    </main>
  );
}
