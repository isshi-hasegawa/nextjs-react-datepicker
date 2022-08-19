import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import 'react-datepicker/dist/react-datepicker.css';

const Example = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const calcDaysPassed = (date1: any, date2: any) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  const passedDays = Math.round(calcDaysPassed(today, startDate));

  return (
    <DatePicker
      selected={startDate}
      locale={ja}
      onChange={(date: Date) => setStartDate(date)}
      minDate={today}
      dateFormat={passedDays === 0 ? '今日' : `${passedDays}日後`}
    />
  );
};

export default Example;
