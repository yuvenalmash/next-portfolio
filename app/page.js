import Headline from '@/components/headline';
import Projects from '@/components/projects';
import Techstack from '@/components/techstack';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-16">
      <Headline />
      <Projects />
      <Techstack />
      <Contact />
    </main>
  )
}
