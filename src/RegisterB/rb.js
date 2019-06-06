import React,{Component} from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import img from'../dlp.png';
import { Link } from 'react-router-dom';
import './rb.css';
class Register extends Component{
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
    <div className="Register">
      <img class="bdittt" src={img}></img>
      <hr class="bdit"></hr>
      <div class="jdt">
      <div class="jd">
         <p>Register</p>
         <p>Just complete the form. It takes less than a minute!</p>
      </div>
      <div class="jdl">
          <p>Already a member?<Link to={`/login`}>Login Now!</Link></p>
          <Link to={'/'}>Forgot your password?</Link>
      </div>
      </div>
      <div class="jdg">
         <div class="jt">
           <p class="jtp">Create Your Account</p>
           <p class="jtp">Select Product Alert Categories</p>
           <p class="jtp">Confirmation</p>
         </div>
         <div class="utyy">
         <div class="oty">
          <div class="otyr">
            <label>*Bussiness Email:</label>
          </div>
            <br></br>
          <div class="otyr">
            <label class="otyr">*Create a Password:</label>
          </div>
            <br></br>
          <div class="otyi">
            <label class="otyr">*Re-enter Password:</label>
          </div>
            <br></br>
          <div class="otyk">
            <label>*Name:</label>
          </div>
            <br></br>
          <div class="otyk">
            <label>*Country/Territory:</label>
          </div>
            <br></br>
          <div class="otyo">
            <label>*Bussiness Contact Number:</label>
          </div>
            <br></br>
          <div class="otyu">
            <label>*Company Name:</label>
          </div>
            <br></br>
          <div class="otyi">
            <label>*Company Website URL:</label>
          </div>
         </div>
         <div class="pty">
         <form>
           <input type="email"></input>
         </form>
         <form>

           <input type="password"></input>
         </form>
         <form>

           <input type="password"></input>
         </form>
         <form>

           <select class="cdsh">
                <option value="mr.">Mr.</option>
                <option value="miss">Miss</option>
                <option value="mrs.">Mrs.</option>
                <option value="dr.">Dr.</option>
           </select>
           <input type="text" placeholder="First name"></input>
           <input type="text" placeholder="Last name"></input>
         </form>
         <form>

          <CountryDropdown class="cdsh"
          value={country}
          onChange={(val) => this.selectCountry(val)} />
         </form>
         <form>
           <input type="number"></input>
         </form>
         <form>
           <input type="text"></input>
         </form>
         <form>
           <input type="text"></input>
         </form>
         </div>
         </div>
         <h3> Free sourcing e-Magazines</h3>
         <div>
          <img></img>
          <div>
            <p>Discover exciting new products & latest market trends, explore new sourcing options from quality suppliers - every month! Magazines are available in English only.</p>
            <div>
               <label>Auto Parts and Acessories:</label>
               <input type="checkbox"></input>
               <label>Electronic Components</label>
               <input type="checkbox"></input>
               <label>Electronics</label>
               <input type="checkbox"></input>
               <label>Fashion Acessories and footwear</label>
               <input type="checkbox"></input>
               <label>Fashion Apparel and fabrics</label>
               <input type="checkbox"></input>
               <label>Gifts and premiums</label>
               <input type="checkbox"></input>
               <label>Hardware and Machinery</label>
               <input type="checkbox"></input>
               <label>Home Products</label>
               <input type="checkbox"></input>
               <label>India Products</label>
               <input type="checkbox"></input>
               <label>Korea Products</label>
               <input type="checkbox"></input>
               <label>Smart Living</label>
               <input type="checkbox"></input>
            </div>
          </div>
          <img></img>
         </div>
         <h3>Free Product Alert</h3>
         <div>
           <img></img>
           <div>
             <p>Receive e-mail alerts on the latest products and news according to your interest. See sample</p>
             <label>Enter a product keyword:</label>
             <input type="textbox"></input>
             <br></br>
             <p>In addition, you may also be interested in receiving information on:</p>
             <input type="checkbox"></input>
             <label>New products, features and special offers from Global Sources</label>
             <br></br>
             <input type="checkbox"></input>
             <label>Products and services from Global Sources partners</label>
           </div>
           <Link to='/'><input type="submit" value="Register Now"></input></Link>
         </div>
      </div>
    </div>
  );
}
}
export default Register;
