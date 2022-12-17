import '../App.css'

const CraftCard = ({ name, description, price }) => {
    return (
        <div className='card' >
            <div>
                <p> {name} </p>
                <p>  {price} </p>
            </div>

            <hr />
            {/* <p> DESCRIPTION: {description} </p> */}

            <div>
                <button>
                    Purchase {name}
                </button>
            </div>
        </div>
    )
}

export default CraftCard