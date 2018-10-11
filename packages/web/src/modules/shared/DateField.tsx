import * as React from 'react';
import DatePicker from 'react-datepicker';
import * as moment from 'moment';
import { FieldProps } from "formik";
import 'react-datepicker/dist/react-datepicker.css';
import './datefield.css';

interface State {
    startDate: moment.Moment;
  }

export class DateField extends React.PureComponent<FieldProps<any>, State>{
    constructor(props:any){
        super(props);
        const theMoment=moment();
        this.state = {
            startDate : theMoment
        }
        this.props.form.setFieldValue('date', moment(theMoment).format('YYYY-MM-DD'));
    }

    handleDateChange = (date:moment.Moment) => {
        this.setState({startDate:date});
        console.log('dateChange')
        this.props.form.setFieldValue('date', moment(date).format('YYYY-MM-DD'));
    }

    render(){
        return <div style={{margin:'0 auto',width:"50%"}}><DatePicker className="date-field" onChange={this.handleDateChange} selected={this.state.startDate}/></div>
    }
}
