import React, { Component } from "react";
// import "swiper/dist/css/swiper.css"
// import { NavLink } from "react-router-dom"
// import "./index.scss"
import { connect } from "react-redux"
// import { getList } from "./model"
class Footerbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // isShow: true,
            // clickShow: false,
            // datalist: []
        };
    }
    componentWillMount() {
        // getList().then(res => {
        //     this.setState({
        //         datalist: res
        //     })
        // })
    }
    componentDidMount() {

        // window.onscroll = this.hanleScroll.bind(this)
        // var swiper = new Swiper('.zzz', {
        //     slidesPerView: 4,
        //     spaceBetween: 0,
        //     slideToClickedSlide: true,
        //     speed: 2000



        // });
    }
    componentDidUpdate() {
        // var swiper = new Swiper('.zzz', {
        //     slidesPerView: 4,
        //     spaceBetween: 0,
        //     slideToClickedSlide: true,
        //     speed: 2000



        // });

    }

    componentWillUnmount() {
        // window.onscroll = null;
    }


    render() {
        return (
            <div >
           


            </div>
          
        )
    }
 
    
}
export default connect((state) => {
    return {
        navbarshow: state.navbarReducer
    }
})(Footerbar);