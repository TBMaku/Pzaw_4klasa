import ToDo from "./Greeter";
import { useState } from 'react'

interface ToDoProps{
    tytul:string;
    tresc:string;
    aktywnosc:boolean;
}



const Lists:ToDoProps[] = [
        {  tytul: "PZAW", tresc: "To zadanie", aktywnosc: false },
        {  tytul: "Matma", tresc: "Oblicz mase słońca", aktywnosc: false },
        {  tytul: "Niemiecki", tresc: "IDK", aktywnosc: false}
    ];


    


function App(){
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);  
  const decrement = () => setCount(count - 1);  


const cards = 
        Lists.map((List) => (<ToDo
        tytul={List.tytul}
        tresc={List.tresc}
        aktywnosc={List.aktywnosc}
    />));




 return ( 
<body className="bg-dark text-light min-vh-100 py-4" data-bs-theme="dark">
    <main className="container">
    <section className="mb-5">


      
      <div className="row g-4">{cards}</div>
      <div>nie wykonane zadania {count}</div>
    </section>

  </main>
</body>
  );
};

export default App 