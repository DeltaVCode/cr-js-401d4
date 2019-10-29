import React from 'react';

export default function Item(props) {
  let { item } = props;
  return (
                <li
                  className={`complete-${item.complete.toString()}`}
                  key={item._id}
                >
                  <span onClick={() => props.toggleComplete(item._id)}>
                    {item.text}
                  </span>
                  <button onClick={() => props.toggleDetails(item._id)}>
                    Details
                  </button>
                  <button onClick={() => props.deleteItem(item._id)}>
                    Delete
                  </button>
                </li>
  );
}
