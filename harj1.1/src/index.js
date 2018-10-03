import React from 'react'
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
    )
}
const Sisalto = (props) => {
  return (
    <div>
      <p>{props.name} {props.maara}</p>
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
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto name={osa1} maara={tehtavia1}/>
      <Sisalto name={osa2} maara={tehtavia2}/>
      <Sisalto name={osa3} maara={tehtavia3}/>
      <Yhteensa yhteensa={tehtavia1 + tehtavia2 + tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
