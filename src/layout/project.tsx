import Image from 'next/image';
import Container from '../components/Container';

export default function ProjectLayout({ children, frontMatter}) {
  return (
    <Container
      title={`${frontMatter.title} -- Agon Idrizi`}
      description={frontMatter.summary}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        </div>
      </article>
    </Container>
  )
}