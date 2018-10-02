import React from 'react'
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
    )
}
const Osa = (props) => {
  return (
    <div>
      <p>{props.name} {props.maara}</p>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa name='Reactin perusteet' maara='10' />
      <Osa name='Tiedonvälitys propseilla' maara='7' />
      <Osa name='Komponenttien tila' maara='14' />
    </div>
  )
}
const Yhteensa = (props) => {
  return (
    <div>
      <p>Yhteensä {props.yhteensa}</p>
    </div>
  )

}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const tehtavia1 = 10
  const tehtavia2 = 7
  const tehtavia3 = 14
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto />
      <Yhteensa yhteensa={tehtavia1 + tehtavia2 + tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
