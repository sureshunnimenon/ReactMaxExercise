import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nisi unde. Corrupti perspiciatis blanditiis quae dignissimos placeat sed iusto. Perspiciatis quia dignissimos dolor nobis, earum nisi! Iusto repellendus saepe earum!</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit quaerat atque reiciendis aliquam impedit expedita possimus eos voluptatem, minus aliquid sequi optio nesciunt, mollitia eaque blanditiis quidem libero! Consequatur?</p>
            <h3 onClick = {props.clicked}> Name: {props.name} </h3>
        </div>
    )
}

export default UserOutput