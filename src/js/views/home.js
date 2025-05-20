import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<Link to ='/contacts' className="mx-1">Contacts</Link>
		<Link to ='/add-contact' className="mx-1">Add contact</Link>
	</div>
);
