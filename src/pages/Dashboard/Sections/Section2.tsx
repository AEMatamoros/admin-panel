import { useState } from "react";
import { AppCard,AppBarChart, AppChart } from "../../../components";
import {UserData} from '../../../db/dataGraphicsResponse';


export default function Section2() {

  const [userData,setUserData] = useState({
    labels: UserData.map((data)=> data.year),
    datasets: [
      {
        label: "User",
        data: UserData.map((data)=>data.userGain),
        backgroundColor:[
          '#E74C3C',
          '#CA6F1E',
          '#FFC300',
          '#FF5733',
          '#2E4053'
        ]

      }
    ]  
  });

  return (
    <>
      <AppCard title="Gráficos" id="graficos" cols="2">
        <AppChart type="bar" data={userData} title="Grafico Bar" />
        <AppChart type="line" data={userData} title="Grafico Line" />
      </AppCard>
      <AppCard title="Gráficos 2" footer="Total" id="graficos2" cols="2">
        <AppChart type="pie" data={userData} title="Grafico Pie" />
        <AppChart type="doughnut" data={userData} title="Grafico Doughnut"/>
      </AppCard>
      <AppCard title="Gráficos 3" footer="Total" id="graficos2" cols="2">
        <AppChart type="polarArea" data={userData}  title="Grafico Polar Area"/>
        <AppChart type="radar" data={userData} title="Grafico Radar" />
        <AppChart type="scatter" data={userData} title="Grafico Scatter" />
        <AppChart type="bubble" data={userData}  title="Grafico Bubble"/>
      </AppCard>

    </>
  );
}
