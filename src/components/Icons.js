

const Icons = (icon) => {
  switch (icon) {
    case "Rain":
      icon = "icons/thunderstorms-rain.svg"
      console.log("Tormenta")
      break;
    case "Thunderstorm":
      icon = "icons/thunderstorms-rain.svg"
      console.log("Tormenta")
      break;
    case "Clear":
      icon = "icons/clear-day.svg"
      console.log("Despejado")
      break;
    case "Clouds":
      icon = "icons/cloudy.svg"
      console.log("Nublado")
      break;
    case "Fog":
      icon = "icons/fog.svg"
      console.log("Neblina")
      break;
    case "Snow":
      icon = "icons/snow.svg"
      console.log("Nieve")
      break;
    case "Smoke":
      icon = "icons/smoke.svg"
      console.log("Humo")
      break;
    case "Mist":
      icon = "icons/mist.svg"
      console.log("Humo")
      break;
    default:
      break;
     
  }
  return icon
}

export default Icons