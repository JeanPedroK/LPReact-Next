import './Products.scss';
import img_products_1 from "../../../public/assets/images/img_products_1.png"



function Products() {

    const text_products = {
        main_title: 'Tudo o que o seu negócio precisa!',
        sub_title: 'Na Lurie Labs, conectamos empreendedores com ideias inovadoras a nossa equipe de especialistas e investidores.',
        // Adicione ou altere conforme necessário

    }
    return (
        <div className='products' id="products">
            <div className='container'>
                <div className="row">
                    <div className='title_products'>
                        <h1>{text_products.main_title}</h1>
                        <p className='text-muted'>{text_products.sub_title}</p>
                    </div>
                    <div className='img_products pt-4 mb-5'>
                        <img src={img_products_1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
