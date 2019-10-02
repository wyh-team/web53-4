import React from 'react';

export default class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            banner:[],
            load:false
        }
    }
    banner(){
        fetch('http://www.qhdlink-student.top/student/banner.php',{
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
                this.state.banner.push(json[v]);
                this.setState({load:true,banner:this.state.banner})
            }
            // console.log(this.state.banner);
        })
    }
    componentDidMount(){
        this.banner()
    }
    render(){
        return(
            <div style={{width:'100%',height:'auto'}}>
                {this.state.load?this.state.banner.map(s=><img style={{width:'100%',height:'auto'}} src={'http://www.qhdlink-student.top/'+s.path_banner} key={s.id_banner} />) :'加载中...'}
            </div>
        )
    }
}