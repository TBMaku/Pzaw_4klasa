import Film from "./Greeter";
import Book from "./books";
import Album from "./Albumc";
import Track from "./assets/Tracks";
import React, { useState } from 'react'

interface FilmProps{
    plakat:string;
    tytul:string;
    rok:number;
    rating:number;
}

interface BookProps{
    plakat:string;
    tytul:string;
    rok:number;
    liczbastron:number;
}

interface AlbumProps{
    plakat:string;
    tytul:string;
    rok:number;
    zespol:string;
    gatunek:string
    tracks:TrackProps[];
}

interface TrackProps{
    index:number;
    title:string;
    time:number;
}



const movies:FilmProps[] = [
        { plakat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWq4HMD2ENjDbotFCBo6I4QDWbsUJht6kUFNRjWk8zax_ndvTwJYQ3MywVSLZOL7Rt0Ni&s=10", tytul: "Perks of being a Wallflower", rok: 2012, rating: 8.5 },
        { plakat: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-uHoOK3etiltlenXnoR-o9_lQ4TGlhOS7Nu0xDVrMsWYtl2Uj", tytul: "Dead Poets Society", rok: 1989, rating: 9.5 },
        { plakat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4ngcb251BWcV9EGK9UK3iDsI1cefjllocQjRkJExV9v_MW7FIScJkWYVzlovKTronoAu7g&s=10", tytul: "Good Will Hunting", rok: 1997, rating: 9.0 }
    ];

const books:BookProps[] = [
      { plakat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULwfFk7tx5KPh7hoYIQkL14Sdx0CZN-ZzkQRmdG-NZpN7WK8c5V2OSJAmCUQSLI7bJwMdwHjfMdMJ523S0bXFDJ_E5ysRIQRYnBAxskw&s=10", tytul: "Dead Poets Society", rok: 1989, liczbastron: 176 },
      { plakat: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398530003/the-perks-of-being-a-wallflower-ya-edition-9781398530003_hr.jpg", tytul: "Perks of being a Wallflower", rok: 1999, liczbastron: 224 },
      { plakat: "https://cdn.swiatksiazki.pl/media/catalog/product/8/2/8299906367582.jpg?width=650&height=650&store=default&image-type=small_image", tytul: "Wiedzmin Ostatnie Życzenie", rok: 1993, liczbastron: 332 }
    ];
    
const albums:AlbumProps[] = [
      { plakat: "https://upload.wikimedia.org/wikipedia/en/0/0c/Linkin_Park_Meteora_Album_Cover.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", tytul: "Meteora", zespol: "Linkin Park", gatunek: "Nu Metal", rok: 2003,
        tracks: [
        { index: 1, title: "Foreword", time: 0.13 },
        { index: 2, title: "Don't Stay", time: 3.07 },
        { index: 3, title: "Somewhere I Belong", time: 3.33 },
        { index: 4, title: "Lying from You", time: 2.55 },
        { index: 5, title: "Hit the Floor", time: 2.44 },
        { index: 6, title: "Easier to Run", time: 3.24 },
        { index: 7, title: "Faint", time: 2.42 },
        { index: 8, title: "Figure.09", time: 3.17 },
        { index: 9, title: "Breaking the Habit", time: 3.16 },
        { index: 10, title: "From the Inside", time: 2.55 },
        { index: 11, title: "Nobody's Listening", time: 2.58 },
        { index: 12, title: "Session", time: 2.24 },
        { index: 13, title: "Numb", time: 3.07 }]},
      { plakat: "https://i.scdn.co/image/ab67616d0000b27354b1b310f66b4d887750a32f", tytul: "Kalejdoskop", zespol: "Wyjdzie w Praniu", gatunek: "Garage rock", rok: 2026,
        tracks: [
        { index: 1, title: "mw", time: 3.49 },
        { index: 2, title: "rower", time: 4.46 },
        { index: 3, title: "fistaszek", time: 5.16 },
        { index: 4, title: "11:11", time: 6.11 },
        { index: 5, title: "Kalejdoskop", time: 5.40 },
        { index: 6, title: "6", time: 4.52 },
        { index: 7, title: "splątani", time: 7.07 },
        { index: 8, title: "ranny ptaszek - bonus track", time: 4.33 }]
       }
    ];

function App(){
const [isVisible, setIsVisible] = useState(true)
const [showFirst, setShowFirst] = useState(true)
const [showSecond, setShowSecond] = useState(true)
const [showThird, setShowThird] = useState(true)
const [showFourth, setShowFourth] = useState(true)

const cards = 
        movies.sort((a, b) => a.tytul.localeCompare(b.tytul)).map((film) => (<Film
        plakat={film.plakat}
        tytul={film.tytul}
        rok={film.rok}
        rating={film.rating}
    />));

const bookCards = books.map((book) => (<Book
        plakat={book.plakat}
        tytul={book.tytul}
        rok={book.rok}
        liczbastron={book.liczbastron}
    />));

const albumCards = albums.map((album) => (<Album
        plakat={album.plakat}
        tytul={album.tytul}
        zespol={album.zespol}
        gatunek={album.gatunek}
        rok={album.rok}>
        {album.tracks.map((track) => (
            <Track index={track.index} title={track.title} time={track.time} />
        ))}
    </Album>));

const NewMovies = movies.filter((film) => film.rok > 2010).map((film) => (<Film
        plakat={film.plakat}
        tytul={film.tytul}
        rok={film.rok}
        rating={film.rating}
    />));

const SortedBooks = books.sort((a, b) => b.rok - a.rok).map((book) => (<Book
        plakat={book.plakat}
        tytul={book.tytul}
        rok={book.rok}
        liczbastron={book.liczbastron}
    />));

// const LongestAlbum = albums.

 return ( 
 <main>
    <div>
      <h1 onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ukryj filmy⏷" : "Pokaż filmy⏵"}
      </h1>
      {isVisible && <p>{cards}</p>}
    </div>
    <div>
      <h1 onClick={() => setShowFirst(!showFirst)}>
        {showFirst ? "Ukryj książki⏷" : "Pokaż książki⏵"}
      </h1>
      {showFirst && <p>{bookCards}</p>}
    </div>
    <div>
      <h1 onClick={() => setShowSecond(!showSecond)}>
        {showSecond ? "Ukryj albumy⏷" : "Pokaż albumy⏵"}
      </h1>
      {showSecond && <p>{albumCards}</p>}
    </div>
    <div>
      <h1 onClick={() => setShowThird(!showThird)}>
        {showThird ? "Ukryj nowe filmy⏷" : "Pokaż nowe filmy⏵"}
      </h1>
      {showThird && <p>{NewMovies}</p>}
    </div>
    <div>
      <h1 onClick={() => setShowFourth(!showFourth)}>
        {showFourth ? "Ukryj posortowane książki⏷" : "Pokaż posortowane książki⏵"}
      </h1>
      {showFourth && <p>{SortedBooks}</p>}
    </div>
  </main>

  );
};

export default App 