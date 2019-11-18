import React,{ Component } from 'react';
import './adheader.css';
import logo from './logoSE.jpg';
import UserB1 from './userB1.png';
import UserB2 from './userB2.png';
import UserB3 from './userB3.png';
import UserB4 from './userB4.png';

class adheader extends Component {


  constructor(){

    super();
    this.state={
      name:"home"
    };
  }

  

  

  render(){


    return (

     <div className="App">
        <table  className="App-adheader d-inline-flex">
          <tr >
          <td width = "20%"><img src={logo} alt="adLogo" className="adApp-logo" /></td>
          <td width = "50%"> <div class="adsearchbar">
           <form>
              <input type="textad" name="search" placeholder="Search..."/>
              <a href="https://www.w3schools.com/css/css_form.asp" className="adsearch_icon"><i class="SearchBox-icon  material-icons">search</i></a>
            </form>
          </div>

           </td>
           <td width = "20%">
          <table width = "30%" >
            <tr>
          <td width = "1%">
          <div class="dropdown">
          <button class="dropbtn btn  dropdown-toggle" type="button" data-toggle="dropdown"><a href=" " className="bell_icon"><i class="fa fa-bell" aria-hidden="true"></i></a></button>
          <ul class="dropdown-menu ">
          <li><a href="#"><img src={UserB1} alt="userB1" className="adimg-circle" />&nbsp;น้องได้บ้านยังครั...</a></li>
          <li class="divider" ></li>
          <li><a href="#"><img src={UserB2} alt="userB2" className="adimg-circle" />&nbsp;สนใจครับ</a></li>
          <li class="divider"></li>
          <li><a href="#"><img src={UserB3} alt="userB3" className="adimg-circle" />&nbsp;อายุกี่เดือนแล้วค...</a></li>
          <li class="divider"></li>
          <li><a href="#"><img src={UserB4} alt="userB4" className="adimg-circle" />&nbsp;ได้บ้านยังคะ</a></li>
          <li class="divider"></li>
          <li class="lass"><a href="#" >ดูข้อความทั้งหมด</a></li>
          </ul>
          </div>
          </td>
          <td width = "1%">
          <div class="dropdown">
          <button class="dropbtn btn  dropdown-toggle" type="button" data-toggle="dropdown"><a href=" " className="user_icon"><i class="fa fa-user-circle-o " aria-hidden="true"></i></a></button>
          <ul class="dropdown-menu ">
          <li><a href="#"><i class="fa fa-newspaper-o" aria-hidden="true"></i>&nbsp;ประกาศของฉัน</a></li>
          <li class="divider" ></li>
          <li><a href="#"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;ประกาศที่ดูล่าสุด</a></li>
          <li class="divider"></li>
          <li><a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;ดูและแก้ไขข้อมูลส่วนตัว</a></li>
          <li class="divider"></li>
          <li><a href="#"><i class="fa fa-power-off" aria-hidden="true"></i>&nbsp;ออกจากระบบ</a></li>
          </ul>
          </div>
          </td>
          <td width = "1%"><a href=" " className="adbutton1"> User001</a></td>
          <td width = "16%"> <button class="buttonhaban"><b>หาบ้าน</b></button></td>
          <td width = "1%"></td>
          </tr>
          </table></td>
          </tr>
        </table>
        
  
                                       


      </div>
    
    );
  }
}

export default adheader;
