import React from 'react';
import renderer from 'react-test-renderer';
import Thing from './thing';

describe('<Thing />', () => {
  it('can render initially in section.thing', () => {
    let app = shallow(<Thing />);
    expect(app.find('section.thing').exists()).toBe(true);
  });

  it('has flag: true initially', () => {
    let app = shallow(<Thing />);
    expect(app.state('flag')).toBe(true);

    expect(app.find('span.flag').text()).toBe('True');
  });

  it('can click button to toggle flag', () => {
    // Arrange
    let app = shallow(<Thing />);
    let button = app.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Toggle');

    // Act
    button.simulate('click');

    // Assert
    expect(app.state('flag')).toBe(false);
    expect(app.find('span.flag').text()).toBe('False');

    // Act
    button.simulate('click');

    // Assert
    expect(app.state('flag')).toBe(true);
    expect(app.find('span.flag').text()).toBe('True');
  });

  it('renders consistently', () => {
    const tree = renderer.create(<Thing />).toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
