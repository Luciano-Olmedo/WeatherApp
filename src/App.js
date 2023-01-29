
import { useState, useEffect } from 'react';
import Icons from './components/Icons';


const App = () => {
  const [search, setSearch] = useState("")
  const [values, setValues] = useState("")
  const [icon, setIcon] = useState("")

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=a23324804d00b26d245bfef642bbbad2`

  const getData = async () => {
    await fetch(URL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.cod >= 400) {
          setValues(false)
        } else {
          console.log(data)
          console.log(data.weather[0].main)
          setIcon(data.weather[0].main)
          setValues(data)
        }
      })
      .then(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    getData()

  }, [search])//

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value)
      setSearch(e.target.value)
    }
  }
  return (
    <>
      <div className=' grid place-items-center '>
        <h2 className='text-bold text-4xl text-white place-items-center mt-12'>Magic Weather App</h2>
        <div >
          <input
            type="text"
            placeholder='Enter Your Location'
            onKeyDown={handleSearch}
            className="text-center text-xl font-semibold p-2  rounded mt-4 mx-auto border-b "
          />
        </div>
      </div>
      <div className='grid place-items-center '>
        {
          (values) ?
            (<div className='bg-white w-80 mt-4 mx-auto '>
              <h1 className='text-center font-bold bg-cyan-300'>City: {values.name}</h1>
              <p className='text-center font-bold  bg-cyan-300'>Temperature: {values.main.temp.toFixed(0)}&deg;</p>
              <img className='icon' src={Icons(icon)} alt="icon-weather" />
              <h1 className='text-center text-2xl mb'>{values.weather[0].main}</h1>
              <div className='flex justify-around bg-cyan-300 py-2'>
                <p className='font-bold'>Min: {values.main.temp_min.toFixed(0)}&deg;</p>
                <p className='font-bold'>Max: {values.main.temp_max.toFixed(0)}&deg;</p>
              </div>
            </div>)
            :
            (<h1></h1>)

        }
      </div>
    </>
  )
}

export default App
