import React from 'react';
import './footer.css';
//import logo from './logoSE.jpg';

function footer() {
  return (
    
    <div>

     <table className="App-footer ">
       <tr>
      <th></th>
      <th></th>
      </tr>
      <tr>
      <th><a href=" " className=" button-footer  ">ช่วยเหลือ</a></th>
      <th><a href=" " className=" button-footer ">เกี่ยวกับเรา</a></th>
      </tr>
      <tr>
      <td><a href=" " className=" button-footer ">คำถามที่พบบ่อย</a></td>
      <td><a href=" " className=" button-footer ">ข้อกำหนดและเงื่อนไขการใช้งาน</a></td>
      </tr>
      <tr>
      <td> </td>
      <td><a href=" " className=" button-footer ">เกี่ยวกับหาบ้านให้น้อง</a></td>
      </tr>
      <tr>
      <td> </td>
      <td> </td>
      </tr>
     </table>
      
      
    </div>
    
  );
}

export default footer;