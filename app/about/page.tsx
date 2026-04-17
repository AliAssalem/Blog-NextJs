import Image from "next/image"
import blogImg from "../../public/blogImg.png"

const AboutPage = () => {
  return (
    <section className="fix-height container m-auto">
      <h1 className="text-3xl text-gray-800 font-bold p-5">
        About This APP
      </h1>
      <p className="px-5 text-gray-600 text-xl"> This is the best blog platform . </p>
    </section>
  )
}

export default AboutPage
