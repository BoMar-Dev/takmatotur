// import img-icons
import facebook from "../img/footer/facebook.svg";
import instagram from "../img/footer/instagram.svg";

const Social = () => {
  return (
    <div>
      <ul className="flex">
        <li className="mr-2 md:mr-4">
          <a
            className="transition hover:text-black text-2xl md:text-3xl"
            href="https://www.instagram.com/tak_mat_o_tur?igsh=dmlvaWVwc3EzdHR2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Besök vår Instagram-sida"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-[27px] mt-[2px] filter contrast-125 brightness-90"
            />
          </a>
        </li>
        <li>
          <a
            className="transition hover:text-black text-2xl md:text-3xl rounded-xl"
            href="https://www.facebook.com/profile.php?id=61558195943539"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Besök vår Facebook-sida"
          >
            <img src={facebook} alt="Facebook" className="w-[22px]  mt-[4px]" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
