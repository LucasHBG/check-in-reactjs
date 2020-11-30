import React, { Component } from 'react'

class CurrentDate extends Component {
    render() {

        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return (
            <div>

                Data: {day}/{month}/{year}

            </div>
        )
    }

}

export default CurrentDate;
