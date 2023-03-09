import React from "react";


const Card = ({nombre, universidad, carrera}) => {
    let imagen = ''
    const imagen_carrera = (carr) => {
        if (carr === "Front") {
            imagen = 'https://desarrolloweb.com/storage/tag_images/actual/RMhVjjVD4x1sL1vNnEx6BBFITf9eaEPedch3nfqs.png'
        } else if (carr === "Back") {
            imagen = 'https://geekytheory.com/content/images/size/w2000/2015/10/programming-language-min.jpg'
        } else if (carr === "DevOps") {
            imagen = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*JIaba979mIQ_A3IBuOncFQ.jpeg'
        }
        return imagen;
    }
    let roadmap = ''
    const link = (carr) => {
        if (carr === "Front") {
            roadmap = 'https://roadmap.sh/frontend'
        } else if (carr === "Back") {
            roadmap = 'https://roadmap.sh/backend'
        } else if (carr === "DevOps") {
            roadmap = 'https://roadmap.sh/devops'
        }
        return roadmap;
    }

  return (
    <div className='card'>
        <h2>Hola {nombre}!!! </h2>
        <div><img src={imagen_carrera(carrera)} className='imagen'></img> </div>   {/*borrar si algo */}
        <p> te ayudaremos a entrar en la universidad {universidad},<br/>
        pero antes conoce un poco de la carrera {carrera}<br/>
        en el siguiente link:</p>
        <a href={link(carrera)} target="_blank">Roadmap {carrera}</a>

    </div>
  );
};


export default Card;