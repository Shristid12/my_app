import React,{Component} from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import './ts.css';
import image from '../download.png';
import imge from '../dl.png'
import Navigation from '../navigation/nav';
import Footer from '../Footer/footer';
class Shows extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }
render(){
  const { country } = this.state;
    return (
    <div className="Shows">
    <Navigation/>
    <img class ="ttt" src={imge}></img>
    <p class="ttt">Trade Shows for Importers China and Asia-made Products</p>
        <div class="cdh">
          <p class="cdph">Find a show</p>
          <CountryDropdown class="cdsh"
          value={country}
          onChange={(val) => this.selectCountry(val)} />
          <select class="cdsh">
              <option value="a">All Industries</option>
              <option value="b">Baby and Children's Product</option>
              <option value="c">Auto Parts and accessories</option>
              <option value="d">Computer Products</option>
              <option value="e">Electronics</option>
              <option value="f">Electronic Components</option>
              <option value="l">LED and Solar Products</option>
              <option value="h">Home Products</option>
              <option value="y">Hardware and DIY</option>
              <option value="g">Gifts and Premiums</option>
         </select>
         <select class="cdsh">
              <option value="january">january</option>
              <option value="february">february</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="sept">September</option>
              <option value="oct">October</option>
              <option value="nov">November</option>
              <option value="dec">December</option>
         </select>
          <input class="cdih" type="text"></input>
          <input class="cdbh" type="submit" value="SEARCH"></input>
        </div>
        <div class="rdh">
         <div class="rdhh">
            <h2 class="rdhht">Buyer Services</h2>
             <p>Product Alert</p>
             <p>Sourcing Magazines</p>
             <p>China Sourcing Reports</p>
             <p>Sourcing News and Advice</p>
             <p>Private Sourcing Events & Vendor Summits</p>
            <h2 class="rdhht">Supplier Services</h2>
             <p>Sell, List & Exhibit</p>
            <h2 class="rdhht">Trade Shows</h2>
             <p>Trade Show Center</p>
             <p>Global Sources Exhibitions</p>
             <p>Find a Show</p>
             <p>Promote Your Show</p>
            <h2 class="rdhht">Trade Services</h2>
             <p>Regal Hotels</p>
             <p>International</p>
             <p>Your Recommended Hotel Partner</p>
             <hr></hr>
             <img class="rdp"src={image}></img>
             <br/>
             <img class="rdp" src={image}></img>
             <br/>
             <img class="rdp" src={image}></img>
             <div class="rdhhh">
               <p class="rdhhhp">Private Sourcing Events & Vendor Summits</p>
               <p>Get more from the Global Sources Exhibitions with pre-arranged supplier meetings.</p>
               <img class ="rdhhhi" src={image}></img>
             </div>
         </div>
         <div class="rdhtt">
           <h4 class="rdhtf">Visit Our global sources exhibitions</h4>
           <h2 class="rdhttt">Hong Kong</h2>
           <div class="rdhtd">
              <div class="rdhtg">
                <p>Worlds largest electronic sourcing show!</p>
                <img class="rdtw" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOH-go12WY-afrPkOi0o0vAMlZYURlhTBNW-2f_D2lfsK8VdZiQ"></img>
                <h4 class="rdte">Electronics</h4>
                <input class="rdtr" type="submit" value="Register Now"></input>
                <input class="rdtl" type="submit" value="Learn More"></input>
              </div>
              <div class="rdhtg">
                <p>3500 booths of gifts,electronics,smart home!</p>
                <img class="rdtw" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ojde7pck1-XkdVPzRsbIS2SMjHTa8BY1kqqBdWStDcHtYOPe"></img>
                <h4 class="rdte">Gifts And Home</h4>
                <input class="rdtr" type="submit" value="Register Now"></input>
                <input class="rdtl" type="submit" value="Learn More"></input>
              </div>
              <div class="rdhtg">
                <p>Largest fashion sourcing show in Hong Kong!</p>
                <img class="rdtw" src="https://r8zlusvr.rocketcdn.com/templates/selectfashion.co.uk.new/assets/images/home/1917/pod1a.jpg"></img>
                <h4 class="rdte">Fashion</h4>
                <input class="rdtr" type="submit" value="Register Now"></input>
                <input class="rdtl" type="submit" value="Learn More"></input>
              </div>
           </div>
           <div class="rdhtj">
              <h2>Shenzhen International Machinery Manufacturing Industry Exhibition</h2>
              <p>The Shenzhen International Machinery Manufacturing Industry Exhibition (SIMM) is China's largest and most influential machinery show, and is where the world's smartest equipment and tools buyers go to find new suppliers and the market's most innovative solutions</p>
              <div class="rdhtju">
                <img class="rdty" src="http://www.mayflay.com/upfile/2017/06/06/20170606080354_795.jpg"></img>
                <p>Shenzhen International Machinery Manufacturing Industry Exhibition<br></br>Shenzhen, China<br></br>For more information about the fair, visit http://www.simmtime.com/</p>
              </div>
           </div>
           <div class="rdhtj">
              <h2>China International Fashion Brand Fair-Shenzhen</h2>
              <p>FashionSZshow is one of the mainland's leading specialized events featuring key China suppliers in the garments and accessories industry.</p>
              <div class="rdhtju">
                <img class="rdty" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmF6ypJDzMrNFbcyGhRMj5xd-EUYwfaowdIpan5_UXkeHC9wdW"></img>
                <p>China International Fashion Brand Fair-Shenzhen<br></br>Shenzhen, China<br></br>For more information about the fair, visit http://www.fashionszshow.com/</p>
              </div>
           </div>
           <h3>Trade Show Reviews</h3>
           <hr></hr>
           <p>Find highlights and results from recently held trade shows.</p>
           <a src="#">•Taipei Innovative Textile Application Show</a>
           <p>Oct 19-21, 2015</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
}

export default Shows;
