const Pet = ({pet}) => {
    const {category, price, image, pet_details} = pet;

    const style = {
        backgroundColor: 'aquamarine',
        borderRadius: '18px',
        margin: '30px',
        padding: '30px',
        color: 'gray',
        fontWeight: 800
    };

    return (
        <div style={style}>
            <h3>Pet Name: {category}</h3>
            <h3>Price: {price}</h3>
            <img style={{
                width: '100%',
                height: '320px',
                borderRadius: '20px'
            }} src={image}/>

            <h3>Details: {pet_details.slice(0, 100)}...</h3>
        </div>
    );
};

export default Pet;