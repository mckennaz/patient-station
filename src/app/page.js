import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import PatientMenu from "./components/layout/PatientMenu";
import MenuItem from "./components/MenuItem";
import About from "./components/layout/About";
import Image from "next/image";
import ContactMe from "./components/layout/ContactMe";


export default function Home() {
  return (
    <>
      <Hero />
      <PatientMenu />
      <About />
      <ContactMe />
    </>
  )
}
