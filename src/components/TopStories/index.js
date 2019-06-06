import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Title, ListComments } from './styles';

export default class TopStories extends Component {
  state = {
    topStories: [],
    topComments: [],
  };

  componentDidMount() {
    try {
      api.get('/topstories.json?print=pretty').then((response) => {
        for (var i = 0; i < 10; i++) {
          const storieItem = response.data[i];
          api.get(`item/${storieItem}.json?print=pretty`).then((storie) => {
            if (storie.data.descendants !== 0) {
              for (var c = 0; c < 20; c++) {
                if (storie.data.kids[c] !== undefined) {
                  api
                    .get(`item/${storie.data.kids[c]}.json?print=pretty`)
                    .then((text) => {
                      if (text.data.text !== undefined) {
                        this.setState({
                          topComments: [...this.state.topComments, text.data],
                        });
                      }
                    });
                }
              }
            }
            this.setState({
              topStories: [...this.state.topStories, storie.data],
            });
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container>
        <Title>Top 10 Stories</Title>
        <div id="accordion">
          {this.state.topStories.map((top) => (
            <div className="card" key={top.id}>
              <div className="card-header" id={'heading' + top.id}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target={'#collapse' + top.id}
                    aria-expanded="false"
                    aria-controls={'collapse' + top.id}
                  >
                    {top.title.substring(0, 30)} ...
                  </button>
                </h5>
              </div>
              <div
                id={'collapse' + top.id}
                className="collapse"
                aria-labelledby={'heading' + top.id}
                data-parent="#accordion"
              >
                <div className="card-body" key={top.id}>
                  <ListComments>
                    <strong>Comments: </strong>
                    {this.state.topComments.map((comment) =>
                      top.id !== undefined && top.id === comment.parent ? (
                        <a
                          href={
                            'https://hacker-news.firebaseio.com/v0/item/' +
                            comment.id +
                            '.json?print=pretty'
                          }
                        >
                          <li key={comment.id}>
                            {comment.text.substring(0, 35)}...
                          </li>
                        </a>
                      ) : (
                        ''
                      )
                    )}
                  </ListComments>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}
