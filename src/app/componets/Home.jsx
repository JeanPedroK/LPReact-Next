import './Home.scss';
import { MdOutlineEmail } from "react-icons/md";
import image_home_01 from "../../../public/assets/images/BANNER_TOPO.png"


function Home() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const text_home = {
        main_title: 'Transformamos suas ideias em negócios reais!',
        sub_title: 'Desenvolvemos MVPs com investimento compartilhado para levar suas ideias inovadoras ao mercado!',
        button_title: 'Transforme sua ideia',
        email_title: 'Entrar em contato'
        // Adicione ou altere conforme necessário

    }

    return (
        <div className='home' id="home">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 d-flex flex-column card_left'>
                        <h1 className='text-center'>{text_home.main_title}</h1>
                        <svg className='svg_top' width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#7247EC" strokeWidth="8" strokeLinecap="round" />
                        </svg>
                        <p className='text-left mt-4 pt-3'>{text_home.sub_title}</p>
                        <div className='d-flex gap-4 mt-3 buttons'>
                            <button className='form-control-submit-button' onClick={() => scrollToSection('contact')}>{text_home.button_title}</button>
                            <div className='pt-2 mt-1 email d-flex gap-1'><MdOutlineEmail /> <span className='email_text'></span>{text_home.email_title}</div>
                        </div>
                    </div>

                    <div className="col-lg-6 card_right img_color">

                        <div className="img_home">
                            <img src={image_home_01} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
