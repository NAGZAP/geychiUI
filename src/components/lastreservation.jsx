import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import axios from 'axios';
import Navbarparent from './navbarparent';
import cup from '../listorg/coffee-cup.svg' // Assuming you have the 'cup.png' image in the 'public' folder
import styles from "../listorg/style.module.css"

const localizer = momentLocalizer(moment);

const ReservationCalendar = () => {
  const [events, setEvents] = useState([]);
  const [reservations, setReservations] = useState([]);

  const fetchDataFromURL = async () => {
    const token = 'JWT ' + localStorage.getItem('token');

    try {
      const response = await axios.get('https://ghablameh.fiust.ir/api/v1/reserve/', {
        headers: {
          Authorization: token
        }
      });

      console.log('Data retrieved:', response.data);

      const formattedEvents = response.data.map((reservation) => ({
        title: reservation.meal_food.food.name,
        start: new Date(reservation.created_at),
        end: new Date(reservation.created_at)
      }));

      setEvents(formattedEvents);
      setReservations(response.data); // Store the raw reservation data
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromURL();
  }, []);

  return (
    <div className={styles.app}>
      <Navbarparent />
      <div className={styles.card}>
        <div className={styles.cardcontent}>
          <div className={styles.icon}>
            <div className={styles.circle}>
              <img src={cup} alt="" />
            </div>
          </div>
          <strong>
            <h3>رزرو های آینده</h3>
          </strong>
          {reservations.map((reservation, index) => (
            <div key={index}>
              <p>Organization: {reservation.buffet.organization_name}</p>
              <p>Food: {reservation.meal_food.food.name}</p>
              <p>Buffet: {reservation.buffet.name}</p>
              <p>Date: {moment(reservation.created_at).format('YYYY-MM-DD')}</p>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default ReservationCalendar;