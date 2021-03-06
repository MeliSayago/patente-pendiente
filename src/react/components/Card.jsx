import React from 'react'
import './Cards.css'

class Card extends React.Component {
    state={
        isFocus: false,
    }



    render(){
        return(
            <div className={`xop-box xop-img ${this.state.isFocus && "selected"}`} onClick={()=>{this.setState({isFocus: true})}}>
                {this.props.children}
            </div>
        )
    }

}

export default Card