import React,{Component} from 'react';
import './home.css';
import img from'../dlp.png';
import imget from'../download.png';
import All from'./all.js';
import Navigation from '../navigation/nav';
import Footer from '../Footer/footer';
import Trade from'./trade.js';
import Carousel from 'nuka-carousel';

class First extends Component{
  AllCatg() {
        this.setState({
            catg : false
        })

    }
    TradeCatg() {
        this.setState({
            catg : true
        })

    }
    state = {
        catg : true,
        slide : 1
    }
  render(){
  return (
    <div className="First">
     <Navigation/>
       <div class="bd">
         <img class="bdi" src={img}></img>
         <input className='bds' type="text" placeholder="Enter English keywords to search products" name="search"></input>
         <input class="bdb" type="submit" value="Get Quotations"></input>
       </div>
       <div class="bdf">
          <div class="bdfh">
            <div className="bdh">
                <div onClick={()=>this.TradeCatg(this.state.catg)} className={this.state.catg?"bdhs":"bdhns"}> All Categories</div>
                <div onClick={()=>this.AllCatg(this.state.catg)} className={this.state.catg?"bdhns":"bdhs"}>Trade Shows</div>
            </div>
              {this.state.catg?<All/>:<Trade/>}
          </div>
          <div class="bdfs">
             <div>
              <Carousel>
               <img className="bdfsi" src="http://www.ecomcrew.com/wp-content/uploads/2017/03/Global-Sources-show-1.jpg"></img>
               <img className="bdfsi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2WjF5SQikyeng-Z-6xGMhkHgGlzgvQKPhlIttKzOlsQatISkhA"></img>
               <img className="bdfsi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJsHaTDMwRhMhpJteLujoNGjRD6VpJ9EX54Xn-yvihg_diu_XXA"></img>
             </Carousel>
             </div>
             <h3>New Products</h3>
             <div class="bdfsv">
                <p>Free alert on newly added products!</p>
                <input class="bdsv" type="text" value="Example:just@company.com"></input>
                <input class="bdsvf" type="submit" value="subscribe"></input>
             </div>
             <Carousel>
             <div class="bdvf">
                <div class="bdvfd">
                   <img class="bdvfi" src="https://p.globalsources.com/IMAGES/PDT/S1156940922/Womens-PU-injection-shoes.jpg"></img>
                  <p>LED light shoes,fashion new design for women or ladies,factory BSCI checked</p>
                </div>
                <div class="bdvfd">
                  <img class="bdvfi" src="https://images-na.ssl-images-amazon.com/images/I/61O5tQrUuFL._SX679_.jpg"></img>
                  <p>MTK 6261 smartwatch,LBS,Location, 1.44"</p>
                </div>
                <div class="bdvfd">
                   <img class="bdvfi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7CDEfkwq_H5qCiHPdTQbL0Gq66J8Q_mObb6uT_f1j03rwn9n"></img>
                   <p>Two way Radio Battery for Ericsson MPA MPD PLS TRIX P404</p>
                </div>
             </div>
             <div class="bdvf">
                <div class="bdvfd">
                   <img class="bdvfi" src="https://p.globalsources.com/IMAGES/PDT/S1156940922/Womens-PU-injection-shoes.jpg"></img>
                  <p>LED light shoes,fashion new design for women or ladies,factory BSCI checked</p>
                </div>
                <div class="bdvfd">
                  <img class="bdvfi" src="https://images-na.ssl-images-amazon.com/images/I/61O5tQrUuFL._SX679_.jpg"></img>
                  <p>MTK 6261 smartwatch,LBS,Location, 1.44"</p>
                </div>
                <div class="bdvfd">
                   <img class="bdvfi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7CDEfkwq_H5qCiHPdTQbL0Gq66J8Q_mObb6uT_f1j03rwn9n"></img>
                   <p>Two way Radio Battery for Ericsson MPA MPD PLS TRIX P404</p>
                </div>
             </div>
             <div class="bdvf">
                <div class="bdvfd">
                   <img class="bdvfi" src="https://p.globalsources.com/IMAGES/PDT/S1156940922/Womens-PU-injection-shoes.jpg"></img>
                  <p>LED light shoes,fashion new design for women or ladies,factory BSCI checked</p>
                </div>
                <div class="bdvfd">
                  <img class="bdvfi" src="https://images-na.ssl-images-amazon.com/images/I/61O5tQrUuFL._SX679_.jpg"></img>
                  <p>MTK 6261 smartwatch,LBS,Location, 1.44"</p>
                </div>
                <div class="bdvfd">
                   <img class="bdvfi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7CDEfkwq_H5qCiHPdTQbL0Gq66J8Q_mObb6uT_f1j03rwn9n"></img>
                   <p>Two way Radio Battery for Ericsson MPA MPD PLS TRIX P404</p>
                </div>
             </div>
             </Carousel>
          </div>
       </div>
       <div class="opp">
         <h2>Meet Suppliers face to face</h2>
         <div class="oppd">
           <div class="oppr">
             <h4>Electronics</h4>
             <img class="oppri" src={imget}></img>
           </div>
           <div class="oppr">
             <h4>Mobile Electronics</h4>
             <img class="oppri" src={imget}></img>
           </div>
           <div class="oppr">
             <h4>Gifts and Home</h4>
             <img class="oppri" src={imget}></img>
           </div>
           <div class="oppr">
             <h4>Fashion</h4>
             <img class="oppri" src={imget}></img>
           </div>
         </div>
       </div>
       <div class="rtr">
        <div class="rtrr">
          <h2 class="rtrh">New from Exhibitors</h2>
          <p class="rtrp">New products from exhibitors at Global sources shows</p>
        </div>
        <Carousel>
         <div class="rtrd">
           <div class="rtrdf">
             <img class="rtrdi" src="https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/n/y/nybronson0028a_2_.jpg"></img>
             <h3>facial cleansing brush made of silicone</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Iz-s_haNkRdrr3gAn52lD9gG0p3T5clTRp2km0odnIJM3WwexQ"></img>
             <h3>Women's hat uses braided raffia palm</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoYmGXNJY-viG7vS4fSZ9nofSEj1brRBi4lBNj1laz5Udwwoy"></img>
             <h3>Canvas shoulder bag has drawstring closure</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://gloimg.rowcdn.com/ROSE/pdm-provider-img/straight-product-img/20181009/T020663/T0206630019/goods-img/1548972428394587952.jpg"></img>
             <h3>Women's shoes with handmade floral trim</h3>
           </div>
         </div>
         <div class="rtrd">
           <div class="rtrdf">
             <img class="rtrdi" src="https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/n/y/nybronson0028a_2_.jpg"></img>
             <h3>facial cleansing brush made of silicone</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Iz-s_haNkRdrr3gAn52lD9gG0p3T5clTRp2km0odnIJM3WwexQ"></img>
             <h3>Women's hat uses braided raffia palm</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoYmGXNJY-viG7vS4fSZ9nofSEj1brRBi4lBNj1laz5Udwwoy"></img>
             <h3>Canvas shoulder bag has drawstring closure</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://gloimg.rowcdn.com/ROSE/pdm-provider-img/straight-product-img/20181009/T020663/T0206630019/goods-img/1548972428394587952.jpg"></img>
             <h3>Women's shoes with handmade floral trim</h3>
           </div>
         </div>
         <div class="rtrd">
           <div class="rtrdf">
             <img class="rtrdi" src="https://images-static.nykaa.com/media/catalog/product/tr:w-344,h-344,cm-pad_resize/n/y/nybronson0028a_2_.jpg"></img>
             <h3>facial cleansing brush made of silicone</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Iz-s_haNkRdrr3gAn52lD9gG0p3T5clTRp2km0odnIJM3WwexQ"></img>
             <h3>Women's hat uses braided raffia palm</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoYmGXNJY-viG7vS4fSZ9nofSEj1brRBi4lBNj1laz5Udwwoy"></img>
             <h3>Canvas shoulder bag has drawstring closure</h3>
           </div>
           <div class="rtrdf">
             <img class="rtrdi" src="https://gloimg.rowcdn.com/ROSE/pdm-provider-img/straight-product-img/20181009/T020663/T0206630019/goods-img/1548972428394587952.jpg"></img>
             <h3>Women's shoes with handmade floral trim</h3>
           </div>
         </div>
         </Carousel>
       </div>
       <div class="ptrd">
       <h3>Top Searches & Featured Top Products</h3>
       <p>Auto parts and accessories</p>
       <p>Drones and Robotics</p>
       <p>Consumer Electronics</p>
       <p>Electronic Components</p>
       <hr></hr>
       </div>
       <div class="ptrds">
          <p class="iii">iphone6</p>
          <p class="iii">led</p>
          <p class="iii">Powerbank</p>
          <p class="iii">Bluetooth speaker</p>
          <p class="iii">Smart Watch</p>
          <p class="iii">Electric Strike</p>
          <p class="iii">disney</p>
          <p class="iii">VR</p>
          <p class="iii">Shoes</p>
          <p class="iii">LED Lights</p>
      </div>
      <Footer/>
    </div>
  );
}
}
export default First
