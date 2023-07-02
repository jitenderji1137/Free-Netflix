import Navbar from "./Nabvar/navbar";
import { Route , Routes } from "react-router-dom";
import MainBody from "./Main/MainBody";
import Search from "./Main/Search";
import NoPage from "./NoPageFound/NoPageFound";
import Footer from "./Footer/Footer";
import Allinone from "./Main/Allinone";
import Player from "./Main/Player";
import APIDocs from "./API-Docs/ApiDocs";
import Video from "./Videos/video"
function App() {
  const HomePage = [
    {Geans:"MainCategory=Movies&MainCategory=WebSeries&_page=1&_limit=10",Title:"Recent Uploaded ..."},
    {Geans:"MainCategory=Songs&_page=1&_limit=10",Title:"Songs For you ..."},
    {Geans:"MainCategory=WebSeries&_page=1&_limit=10",Title:"Web Series ..."},
    {Geans:"Geans=Drama&_page=1&_limit=10",Title:"Drama ..."},
    {Geans:"Geans=Crime&_page=1&_limit=10",Title:"Crime ..."},
    {Geans:"Geans=Action&_page=1&_limit=10",Title:"Action ..."},
    {Geans:"Geans=Horror&_page=1&_limit=10",Title:"Horror ..."},
    {Geans:"Geans=Romantic&_page=1&_limit=10",Title:"Romantic ..."},
    {Geans:"Geans=Comedy&_page=1&_limit=10",Title:"Comedy ..."},
    {Geans:"Geans=Adventure&_page=1&_limit=10",Title:"Adventure ..."},
    {Geans:"MainCategory=Adult&_page=1&_limit=10",Title:"Adult ..."}
  ]
  const Movies = [
    {Geans:"MainCategory=Movies&_page=1&_limit=10",Title:"Recent Uploaded ..."},
    {Geans:"MainCategory=Movies&Geans=Drama&_page=1&_limit=10",Title:"Drama ..."},
    {Geans:"MainCategory=Movies&Geans=Crime&_page=1&_limit=10",Title:"Crime ..."},
    {Geans:"MainCategory=Movies&Geans=Action&_page=1&_limit=10",Title:"Action ..."},
    {Geans:"MainCategory=Movies&Geans=Horror&_page=1&_limit=10",Title:"Horror ..."},
    {Geans:"MainCategory=Movies&Geans=Romantic&_page=1&_limit=10",Title:"Romantic ..."},
    {Geans:"MainCategory=Movies&Geans=Comedy&_page=1&_limit=10",Title:"Comedy ..."},
    {Geans:"MainCategory=Movies&Geans=Adventure&_page=1&_limit=10",Title:"Adventure ..."},
  ]
  const WebSeries = [
    {Geans:"MainCategory=WebSeries&_page=1&_limit=10",Title:"Recent Uploaded ..."},
    {Geans:"MainCategory=WebSeries&Geans=Drama&_page=1&_limit=10",Title:"Drama ..."},
    {Geans:"MainCategory=WebSeries&Geans=Crime&_page=1&_limit=10",Title:"Crime ..."},
    {Geans:"MainCategory=WebSeries&Geans=Action&_page=1&_limit=10",Title:"Action ..."},
    {Geans:"MainCategory=WebSeries&Geans=Horror&_page=1&_limit=10",Title:"Horror ..."},
    {Geans:"MainCategory=WebSeries&Geans=Romantic&_page=1&_limit=10",Title:"Romantic ..."},
    {Geans:"MainCategory=WebSeries&Geans=Comedy&_page=1&_limit=10",Title:"Comedy ..."},
    {Geans:"MainCategory=WebSeries&Geans=Adventure&_page=1&_limit=10",Title:"Adventure ..."},
  ]
  const Adult = [
    {Geans:"MainCategory=Adult&_page=1&_limit=10",Title:"Recent Uploaded ..."},
    {Geans:"MainCategory=Adult&Geans=Uncut&_page=1&_limit=10",Title:"Uncut ..."},
    {Geans:"MainCategory=Adult&Geans=Ullu&_page=1&_limit=10",Title:"Ullu ..."},
    {Geans:"MainCategory=Adult&Geans=Kooku&_page=1&_limit=10",Title:"Kooku ..."},
    {Geans:"MainCategory=Adult&Geans=Fliz&_page=1&_limit=10",Title:"Fliz ..."},
    {Geans:"MainCategory=Adult&Geans=Hotmasti&_page=1&_limit=10",Title:"Hotmasti ..."},
    {Geans:"MainCategory=Adult&Geans=Primeflix&_page=1&_limit=10",Title:"Primeflix ..."},
    {Geans:"MainCategory=Adult&Geans=MastiPrime&_page=1&_limit=10",Title:"MastiPrime ..."},
    {Geans:"MainCategory=Adult&Geans=HotPrime&_page=1&_limit=10",Title:"HotPrime ..."},
    {Geans:"MainCategory=Adult&Geans=WorldPrime&_page=1&_limit=10",Title:"WorldPrime ..."},
  ]

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MainBody Cate={HomePage} value={0}/>}></Route>
      <Route path="/videos" element={<Video/>}></Route>
      <Route path="/search/:Page/:value" element={<Search/>}></Route>
      <Route path="/movies" element={<MainBody Cate={Movies} value={1}/>}></Route>
      <Route path="/webseries" element={<MainBody Cate={WebSeries} value={2}/>}></Route>
      <Route path="/adult" element={<MainBody Cate={Adult} value={3}/>}></Route>
      <Route path="/all_content/:Geans/:Page/:Limit" element={<Allinone/>}></Route>
      <Route path="/player/:Title/:Geans/:Plateform/:Id/:page/:Image" element={<Player/>}></Route>
      <Route path="/api-docs" element={<APIDocs/>}/>
      <Route path="*" element={<NoPage/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;