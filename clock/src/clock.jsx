import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentWillMount() {
        setInterval(() =>this.getTimeUntil(this.props.deadline) , 1000 )
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }
    render() {
        return (
            <div>
                <span>{this.state.days} Days</span>&nbsp;
                <span>{this.state.hours} Hours</span>&nbsp;
                <span>{this.state.minutes} Minutes</span>&nbsp;
                <span>{this.state.seconds} Seconds</span>&nbsp;
            </div>
        )
    }
}

export default Clock;