'use strict';

const app = require('../app');



// get all of my rsvps (profile) this is the index action in the rsvps controller
const getMyRsvps = () => {
  return $.ajax({
    url: app.host + '/rsvps',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

// show an rsvp
const getOneRsvp = (rsvpId) => {
return $.ajax ({
    url: app.host + '/rsvps/' + rsvpId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// create an rsvp
const createRsvp = (data) => {
  return $.ajax({
    url: app.host + '/rsvps',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: data,
  });
};

// edit an rsvp
const updateRsvp = (data) => {
  return $.ajax({
    url: app.host + '/rsvps/' + data.rsvp._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: data,
  });
};



module.exports = {
  getMyRsvps,
  getOneRsvp,
  createRsvp,
  updateRsvp
};
