// icons
import { TiSocialInstagram } from "react-icons/ti";
import { RiFacebookBoxFill } from "react-icons/ri";

const Social = () => {
  return (
    <div className=" just">
      <ul className="flex">
        <li>
          <a
             className="text-PrimaryColor transition hover:text-black text-xl"
            href="http://wwww.instagram.com"
            target="blank"
          >
            <TiSocialInstagram />
          </a>
        </li>
        <li>
          <a
            className="text-PrimaryColor transition hover:text-black text-xl"
            href="http://wwww.instagram.com"
            target="blank"
          >
            <RiFacebookBoxFill />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Social;
