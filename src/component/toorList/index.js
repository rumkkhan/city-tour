import React, { Component } from 'react';
import Tour from '../tour';
import './tourList.scss';
import { tourData } from '../../tourData';

export default class TourList extends Component {
   
    state = {
        tour: tourData
    };

    removeTour = id => {
       const sortedData = this.state.tour.filter((item) => {
           return item.id !== id;
       })
       this.setState({
           tour: sortedData
       })
    }
    render() {
         const { tour } = this.state
        return (
            <section className="tourlist">
                {
                    tour.map((tour) => <Tour  key={tour.id} 
                        tour={tour} removeTour={this.removeTour}
                    />)
                }
            </section>
        )
    }
}
