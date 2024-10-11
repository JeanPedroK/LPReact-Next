import './Testimonial.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const autores = [
    {
        estrelas: 5,
        autor: 'João Silva',
        comentario: 'Ótimo pacote para quem está começando!',
        cargo: 'Desenvolvedor',
        img: './assets/images/avatar1.png',
    },
    {
        estrelas: 4,
        autor: 'Pedro Silva',
        comentario: 'Ótimo pacote para quem está começando!',
        cargo: 'Desenvolvedor',
        img: './assets/images/avatar1.png',
    },
    {
        estrelas: 5,
        autor: 'Anderson Silva',
        comentario: 'Ótimo pacote para quem está começando!',
        cargo: 'Desenvolvedor',
        img: './assets/images/avatar1.png',
    },
    {
        estrelas: 1,
        autor: 'Paulo Silva',
        comentario: 'Ótimo pacote para quem está começando!',
        cargo: 'Desenvolvedor',
        img: './assets/images/avatar1.png',
    },
    {
        estrelas: 5,
        autor: 'Sergio Silva',
        comentario: 'Ótimo pacote para quem está começando!',
        cargo: 'Desenvolvedor',
        img: './assets/images/avatar1.png',
    },
    {
        estrelas: 3,
        autor: 'Matheus Silva',
        comentario: 'Ótimo pacote para quem está começando!',
        cargo: 'Desenvolvedor',
        img: './assets/images/avatar1.png',
    },
];

const text_testimonial = {
    main_title: 'Leve seu negócio para outro nível!',
    button_title: 'Entrar em contato',
    // Adicione ou altere conforme necessário

}



const Testimonial = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="slider_1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <hr className="section-divider" />
                        <div className="slider-container">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {autores.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial">
                                            <span className='star_custom'>
                                                {Array(item.estrelas)
                                                    .fill(0)
                                                    .map((_, i) => (
                                                        <FaStar key={i} className='icon_color' />
                                                    ))}
                                                {Array(5 - item.estrelas)
                                                    .fill(0)
                                                    .map((_, i) => (
                                                        <FaRegStar key={i} />
                                                    ))}
                                            </span>
                                            <strong><h2>{item.comentario}</h2></strong>

                                            <div className="testimonial_content">
                                                <img src={item.img} alt={item.autor} className="rounded_img" />
                                                <div className='d-flex flex-column'>
                                                    <p>{item.autor}</p>
                                                    <small className='text-muted'>{item.cargo}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer_testimonial">
                <div className='d-flex flex-column'>
                    <h1 className='title_testimonial'>{text_testimonial.main_title}</h1>
                    <button className='btn btn_custom' onClick={() => scrollToSection('contact')}>{text_testimonial.button_title}</button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
