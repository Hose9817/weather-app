
function Weather(props) {

    const addCityBtnHandler = () => {
        props.addNewItem()
        props.setOpen(!props.open);
    }

    return (
        <div>
            {(props.city && props.open) &&
                <div class="card" style={{ width: '400px',
                                            padding: '5px' }}>
                    <div class="card-body">
                        <h5 class="card-title mb-3"><b>Location:</b> {props.city}, {props.country}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"><b>Temperature:</b> {props.temp}&deg;</h6>
                        <p class="card-text text-muted"><b>Clarity:</b> {props.clarity}</p>
                    </div>
                    <button onClick={addCityBtnHandler} class="btn btn-outline-info">Add City</button>
                </div>
                // <div>
                //     <p> <b>Location:</b> {props.city}, {props.country}</p>
                //     <p> <b>Temperature:</b> {props.temp}&deg;</p>
                //     <p> <b>Clarity:</b> {props.clarity} </p>
                //     <button onClick={addCityBtnHandler}>Add City</button>
                // </div>
            }
            <p>{props.error}</p>
        </div>
    )
}
export default Weather;