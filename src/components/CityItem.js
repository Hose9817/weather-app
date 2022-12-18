
function CityItem({ el, deleteBtnHandler }) {

    return (

        <div style={{
            border: '1px solid grey',
            borderRadius: '5px',
            marginBottom: '5px',
            padding: '5px',
            width: '400px'
        }} key={el.id}>
            <span><b>{el.name}</b></span>
            <p style={{ margin: '3px 0' }}>temp: {el.temper} &deg;</p>
            <p style={{ margin: '3px 0' }}>clarity: {el.clear}</p>
            <button onClick={() => deleteBtnHandler(el.id)} class="btn btn-outline-danger">Delete</button>
        </div>


    )
}

export default CityItem;