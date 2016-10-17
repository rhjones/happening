'use strict';

const app = require('../app');


// get all events (indexing)

const getAllEvents = () => {
  return $.ajax({
    url: app.host + '/events',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

// get all of my events (profile)

const getMyEvents = () => {
  return $.ajax({
    url: app.host + '/my-events',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

// show an event

const getOneEvent = () => {
return $.ajax ({
    url: app.host + '/events/' + app.event.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// create new event

const createNewEvent = (data) => {
  return $.ajax({
    url: app.host + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: data,
  });
};

// edit an event

const updateEvent = (data) => {
  return $.ajax({
    url: app.host + '/events/' + app.data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: data,
  });
  };


// delete an event

const destroyEvent = (data) => {
return $.ajax ({
    url: app.host + '/events/' + app.data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  getAllEvents,
  getMyEvents,
  getOneEvent,
  createNewEvent,
  updateEvent,
  destroyEvent
};
