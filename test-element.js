import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js'

class Test extends PolymerElement {
  constructor() {
    super();
    this.textContent = 'test';

    this.employees = [
      { first: 'Bob', last: 'Li' },
      { first: 'Ayesha', last: 'Johnson' },
      { first: 'Fatma', last: 'Kumari' },
      { first: 'Tony', last: 'Mori' },
    ];
  }

  handleClick = (e) => {
    console.log(e)
  }

  static get template() {
    return html`
    <!-- scoped CSS for this element -->
    <style>
      div {
        display: inline-block;
        background-color: #ccc;
        border-radius: 8px;
        padding: 4px;
        width: 300px; 
        display:flex;
        justify-content: space-between;
        height:100%
      }
    </style>
    <!--
    TODO: Try adding other HTML elements to the DOM template
    to see how they are positioned relative to the distributed
    child nodes.
    -->
    <div>
      <!-- any children are rendered here -->
      <button on-click="handleClick" >{{textContent}}</button>
      <slot></slot>
    </div>
    <template is="dom-repeat" items="{{employees}}">
        <div>First name: <span>{{item.first}}</span></div>
        <div>Last name: <span>{{item.last}}</span></div>
        <p></p>
    </template>
    `;
  }
}

customElements.define('test-element', Test);
