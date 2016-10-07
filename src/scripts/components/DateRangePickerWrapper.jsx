import React from 'react';
import { DateRangePicker } from 'react-dates';


require('lib/react-dates/css/DateRangePicker.scss');


/**
 * https://github.com/airbnb/react-dates/blob/master/examples/DateRangePickerWrapper.jsx
 */
class DateRangePickerWrapper extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            focusedInput: null,
            startDate: null,
            endDate: null,
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }
    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
    }
    onFocusChange(focusedInput) {
        this.setState(focusedInput);
    }
    render() {
        const { focusedInput, startDate, endDate } = this.state;
        console.log(DateRangePicker);

        return (
          <div className="date-range-picker-wrapper">
            <DateRangePicker
              {...this.props}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              focusedInput={focusedInput}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        );
    }
}


export default DateRangePickerWrapper;
