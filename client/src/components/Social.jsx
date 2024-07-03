// icons
import { TiSocialInstagram } from "react-icons/ti";
import { RiFacebookBoxFill } from "react-icons/ri";

const Social = () => {
  return (
    <div className=" just">
      <ul className="flex">
        <li className="mr-2 md:mr-4 ">
          <a
            className="text-PrimaryColor transition hover:text-black text-2xl md:text-3xl"
            href="https://www.instagram.com/tak_mat_o_tur?igsh=dmlvaWVwc3EzdHR2"
            target="blank"
          >
            <TiSocialInstagram />
          </a>
        </li>
        <li>
          <a
            className="text-PrimaryColor transition hover:text-black text-2xl md:text-3xl rounded-xl"
            href="https://www.facebook.com/profile.php?id=61558195943539"
            target="blank"
          >
            <RiFacebookBoxFill className="rounded-2xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Social;
