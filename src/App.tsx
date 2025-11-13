
import './App.css'
import type {ItemData} from "./components/Item.tsx";
import {List} from "./components/List";
import {useState} from "react";


function App() {
    const [tasks, setTasks] = useState<ItemData[]>([
    {
      title: "Uklidit pokoj",
      description: "Vyluxovat, utřít prach a vyhodit odpadky.",
      done: false,
    },
    {
      title: "Napsat domácí úkol",
      description: "Vyřešit úlohy z matematiky a odevzdat do pátku.",
      done: true,
    },
    {
      title: "Nakoupit potraviny",
      description: "Mléko, chleba, máslo a zeleninu.",
      done: false,
    },
      {
        title: "Kup dárky na vánoce",
        description: "Napiš si seznam dárků a začni je pomale nakupovat.",
        done: true,
      },
  ]);

  return (
    <div>
      {/*<h1> Úkolníček </h1>*/}
      <List title={'Úkoly na tento týden'} items={tasks}/>
    </div>
  )
}

export default App
