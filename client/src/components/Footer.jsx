// import component
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-10 bg-slate-300 flex items-center justify-between px-5 lg:justify-center z-50">
      <div className="flex items-center space-x-4">
        <p className="text-PrimaryColor text-[15px] ">© 2024 Tak Mat O Tur</p>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
