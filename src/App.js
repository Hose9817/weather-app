import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';
import CityItem from './components/CityItem';

const API_KEY = '42e49542f62077edf52bc4056736379b';

const listOfCities = [
  {
    id: uuidv4(),
    name: 'Berlin',
    temper: 5,
    clear: 'Clear',
  },
];

function App() {

  const [temp, setTemp] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [clarity, setClarity] = useState(undefined);
  const [error, setError] = useState(undefined);

  const [list, setList] = useState(JSON.parse(localStorage.getItem('cityItems')) || listOfCities)
  const [inputArea, setInputArea] = useState('')
  const [open, setOpen] = useState(false);

  const gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if (city) {
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();


      if (data.cod === '404') {
        setTemp(undefined)
        setCity(undefined)
        setCountry(undefined)
        setClarity(undefined)
        setError('Enter the CORRECT name of the city')
      } else {
        setTemp(data.main.temp)
        setCity(data.name)
        setCountry(data.sys.country)
        setClarity(data.weather[0].main)
        setError(undefined)
        setInputArea('')
        setOpen(!open)
      }

    } else {
      setTemp(undefined)
      setCity(undefined)
      setCountry(undefined)
      setClarity(undefined)
      setError('Type name of the city')

    }
  }

  const addNewItem = () => {
    const newItem = {
      id: uuidv4(),
      name: city,
      temper: temp,
      clear: clarity,
    };
    const newList = [...list, newItem]
    localStorage.setItem('cityItems', JSON.stringify(newList));
    setList(newList)
  }

  const deleteBtnHandler = (id) => {
    const newList = list.filter(el => el.id !== id);
    localStorage.setItem('cityItems', JSON.stringify(newList));
    setList(newList);
  }

  const clearAllList = () => {
    const newList = [];
    localStorage.setItem('cityItems', JSON.stringify(newList));
    setList(newList);
  }



  return (
    <div className='container'>
      <Info />
      <Form
        weatherMethod={gettingWeather}
        inputArea={inputArea}
        setInputArea={setInputArea}
      />
      <Weather
        temp={temp}
        city={city}
        country={country}
        clarity={clarity}
        error={error}
        addNewItem={addNewItem}
        open={open}
        setOpen={setOpen}
      />

      {list.map(el => <CityItem
        key={el.id}
        el={el}
        deleteBtnHandler={deleteBtnHandler}
      />)}

      <button onClick={clearAllList} class="btn btn-danger">Clear All</button>

    </div>
  );


}

export default App;
