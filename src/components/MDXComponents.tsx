import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className="text-blue-500 dark:text-blue-300" {...props} />
      </Link>
    );
  }

  return <a className="text-blue-500 dark:text-blue-300" target="_blank" rel="noopener noreferrer" {...props} />
}

const heading2 = ({children}) => (
  <h2 className="text-2xl font-bold tracking-tight text-primary !important dark:text-gray-100">{children}</h2>
)

const Video = ({props}) => (
  <div>
    <video src={require('../../public/my-dinner1.mp4')} loop autoPlay muted />
  </div>
)

const MDXComponents = {
  Image,
  a: CustomLink,
  heading2,
  Video

}

export default MDXComponents;