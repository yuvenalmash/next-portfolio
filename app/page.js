import Headline from '@/components/headline';
import Projects from '@/components/projects';
import Techstack from '@/components/techstack';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between px-4 md:px-16">
        <Headline />
        <Projects />
        <Techstack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
