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
            href="https://www.instagram.com/tak_mat_o_tur?igsh=dmlvaWVwc3EzdHR2"
            target="blank"
          >
            <TiSocialInstagram />
          </a>
        </li>
        <li>
          <a
            className="text-PrimaryColor transition hover:text-black text-xl"
            href="https://www.facebook.com/profile.php?id=61558195943539"
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
