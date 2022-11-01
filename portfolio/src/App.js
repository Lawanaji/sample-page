import logo from './logo.svg';
import './App.css';
import shareButton from './image/Avatar share.png'
import profileImage from './image/profile__img.png'
import footerImage  from './image/Footer.png'
function App() {
  return (
    <body>
    <nav>
        <div class="logo"></div>
        <div class="share">

            <img src={shareButton} alt="" />
        </div>
    </nav>


    <div class="profile__img">
      <img src={profileImage} alt="" />
        <p>Annette Black </p>
    </div>
    
    <div class="link_section"> 
      <a href="https://training.zuri.team" id="btn__zuri" class="btn_zuri">zuri Team</a>
      <a href="http://books.zuri.team" id="books">Zuri books</a>
      <a href="https://books.zuri.team" id="book__python">python Books</a>
      <a href="https://background.zuri.team" id="pitch">background checks for Coders</a>
      <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>
    </div>
    <div>

    </div>



    <footer>
      <img src={footerImage} alt="" />

    </footer>
    </body>
  );
}

export default App;
