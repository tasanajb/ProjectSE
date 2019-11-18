import React ,{ Component} from 'react';
import './Chat.css';
import Adheader from './adheader';
import Footer from './footer';
import UserA from './userA.png';
import UserB from './userB.png';
import UserC from './userC.png';
import UserD from './userD.png';
import UserLa from './userLa.png';
import Dog1 from './dog1.png';


class Chat extends Component {
    render(){
        return (
            
            <div className="AppChat">
                    <Adheader/>
                    <div> 
                    <table className="chatContainer">
                    <tr height="70">
                    <th className="chatTopBar">ข้อความ</th>
                    <th className="chatTopBar">
                    <table><tr><img src={UserA} alt="userA" className="img-circle" /><th>JoneA</th></tr></table></th>
                    <th className="chatTopBar">
                    <table><tr><th width="51%">น้องหมาสีขาว พันธุ์...</th><img src={Dog1} alt="dog1" className="dog1" /></tr></table></th>
                    </tr>
                    <tr  >
                    <td className="selectchatUser">
                    <table >
                        <tr  height="30">
                        <td rowspan="2" ><img src={UserA} alt="userA" className="img-circle" /></td>
                        <th>JoneA</th>
                        <td rowspan="2"><td className = "time">11.00</td></td>
                        </tr>
                        <tr  height="30" >
                        <td >อยู่แถวไหนครับ</td>
                        </tr></table></td>
                    <td className="chatarea" rowspan="5" colspan="2" >
                        <table>
                        <tr  height="50">
                        <td colspan="2"><td className="day">วันนี้</td></td>
                        </tr>
                        <tr  height="70">
                        <td colspan="2">
                        <td className="boxChatL " >สนใจครับ น้องมีบ้านยังครับ </td></td>
                        </tr>
                        <tr  height="0.1">
                        <td className = "timeL">09.09</td>
                        </tr>
                        <tr  height="70">
                        <td colspan="2">
                        <td className="boxChatR" > น้องยังไม่มีบ้านค่ะ </td></td>
                        </tr>
                        <tr  height="0.1">
                        <td></td>
                        <td className = "timeR">09.12</td>
                        </tr>
                        <tr  height="70">
                        <td colspan="2">
                        <td className="boxChatR  " > สนใจรับน้องไปเลี้ยงมั้ยคะ </td></td>
                        </tr>
                        <tr  height="0.1">
                        <td></td>
                        <td className = "timeR">09.20</td>
                        </tr>
                        <tr  height="70">
                        <td colspan="2">
                        <td className="boxChatL" > อยู่แถวไหนครับ </td></td>
                        </tr>
                        <tr  height="0.1">
                        <td className = "timeL">11.00</td>
                        </tr>
                        <tr  height="100">
                        <td colspan="2">
                        <input type="text2" name="send" placeholder="พิมพ์ข้อความ..."/>
                        <a href=" " className="arrow_icon"><i class="fa fa-location-arrow" aria-hidden="true"></i></a>
                        <a href=" " className="paperclip_icon"><i class="fa fa-paperclip" aria-hidden="true"></i></a>
                        </td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    <tr >
                    <td className="chatUser" ><table>
                        <tr  height="30">
                        <td rowspan="2" ><img src={UserB} alt="userB" className="img-circle" /></td>
                        <th>B</th>
                        <td rowspan="2"><td className = "time">10.58</td></td>
                        </tr>
                        <tr  height="30">
                        <td>น้องมีบ้านยังคะ</td>
                        </tr></table></td>
                    
                    </tr>
                    <tr >
                    <td className="chatUser"><table >
                        <tr  height="30">
                        <td rowspan="2" ><img src={UserC} alt="userC" className="img-circle" /></td>
                        <th>C</th>
                        <td rowspan="2"><td className = "time">10.34</td></td>
                        </tr>
                        <tr  height="30">
                        <td>มีรูปน้องเพิ่มมั้ยคะ</td>
                        </tr></table></td>
                    </tr>
                    <tr >
                    <td className="chatUser"><table >
                        <tr  height="30">
                        <td rowspan="2" ><img src={UserD} alt="userD" className="img-circle" /></td>
                        <th>D</th>
                        <td rowspan="2"><td className = "time">10.04</td></td>
                        </tr>
                        <tr  height="30">
                        <td>ขอรับน้องนะคะ</td>
                        </tr></table></td>
                    </tr>
                    <tr  >
                    <td className="chatUser"><table >
                        <tr  height="30">
                        <td rowspan="2" ><img src={UserLa} alt="userLa" className="img-circle" /></td>
                        <th>La</th>
                        <td rowspan="2"><td className = "time">09.20</td></td>
                        </tr>
                        <tr  height="30">
                        <td>น้องยังอยู่ไหมเอ่ย</td>
                        </tr></table></td>
                    </tr>
                    </table>
                    </div>
                
                <Footer/>
            </div>
        );
    }
}

export default Chat;