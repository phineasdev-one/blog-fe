'use client';

import React, { Component, createRef, RefObject } from 'react';

// Define Props interface if there are any props. Currently, assuming no props.
interface Props { }

// Define State interface if there is any state. Currently, assuming no state.
interface State { }

// Define the Comments component as a TypeScript class component
export default class Comments extends Component<Props, State> {
  private commentBox: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.commentBox = createRef<HTMLDivElement>();
  }

  componentDidMount() {
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', 'true');
    scriptEl.setAttribute('repo', 'phineastrandev/blog-comment');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', 'github-light');

    if (this.commentBox.current) {
      this.commentBox.current.appendChild(scriptEl);
    }
  }

  render() {
    return (
      <div style={{ width: '100%' }} id="comments">
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
