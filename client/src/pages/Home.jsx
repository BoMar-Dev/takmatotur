import mondayRun from "../img/home/monday.jpg";
import topptur from "../img/home/topptur.jpg";

const Home = () => {
  return (
    <section className="bg-white p-5">
      <div className="p-5 rounded-md ">
        <h2 className="text-xl font-medium text-center mb-2">Tak Mat O Tur</h2>
        Välkommen till Tak Mat o Tur i Duved, där vi kombinerar komfort,
        gastronomi och äventyr för oförglömliga upplevelser. Drivna av vår
        passion för löpning, skidåkning och gästupplevelser, strävar vi efter
        att ge dig det bästa av Duved med omnejd. Vi erbjuder en unik och genuin
        vistelse fylld med äventyr, god mat och fantastisk natur.
      </div>
      {/* card 1 */}
      <div className="bg-white flex flex-col p-5 shadow-xl mt-10 mb-10 rounded-lg">
        <img className=" rounded-md" src={mondayRun} alt="running" />
        <h2 className="text-xl mt-2 font-medium">Måndagslöpning</h2>
        <p className=" text-[16px] mt-5">
          Upptäck magin med Jämtlands härligaste löpargrupp! Under sex måndagar
          får du chansen att vara med i en inspirerande gemenskap och utveckla
          din löpning på bästa sätt.{" "}
        </p>
      </div>
      {/* card 2 */}
      <div className="bg-white flex flex-col p-5 shadow-xl mb-20">
        <img className=" rounded-md" src={topptur} alt="running" />
        <h2 className="text-xl mt-2 font-medium">Topptur för alla årstider</h2>
        <p className=" text-[16px] mt-5">
          Vare sig det är sommar, vår, höst eller vinnter så kan vi erbjuda
          toppturer för alla. Vi försöker ta oss ifrån folkmängden och försöker
          att ta er till ställen där vi får känna av lugnet och äventyret på
          samma gång.{" "}
        </p>
      </div>
    </section>
  );
};
export default Home;
