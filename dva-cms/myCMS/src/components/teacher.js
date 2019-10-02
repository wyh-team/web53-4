import React from 'react';

export default class Teacher extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pic:[],
            load:false
        }
    }
    showNews(){
        fetch('http://www.qhdlink-student.top/student/coach.php',{
            method:'POST',
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:"username=wyh53&userpwd=12345678&userclass=53&type=2"
        }).then(res=> {
             // console.log(res.json());
            return res.json();
        }).then(json=>{
            for(let v in json){
                this.state.pic.push(json[v]);
                this.setState({load:true,pic:this.state.pic})
            }
            // console.log(this.state.news);
        })
    }
    componentDidMount(){
        this.showNews()
    }
    render(){
        return(
            <div>
                {this.state.load?this.state.pic.map((v,i)=>
                    <div key={i} style={{float:'left'}}>
                        <img src={'http://www.qhdlink-student.top/'+v.path_coach} /> 
                        <p>姓名：{v.name_coach}</p> 
                        <p>姓名：{v.honor_coach}</p>
                        <p>姓名：{v.evaluate_coach}</p>
                        <p>姓名：{v.dage_coach}</p>
                    </div>
                ):"加载中..."}
            </div>
        )
    }
}