// components/CalendarComponent.js
import React from "react";
import CalendarPicker from "react-native-calendar-picker";

const CalendarComponent = ({ onDateChange }) => {
  return <CalendarPicker onDateChange={onDateChange} />;
};

export default CalendarComponent;
