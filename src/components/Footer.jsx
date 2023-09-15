import facebook from "../assets/Socials/facebook.svg";
import instagram from "../assets/Socials/instagram.svg";
import twitter from "../assets/Socials/twitter.svg";
import Youtube from "../assets/Socials/youtube.svg";
const Footer = () => {
    return <>
        <div>
            <div className="socials flex justify-center mt-[10rem] space-x-7 ">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={Youtube} alt="youtube" />
            </div>
            <div className="descriptions text-zinc-800 text-xl  flex justify-center space-x-10 mt-7 font-medium">
                <p>Conditions Of Use</p>
                <p>Privacy & policy</p>
                <p>Press Room</p>
            </div>
            <div className=" text-slate-600 my-9 flex justify-center text-xl font-medium space-x-4">&copy; 2023 MovieBox By ChiefLopes</div>
        </div>
    </>;
};

export default Footer;
