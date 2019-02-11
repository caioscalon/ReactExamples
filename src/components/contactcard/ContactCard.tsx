import React, {Component} from "react";

interface IProps {
    contact: {
        name: string,
        imgUrl: string,
        phone: string,
        email: string,
    }
}

function ContactCard(props: IProps) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}></img>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    );
}

export default ContactCard;

/*
<div className="contacts">
    <ContactCard 
    contact = {{
        name: "Mr. Whiskerson",
        imgUrl: "http://placekitten.com/300/200",
        phone: "(212) 555-1234",
        email: "mr.whiskaz@catnap.meow",
    }}
    />
    <ContactCard 
        contact = {{
            name: "Fluffykins",
            imgUrl: "http://placekitten.com/400/200",
            phone: "(212) 555-2345",
            email: "fluff@me.com",
        }}
    />
    <ContactCard 
        contact = {{
            name: "Destroyer",
            imgUrl: "http://placekitten.com/400/300",
            phone: "(212) 555-4567",
            email: "ofworlds@yahoo.com",
        }}
    />
</div>
*/