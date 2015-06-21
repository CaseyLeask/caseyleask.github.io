import React from 'react';
import { Link } from 'react-router';
import API from '../util/API';
import getJSON from '../util/getJSON';

export default React.createClass({
  statics: {
    fetchData (params) {
      var url = `${API}/contacts/${params.id}`;

      return getJSON(url).then((res) => res.contact);
    }
  },

  render () {
    var { contact } = this.props.data;
    return (
      <div>
        <p><Link to="/">Back</Link></p>
        <h1>{contact.first} {contact.last}</h1>
        <img key={contact.avatar} src={contact.avatar}/>
      </div>
    );
  }
});
