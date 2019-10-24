
const render = (condition = false, children = null) => {
  return !!condition ? children : null;
};

export const If = props => render(props.condition, props.children);
export const Then = props => render(props.condition, props.children);
export const Else = props => render(!props.condition, props.children);
export const When = props => render(props.condition, props.children);
export const Unless = props => render(!props.condition, props.children);
