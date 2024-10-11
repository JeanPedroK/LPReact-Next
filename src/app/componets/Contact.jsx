import './Contact.scss';
import { useState } from 'react';
import axios from 'axios';
import MaskedInput from 'react-text-mask';
import { NumericFormat } from 'react-number-format';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img_submit from "../../../public/assets/images/FORMULARIO.png"


const Contact = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        projeto: '',
        mercado: '',
        fase: '',
        faturamento: '',
        mensagem: ''
    });



    const [dataSubmit] = useState([
        { name: 'Nome', type: 'text', placeholder: 'Insira o seu nome completo', field: 'nome' },
        { name: 'Email', type: 'email', placeholder: 'Insira o seu melhor e-mail', field: 'email' },
        { name: 'Telefone', type: 'tel', placeholder: '(DDD)12345-6789', field: 'telefone' },
        { name: 'Nome do projeto', type: 'text', placeholder: 'Insira o nome do seu projeto', field: 'projeto' },
        { name: 'Mercado de atuação', type: 'text', placeholder: 'Qual o mercado de atuação do seu projeto', field: 'mercado' },
        { name: 'Fase do projeto', type: 'text', placeholder: 'Em qual fase seu projeto se encontra', field: 'fase' },
    ]);


    const text_contact = {
        main_title: 'Entre em contato conosco',
        sub_title: 'A Lurie Labs está pronta para ajudar a transformar sua ideia em negócio!',
        text_form: 'Compartilhe conosco todas as informações sobre o seu projeto e logo retornaremos o seu contato.',
        button_title: 'Enviar mensagem',
        // Adicione ou altere conforme necessário

    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };

    const handleFaturamentoChange = (values) => {
        const { value } = values;
        setFormData((prevData) => ({
            ...prevData,
            faturamento: value
        }));
    };

    // Função para enviar os dados via POST
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit foi disparado", formData);

        axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            .then((response) => {
                toast.success('Formulário enviado com sucesso!', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                console.log('Mensagem enviada com sucesso!', response.data);
            })
            .catch((error) => {
                console.error('Erro ao enviar a mensagem:', error);
            });
    };


    return (
        <div className='container body_contact' id="contact">
            <div className='title_contact'>
                <h1>{text_contact.main_title}</h1>
                <p className='text-muted'>{text_contact.sub_title}</p>
            </div>
            <div className="d-flex row mt-4">
                <div className="col-lg-6 p-4 img_color">
                    <div className="img_home">
                        <img src={img_submit} alt="" />
                    </div>
                    {/* <div className='fundo_roxo'>
                    </div> */}
                </div>
                <div className="col-lg-6 p-4">
                    <div className='card_form'>
                        <p className='text-muted'>{text_contact.text_form}</p>
                        <form onSubmit={handleSubmit}>
                            {dataSubmit.map((item, index) => (
                                <div className="form-group" key={index}>
                                    <label className="form-label">{item.name} <span className='text-danger'>*</span> </label>

                                    {item.type === 'tel' ? (
                                        <MaskedInput
                                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                            className="form-control-input"
                                            placeholder={item.placeholder}
                                            name={item.field}
                                            value={formData[item.field]}
                                            onChange={handleChange}
                                            required
                                        />
                                    ) : (
                                        <input
                                            type={item.type}
                                            className="form-control-input"
                                            placeholder={item.placeholder}
                                            name={item.field}
                                            value={formData[item.field]}
                                            onChange={handleChange}
                                            required
                                        />
                                    )}
                                </div>
                            ))}
                            <div className="form-group">
                                <label className="form-label">Faturamento do último ano <span className="text-danger">*</span></label>
                                <NumericFormat
                                    thousandSeparator={true}
                                    prefix={'R$ '}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    allowNegative={false}
                                    className="form-control-input"
                                    placeholder="Faturamento do último ano"
                                    value={formData.faturamento}
                                    onValueChange={handleFaturamentoChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Mensagem<span className='text-danger'>*</span> </label>
                                <textarea id="mensage" name="mensagem" rows="5" cols="33" className="form-control-input" placeholder='Descreva o seu projeto aqui' value={formData.mensagem}
                                    onChange={handleChange}
                                    required>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">
                                    {text_contact.button_title}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
