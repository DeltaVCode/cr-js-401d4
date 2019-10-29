import React from 'react';

export default function (props){
  let { details } = props;
  return (
            <div className="todo-details">
              <header>
                <span>Assigned To: {details.assignee}</span>
                <span>Due: {details.due}</span>
              </header>
              <div className="item">
                {details.text}
              </div>
            </div>
            );
}