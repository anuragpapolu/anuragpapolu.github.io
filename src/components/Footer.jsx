import React from "react";
import '../scss/Footer.scss';

// Initialize footer with up-to-date copyright information
export default function Footer() {
  const currentYear = new Date().getFullYear() 
  return (
	<footer>
		© 2016 - { currentYear }, Anurag Papolu
	</footer>
  );
}
