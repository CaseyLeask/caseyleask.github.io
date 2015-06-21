import { EventEmitter } from 'events';
import React from 'react';
import { Link, RouteHandler } from 'react-router';
import API from '../util/API';
import getJSON from '../util/getJSON';

var loadingEvents = new EventEmitter();

export default React.createClass({
  statics: {
    fetchData (params) {
      var url = `${API}/contacts`;

      return getJSON(url).then((res) => res.contacts);
    }
  },

  getInitialState () {
    return { loading: false };
  },

  componentDidMount () {
    var timer;
    loadingEvents.on('loadStart', () => {
      clearTimeout(timer);
      // for slow responses, indicate the app is thinking
      // otherwise its fast enough to just wait for the
      // data to load
      timer = setTimeout(() => {
        this.setState({ loading: true });
      }, 300);
    });

    loadingEvents.on('loadEnd', () => {
      clearTimeout(timer);
      this.setState({ loading: false });
    });
  },

  renderContacts () {
    var contacts = this.props.data.contacts;

    return contacts.map((contact, i) => {
      return (
        <li key={i}>
          <Link to="contact" params={contact}>{contact.first} {contact.last}</Link>
        </li>
      );
    });
  },

  render () {
    return (
      <div className={this.state.loading ? 'loading Home' : 'Home'}>
        <aside>
          {this.renderContacts()}
        </aside>
        <main>
          <RouteHandler {...this.props}/>
        </main>
      </div>
    );
  }
});

