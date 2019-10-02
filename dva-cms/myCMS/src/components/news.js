import React from 'react';

export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
            load:false
        }
    }
    showNews(){
        fetch('http://www.qhdlink-student.top/student/newsa.php',{
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
                this.state.news.push(json[v]);
                this.setState({load:true,news:this.state.news})
            }
            // console.log(this.state.news);
        })
    }
    componentDidMount(){
        this.showNews();
    }
    render(){
        return(
            <div>
                {this.state.load?this.state.news.map((v,i)=>
                    <div key={i} style={{width:'100%',height:'auto'}}>
                        <a href={"http://www.qhdlink-student.top/"+v.id_news}>{v.title_news}</a>
                        <p>{v.time_news}</p>
                    </div>
                    ):"加载中..."}
            </div>
        )
    }
}