import { FaGithub, FaDiscord, FaMediumM, FaTwitter} from 'react-icons/fa';

function Community() {
  return (
    <div className="text-center container p-3 mx-auto mb-20">
      <div className="flex flex-col items-center text-white rounded-xl p-2">
        <h3 className="text-xl font-semibold py-2">Join Our Community</h3>
        <div className="flex gap-5 justify-center">
          <a
            className="py-1 px-2 rounded-md text-xl"
            href="https://github.com/credorelabs"
            target="_blank"
            rel="noreferrer"
            >
            <FaGithub />
          </a>
          <a
            className="py-1 px-2 rounded-md text-xl"
            href="https://twitter.com/CredoreXYZ"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="py-1 px-2 rounded-md text-xl"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaMediumM />
          </a>
          <a
            className="p-1 rounded-md text-2xl"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Community;
