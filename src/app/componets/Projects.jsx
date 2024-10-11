import './Projects.scss';
import { FaArrowAltCircleRight } from "react-icons/fa";
import img_01 from "../../../public/assets/images/BANNER_WEMEI.png"
import img_02 from "../../../public/assets/images/BANNER_B2B.png"


function Projects() {

    const projects = [
        {
            title: 'WeMEI',
            description: 'Solução para o microempreendedor individual em fase de lançamento',
            img: img_01
        },
        {
            title: 'B2B Capital',
            description: 'Solução de transações financeiras etc e tal solução de transações financeiras etc e tal solução de transações financeiras etc e tal',
            img: img_02

        }
    ]

    const text_projects = {
        main_title: 'Nossos últimos projetos',
        sub_title: 'Alguns de nossos parceiros de projetos',
        // Adicione ou altere conforme necessário

    }

    return (
        <div className='projects' id="projects">
            <div className='container'>
                <div className="row">
                    <div className='title_projects'>
                        <h1>{text_projects.main_title}</h1>
                        <p className='text-muted'>{text_projects.sub_title}</p>
                    </div>
                </div>
                <div className='d-flex flex-column gap-4 mt-3 ps-4'>
                    {projects.map((item, index) => (
                        <div key={index} className="row d-flex flex-column">
                            <div className="row card_project">
                                <div className='d-flex col-lg-8 flex-column card_project_content'>
                                    <h4 className='card_title'>{item.title}</h4>
                                    <p className='card_description'>{item.description}</p>
                                    <a className='card_link' href="#">Acessar site <FaArrowAltCircleRight className='ms-1' /></a>
                                </div>
                                <div className='col-lg-4 img_color p-3'>
                                    <div className="img_home">
                                        <img src={item.img} alt="" />
                                    </div>
                                    {/* <div className='fundo_roxo'></div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;

