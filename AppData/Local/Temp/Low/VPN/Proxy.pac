
function FindProxyForURL(url, host)
{
	if(host == "127.0.0.1") {
		return "DIRECT";
	}
	if(host == "localhost") {
		return "DIRECT";
	}
	if(shExpMatch(host, "ivpn.ctrip.com")) {
		return FindProxyForURL_OutsideProxy(url, host);
	}
	if(localHostOrDomainIs("ivpn.ctrip.com", host)) {
		return FindProxyForURL_OutsideProxy(url, host);
	}
	if (isInNet(host, "192.168.3.1", "255.255.255.255")) {
		return FindProxyForURL_OutsideProxy(url, host);
	}
	if (isInNet(host, "192.168.0.0", "255.255.0.0")) {
		return "DIRECT";
	}
	if (isInNet(host, "10.0.0.0", "255.0.0.0")) {
		return "DIRECT";
	}
	if (isInNet(host, "172.16.0.0", "255.240.0.0")) {
		return "DIRECT";
	}
	if (isInNet(host, "100.64.0.0", "255.192.0.0")) {
		return "DIRECT";
	}
	return FindProxyForURL_OutsideProxy(url, host);
}
