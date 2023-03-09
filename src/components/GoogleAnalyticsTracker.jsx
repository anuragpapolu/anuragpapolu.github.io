import React from "react";

// Initialize Google Analytics tracker for page views
export default function GoogleAnalyticsTracker() {
	const trackerId = "G-449F02TC29"
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push('js', new Date());
	window.dataLayer.push('config', trackerId);
	return (
		<script async src={ "https://www.googletagmanager.com/gtag/js?id=" + trackerId }></script>
	);
}
