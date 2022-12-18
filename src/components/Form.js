// import {useState} from 'react';

function Form(props) {

    return (
        <form onSubmit={props.weatherMethod}>
            <input
                style={{ width: '400px', 
                backgroundColor: 'rgb(223, 219, 219)',
                borderColor: 'black'}}
                class="form-control mb-1"
                required
                type="text"
                name="city"
                placeholder="Type city"
                onChange={event => props.setInputArea(event.target.value)}
                value={props.inputArea}
            />
            {/* <button>Get weather</button> */}
            <button class="btn btn-outline-primary mb-3">Get weather</button>

        </form>
    )
}
export default Form;