import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import $ from 'jquery';

export default class Form extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const getJSON = function (url,value1,value2) {
            const promise = new Promise(function (resolve, reject) {
                const handler = function () {
                    if (this.readyState !== 4) {
                        return;
                    }
                    if (this.status === 200) {
                        resolve(this.response);
                    } else {
                        reject(new Error(this.statusText));
                    }
                };
                const client = new XMLHttpRequest();
                client.open("POST", url);
                client.onreadystatechange = handler;
                // client.responseType = "json";
                client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  
                let username = document.getElementById(value1).value;
                 let userpwd = document.getElementById(value2).value;
                 client.send("username="+username+"&userpwd="+userpwd+"&userclass=53&type=2");
            });
            return promise;
        };
        document.getElementById("but").onclick=function(){
			getJSON("http://www.qhdlink-student.top/student/login.php","names","pwds").then(function(json){
				if(json=='ok'){
                    alert("登录成功(1s后自动跳转)");
                    $('.div').delay(1000).slideUp(300);
                    $("#show").show(1);
                    $("#hide").hide(1);
                    $("#hello").show(1);
                }
			},function(err){
				console.log(err);
			})
        };
        document.getElementById("names").onkeyup=function(){
			var reg_1=/^[a-z A-Z]{1}\w{2,}$/;
			var tels_1=document.getElementById("f1");
			if (reg_1.test(this.value)) {
				tels_1.innerHTML="用户名格式正确";
			}else{
				tels_1.innerHTML="用户名格式错误";
			}
		}
		document.getElementById("pwds").onkeyup=function(){	
			var reg_2=/^[1-9]{8}$/;
			var tels_2=document.getElementById("f2");
			if (reg_2.test(this.value)) {
				tels_2.innerHTML="密码格式正确";
			}else{
				tels_2.innerHTML="密码格式错误";
			}
        }
        
        
    }
    render(){
        return(
            <div className='div'>
                <div className='dl'>
                    <div><h2>用户登录</h2></div>
                    账号：<input type="text" id='names' /><br/>
                    <span id='f1'> </span><br/>
                    密码：<input type="password" id='pwds' /><br/>
                    <span id='f2'> </span>
                    <div style={{marginTop:'30px'}}><Button type="primary" id='but'>确认</Button></div>
                    
                    {/* <input type="button" name="yes" id="yes"/>
                    <input type="button" name="no" id="no"/> */}
                </div>
            </div>
        )
    }
}