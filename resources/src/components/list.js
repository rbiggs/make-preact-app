import { h, Component } from 'preact';

export default class List extends Component {
  constructor(props) {
    super(props)
  }
  render({fruits}) {
    return (
      <ul class='list'>
        {
          fruits.map(fruit => <li>{fruit}</li>)
        }
      </ul>
    )
  }
}