// la palabra rafce me genera una arrow func por la extension descargada

// el props es palabra por convension pero el componente padre es App que le pasa informacion al hijo que es Card, y en este caso le pasa "elemento" 

const Card = (props) => {
    return (
        <div>
            <h3>Titulo de la card: elemento {props.elemento}</h3>
        </div>
    );
};

export default Card;