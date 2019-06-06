import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import imge from '../dl.png';
class Navigation extends Component{
  state={
    showNav:false
  }
  toggleSidenav= (action)=>{
    this.setState({
      showNav:action
    })
  }
  render(){
  return (
    <div className="Navigation">
     <div class="Nav">
       <p class="frt"><Link to='/'>Online MarketPlace</Link></p>
       <p class="frt"><Link to='shows'>Trade Shows</Link></p>
       <p class="frt">Magazines</p>
       <p class="frt">Other services</p>
       <div class="nn">
        <Link to='/login'><p class="frr">Login|</p></Link>
        <Link to='/register'><p class="frr">Register|</p></Link>
        <Link to='/messages'><p class="frr">Messages|</p></Link>
      </div>
    </div>
   </div>
  );
}
}

export default Navigation;
