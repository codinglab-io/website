import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import ImageBanner from '../components/ImageBanner/ImageBanner';

const Home: NextPage = () => (
  <main className="bg-zinc-900 min-h-screen text-white flex flex-col items-center gap-10">
    <div className="max-w-5xl">
      <ImageBanner />
    </div>
    <h1 className="text-4xl sm:text-5xl">Join us !</h1>
    <div className="flex gap-6 text-5xl">
      <a
        href="https://discord.gg/SAusderF5g"
        className="hover:shaky-animation"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faDiscord} />
      </a>
      <a
        href="https://github.com/codinglab-io"
        className="hover:shaky-animation"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </main>
);

export default Home;
