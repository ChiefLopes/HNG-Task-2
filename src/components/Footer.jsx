import facebook from "../assets/Socials/facebook.svg";
import instagram from "../assets/Socials/instagram.svg";
import twitter from "../assets/Socials/twitter.svg";
import Youtube from "../assets/Socials/youtube.svg";
const Footer = () => {
    return <>
        <div>
            <div className="socials flex justify-center my-[10rem] space-x-7 ">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={Youtube} alt="youtube" />
            </div>
        </div>
    </>;
};

export default Footer;
