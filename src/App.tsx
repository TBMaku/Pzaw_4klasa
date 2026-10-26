import Film from "./Greeter";
// import Book from "./books";
// import Album from "./Albumc";
// import Track from "./assets/Tracks";

interface FilmProps{
    plakat:string;
    tytul:string;
    rok:number;
}

const films:FilmProps[] = [
      { plakat: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-uHoOK3etiltlenXnoR-o9_lQ4TGlhOS7Nu0xDVrMsWYtl2Uj", tytul: "Dead Poets Society", rok: 1989 },
      { plakat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWq4HMD2ENjDbotFCBo6I4QDWbsUJht6kUFNRjWk8zax_ndvTwJYQ3MywVSLZOL7Rt0Ni&s=10", tytul: "Perks of being a Wallflower", rok: 2012 },
      { plakat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4ngcb251BWcV9EGK9UK3iDsI1cefjllocQjRkJExV9v_MW7FIScJkWYVzlovKTronoAu7g&s=10", tytul: "Good Will Hunting", rok: 1997 }
    ];


function App(){
const cards = films.map((film) => (<Film
        plakat={film.plakat}
        tytul={film.tytul}
        rok={film.rok}
    />));
  

 return(
      <main>{cards}</main>

      // <Book plakat="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULwfFk7tx5KPh7hoYIQkL14Sdx0CZN-ZzkQRmdG-NZpN7WK8c5V2OSJAmCUQSLI7bJwMdwHjfMdMJ523S0bXFDJ_E5ysRIQRYnBAxskw&s=10" tytul="Dead Poets Society" rok={1989} liczbastron={176}/>
      // <Book plakat="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398530003/the-perks-of-being-a-wallflower-ya-edition-9781398530003_hr.jpg" tytul="Perks of being a Wallflower" rok={1999} liczbastron={224}/>
      // <Book plakat="https://cdn.swiatksiazki.pl/media/catalog/product/8/2/8299906367582.jpg?width=650&height=650&store=default&image-type=small_image" tytul="Wiedzmin Ostatnie Życzenie" rok={1993} liczbastron={332}/>

      // <Album plakat="https://upload.wikimedia.org/wikipedia/en/0/0c/Linkin_Park_Meteora_Album_Cover.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" tytul="Meteora" zespol="Linkin Park" gatunek="Nu Metal" rok={2003} >
      //   <Track index={1} title="Foreword" time={0.13}/>
      //   <Track index={2} title="Don't Stay" time={3.07}/>
      //   <Track index={3} title="Somewhere I Belong" time={3.33}/>
      //   <Track index={4} title="Lying from You" time={2.55}/>
      //   <Track index={5} title="Hit the Floor" time={2.44}/>
      //   <Track index={6} title="Easier to Run" time={3.24}/>
      //   <Track index={7} title="Faint" time={2.42}/>
      //   <Track index={8} title="Figure.09" time={3.17}/>
      //   <Track index={9} title="Breaking the Habit" time={3.16}/>
      //   <Track index={10} title="From the Inside" time={2.55}/>
      //   <Track index={11} title="Nobody's Listening" time={2.58}/>
      //   <Track index={12} title="Session" time={2.24}/>
      //   <Track index={13} title="Numb" time={3.07}/>
      // </Album>
      // <Album plakat="https://i.scdn.co/image/ab67616d0000b27354b1b310f66b4d887750a32f" tytul="Kalejdoskop" zespol="Wyjdzie w Praniu" gatunek="Garage rock" rok={2026} >
      //   <Track index={1} title="mw" time={3.49}/>
      //   <Track index={2} title="rower" time={4.46}/>
      //   <Track index={3} title="fistaszek" time={5.16}/>
      //   <Track index={4} title="11:11" time={6.11}/>
      //   <Track index={5} title="Kalejdoskop" time={5.40}/>
      //   <Track index={6} title="6" time={4.52}/>
      //   <Track index={7} title="splątani" time={7.07}/>
      //   <Track index={8} title="ranny ptaszek - bonus track" time={4.33}/>
      // </Album>
  );
};

export default App 