import React from "react";
import Card from '../Card/Card';
import "./WeekContainer.css";

const weatherURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=Kropyvnytskyi&lang=ru&units=metric&APPID=83d136d27c47cb2304ff75c17a631a9d";

class WeekContainer extends React.Component {
    state = {
        days: []
    }

    componentDidMount = () => {
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading =>
                    reading.dt_txt.includes("18:00:00"))
                this.setState({ days: dailyData })
            })
    }

    formatCards = () => {
        return this.state.days.map((day, index) => <Card day={day} key={index} />)
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-5 jumbotron">
                    Погода на 5 дней
                    </h1>
                <h4 className="display-5 text-muted">Kropyvnytskyi, UA</h4>
                <div className="row justify-content-center">
                    {this.formatCards()}
                </div>
            </div>
        );
    }
}

export default WeekContainer;