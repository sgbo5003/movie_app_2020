import React from "react";
import "./Detail.css";


class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        console.log(this.props);
        const {location} = this.props;
        if(location.state){
            return <div className="container1">
                <div className="poster">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                </div>
                <div className="sector4">
                <b>평점 :</b> ⭐{location.state.rating}/10
                </div>
                <div className="sector1">
                제목 : {location.state.title}
                </div>
                <div className="sector2">
                <b>년도 : </b> {location.state.year}
                </div>                
                <div className="sector3">
                <b>장르 : </b>{location.state.genres}
                </div>                
                <div className="sector4">
                <b>영화내용 : </b>{location.state.summary}
                </div>                
                </div>;
        } else{
            return null;
        }
    } 
}


export default Detail;