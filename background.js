chrome.cookies.get({url: 'https://testportal.zalaris.com/neptune/?sap-client=510&appcache=PORTAL', name: 'sap-webdisp-session'}, function(cookie) {
	// do something with the cookie
	console.log(cookie);
	alert(cookie.name + ' found, value: ' + cookie.value);
});
