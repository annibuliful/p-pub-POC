import React, { useState } from "react";
import "./App.css";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { ICalendarLocale, en, th } from "./locale";
import "react-day-picker/lib/style.css";
import CircleProgress from "./components/circle-progress";

function App() {
  const [locale, setLocale] = useState<ICalendarLocale>(en);
  const [selectedDate, setDate] = useState(new Date());
  const onChangeLocale = (toggle: string) => {
    setLocale(toggle === "th" ? th : en);
  };

  return (
    <div className="App">
      <div>
        <p>change Locale</p>
        <p>
          <span style={{ padding: 10 }} onClick={() => onChangeLocale("en")}>
            en
          </span>
          <span style={{ padding: 10 }} onClick={() => onChangeLocale("th")}>
            th
          </span>
        </p>
      </div>
      <div>
        <p> Calendar</p>
        <DayPicker
          locale={locale.locale}
          months={locale.months}
          weekdaysLong={locale.weekdayLong}
          weekdaysShort={locale.weekdayShort}
          firstDayOfWeek={0}
        />
      </div>
      <div>
        <p> date picker</p>
        {selectedDate.toLocaleDateString()}
        <DayPickerInput
          onDayChange={day => setDate(day)}
          dayPickerProps={{
            locale: locale.locale,
            months: locale.months,
            weekdaysLong: locale.weekdayLong,
            weekdaysShort: locale.weekdayShort,
            firstDayOfWeek: 0
          }}
        />
      </div>
      <div>
        <CircleProgress value={10} />
      </div>
    </div>
  );
}

export default App;
