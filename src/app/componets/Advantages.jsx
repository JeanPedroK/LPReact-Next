import './Advantages.scss';
import { FaCircleCheck } from "react-icons/fa6";
import img_1 from "../../../public/assets/images/MODELAGEM DE NEGOCIO.png"
import img_2 from "../../../public/assets/images/DESIGN DE EXPERIENCIA.png"
import img_3 from "../../../public/assets/images/DESENVOLVIMENTO AGIL.png"
import img_empreendedor from "../../../public/assets/images/EMPREENDEDORES.png"

function Advantages() {


    const lista = [
        {
            title: 'Investimento em ideias relevantes',
            description: 'Receba horas de desenvolvimento e financiamento para transformar sua ideia em um negócio real.',
        },
        {
            title: 'Acesso a especialistas',
            description: 'Trabalhe com nossa equipe de desenvolvedores, designers e engenheiros experientes.',
        },
        {
            title: 'Menor risco',
            description: 'Com nosso suporte, você tem a parceria comprometida com o sucesso do projeto.',
        },
        {
            title: 'Validação rápida',
            description: 'Valide sua ideia no mercado com rapidez e eficiência.',
        },
        // Adicione ou altere conforme necessário

    ];


    const services_cards = [
        {
            name: 'Modelagem de negócio',
            content: 'Estruturação de processos para maximizar eficiência e inovação.',
            img: img_1
        },
        {
            name: 'Design de experiência',
            content: 'Criação de interfaces intuitivas que aumentam a satisfação do usuário.',
            img: img_2
        },
        {
            name: 'Desenvolvimento ágil',
            content: 'Entrega rápida de valor com ciclos iterativos e adaptação contínua.',
            img: img_3
        },
        // Adicione ou altere conforme necessário

    ];


    const text_advantages = {
        main_title: 'Vantagens para os empreendedores',
        sub_title: 'Na Lurie Labs, conectamos empreendedores com ideias inovadoras a nossa equipe de especialistas e investidores.',
        // Adicione ou altere conforme necessário

    }

    return (
        <div className='advantages' id='advantages'>
            <div className='container'>
                <div className="row">
                    <div className='title_advantages'>
                        <h1>{text_advantages.main_title}</h1>
                        <p className='text-muted'>{text_advantages.sub_title}</p>
                    </div>
                </div>
                <div className='row pt-3'>
                    <div className="col-lg-6 card_left" >
                        {lista.map((item, index) => (
                            <div key={index} className="items_lista">
                                <p><FaCircleCheck className='icon_color' /><strong className='ps-2'>{item.title}</strong>: <span className='text-muted'> {item.description}</span> </p>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 card_right img_color">
                        <div className="img_home">
                            <img src={img_empreendedor} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card_main d-flex flex-column flex-lg-row pt-3 pb-2 align-items-center">
                        {services_cards.map((item, index) => (
                            <div key={index} className="card col-lg-4 align-items-center">
                                <div className="card_body d-flex flex-column align-items-center">
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h3 className="card_title pt-3">{item.name}</h3>
                                    <p className='text-muted text-center'>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Advantages;