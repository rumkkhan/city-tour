import React, { Component } from 'react'
import './tour.scss';


export default class Tour extends Component {

    state = {
        showInfo: false
    }
 handleShowInfo = () => {
        
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        console.log(this.props);
        const { id, city, name,info, img} = this.props.tour
        const { removeTour } = this.props;
        
        return (
            <article className="tour">
                <div className="img-container">
                    <img  src={img} alt="images"/>
                    <span className="close-btn" onClick={() => removeTour(id)}>
                            <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                        <h3>{city}</h3>
                        <h4>{name}</h4>
                        <h5>info{""}
                           <span onClick={this.handleShowInfo}>
                               <i className="fas fa-caret-square-down" />
                           </span>
                        </h5>
                        {
                            this.state.showInfo &&   <p>{info}</p>
                        }
                      
                </div>
            </article>
        )
    }
}
