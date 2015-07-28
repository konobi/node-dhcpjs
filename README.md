dhcpjs provides native DHCP support in Node.js.

## Introduction

Currently, this project just provides simple client and server protocol APIs
which allow an application to consume DHCP messages broadcast to the network
as JS objects.

The module can be used to sniff DHCP traffic, and a skeleton client example
is provided to show how the module can be used to build a full DHCP client.

## Usage

    _TBD_

## Installation

    npm install dhcpjs

## License

This module is released under the MIT license.

## Bugs

See <https://github.com/apaprocki/node-dhcpjs/issues>.

## Overhaul

**CURRENT COMPLIANCE @ 2132-ish**

### List of informational RFCs

This list is not exhaustive, and has been gathered as best as possible in a single sitting. If you know of any updates
or other informational RFCs that should be here, please send a PR to the konobi/node-dhcpjs repo.

   * [~~1497~~](https://www.ietf.org/rfc/rfc1497.txt) -> 1533
   * [~~1533~~](https://www.ietf.org/rfc/rfc1533.txt) -> 2132
   * [1534](https://www.ietf.org/rfc/rfc1534.txt) (describes BOOTP/DHCP interop)
   * [~~1541~~](https://www.ietf.org/rfc/rfc1541.txt) -> 2131
   * [1542](https://www.ietf.org/rfc/rfc1542.txt) (update to BOOTP)
   * [~~2131~~](https://www.ietf.org/rfc/rfc2131.txt) -> 3396
   * [~~2132~~](https://www.ietf.org/rfc/rfc2132.txt) -> 3942
   * [3074](https://www.ietf.org/rfc/rfc3074.txt) DHC Load Balancing Algorithm (implementation details)
   * [**3396**](https://www.ietf.org/rfc/rfc3396.txt)
   * [3679](https://www.ietf.org/rfc/rfc3679.txt) List of options that are redundant and no longer used and reserved options
   * [3942](https://www.ietf.org/rfc/rfc3942.txt) Update to options list for IANA reclassification
   * [~~4388~~](https://www.ietf.org/rfc/rfc4388.txt) -> 6148
   * [4390](https://www.ietf.org/rfc/rfc4390.txt) DHCP over InfiniBand
   * [4436](https://www.ietf.org/rfc/rfc4436.txt) Detecting Network Attachment in IPv4 (DNAv4)
   * [4477](https://www.ietf.org/rfc/rfc4477.txt) IPv4 and IPv6 Dual-Stack Issues
   * [4703](https://www.ietf.org/rfc/rfc4703.txt) Update to specify implementation details about FQDN resolution
   * [**6148**](https://www.ietf.org/rfc/rfc6148.txt) Update to DHCP Message Types (LEASE)

### List of RFCs with new/different options

This list is not exhaustive, and has been gathered as best as possible in a single sitting. If you know of any updates
or other informational RFCs that should be here, please send a PR to the konobi/node-dhcpjs repo.

It is expected that most if not all of these extra options will not be available in the base dhcpjs module. They may
and will be made available as seperate modules that can be used in a "plugin" style system (TBD).

   * [2241](https://www.ietf.org/rfc/rfc2241.txt) Novell Directory Services
   * [2242](https://www.ietf.org/rfc/rfc2242.txt) NetWare/IP Domain Name
   * [2485](https://www.ietf.org/rfc/rfc2485.txt) Open Group's User Authentication Protocol
   * [2563](https://www.ietf.org/rfc/rfc2563.txt) Disable Stateless Auto-Configuration in IPv4 Clients
   * [2610](https://www.ietf.org/rfc/rfc2610.txt) Service Location Protocol
   * [2937](https://www.ietf.org/rfc/rfc2937.txt) Name Service Search
   * [3004](https://www.ietf.org/rfc/rfc3004.txt) User Class Option
   * [3011](https://www.ietf.org/rfc/rfc3011.txt) IPv4 Subnet Selection Option
   * [3046](https://www.ietf.org/rfc/rfc3046.txt) DHCP Relay Agent Information
   * [3118](https://www.ietf.org/rfc/rfc3118.txt) Authentication
   * [3203](https://www.ietf.org/rfc/rfc3203.txt) DHCP reconfigure extension
   * [3397](https://www.ietf.org/rfc/rfc3397.txt) Domain Search Option
   * [3442](https://www.ietf.org/rfc/rfc3442.txt) Classless Static Route Option
   * [3495](https://www.ietf.org/rfc/rfc2495.txt) CableLabs Client Configuration Options
   * [3527](https://www.ietf.org/rfc/rfc3527.txt) Link Selection sub-option for the Relay Agent Information Option
   * [3634](https://www.ietf.org/rfc/rfc3634.txt) Key Distribution Center (KDC) Server Address Sub-option for CableLabs Client Configuration
   * [3825](https://www.ietf.org/rfc/rfc3825.txt) Coordinate-based Location Configuration Information
   * [3925](https://www.ietf.org/rfc/rfc3925.txt) Vendor-Identifying Vendor Options
   * [3993](https://www.ietf.org/rfc/rfc3993.txt) Subscriber-ID Suboption for the Relay Agent Option
   * [4030](https://www.ietf.org/rfc/rfc4030.txt) Authentication Suboption for the Relay Agent Option
   * [4039](https://www.ietf.org/rfc/rfc4039.txt) Rapid Commit Option
   * [4174](https://www.ietf.org/rfc/rfc4174.txt) Internet Storage Name Service Option
   * [4243](https://www.ietf.org/rfc/rfc4243.txt) Vendor-Specific Information Suboption for the Relay Agent Option
   * [4280](https://www.ietf.org/rfc/rfc4280.txt) Broadcast and Multicast Control Servers Options
   * [4361](https://www.ietf.org/rfc/rfc4361.txt) Node-specific Client Identifiers
   * [4578](https://www.ietf.org/rfc/rfc4578.txt) Intel Preboot eXecution Environment Options
   * [4701](https://www.ietf.org/rfc/rfc4701.txt) DHCID RR - A DNS RR for Encoding DHCP Information
   * [4702](https://www.ietf.org/rfc/rfc4702.txt) Client FQDN Option
   * [4776](https://www.ietf.org/rfc/rfc4776.txt) Civic Addresses Configuration Information Option
   * [4833](https://www.ietf.org/rfc/rfc4833.txt) Timezone Options (XXX - deprecates timeOffset)
   * [5010](https://www.ietf.org/rfc/rfc5010.txt) Relay Agent Flags Suboption
   * [5071](https://www.ietf.org/rfc/rfc5071.txt) Options Used by PXELINUX
   * [5107](https://www.ietf.org/rfc/rfc5107.txt) Server Identifier Override Suboption
   * [5192](https://www.ietf.org/rfc/rfc5192.txt) Carrying Authentication for Network Access (PANA) Authentication Agents Options
   * [5223](https://www.ietf.org/rfc/rfc5223.txt) Discovering Location-to-Service Translation (LoST) Servers Option
   * [5678](https://www.ietf.org/rfc/rfc5678.txt) IEEE 802.21 Mobility Services (MoS) Discovery Options
   * [5859](https://www.ietf.org/rfc/rfc5859.txt) TFTP Server Address Option
   * [6153](https://www.ietf.org/rfc/rfc6153.txt) Access Network Discovery and Selection Function (ANDSF) Discovery Options

### Breakdown of options vs RFCs

| Option Number | Option Name                      | 1497 | 1533 | 2132 | 3679 | huh? 
| ------------- | -------------------------------- | ---- | ---- | ---- | ---- | ----
| 1             | subNetMask                       | ✔    | ✔    | ✔    |      |
| 2             | timeOffset                       | ✔    | ✔    | ✔    |      |
| 3             | routers                          | ✔    | ✔    | ✔    |      |
| 4             | timeServer                       | ✔    | ✔    | ✔    |      |
| 5             | nameServer                       | ✔    | ✔    | ✔    |      |
| 6             | dnsServer                        | ✔    | ✔    | ✔    |      |
| 7             | logServer                        | ✔    | ✔    | ✔    |      |
| 8             | cookieServer                     | ✔    | ✔    | ✔    |      |
| 9             | lprServer                        | ✔    | ✔    | ✔    |      |
| 10            | impressServer                    | ✔    | ✔    | ✔    |      |
| 11            | rlpServer                        | ✔    | ✔    | ✔    |      |
| 12            | hostName                         | ✔    | ✔    | ✔    |      |
| 13            | bootFileSize                     | ✔    | ✔    | ✔    |      |
| 14            | meritDumpFile                    | ✔    | ✔    | ✔    |      |
| 15            | domainName                       | ✔    | ✔    | ✔    |      |
| 16            | swapServer                       | ✔    | ✔    | ✔    |      |
| 17            | rootPath                         | ✔    | ✔    | ✔    |      |
| 18            | extensionsPath                   | ✔    | ✔    | ✔    |      |
| 19            | ipForward                        |      | ✔    | ✔    |      |
| 20            | nonLocalSourceRouting            |      | ✔    | ✔    |      |
| 21            | policyFilter                     |      | ✔    | ✔    |      |
| 22            | maxDatagramReassemlySize         |      | ✔    | ✔    |      |
| 23            | defaultIpTtl                     |      | ✔    | ✔    |      |
| 24            | pathMtuTimeout                   |      | ✔    | ✔    |      |
| 25            | pathMtuPlateauTimeout            |      | ✔    | ✔    |      |
| 26            | interfaceMTU                     |      | ✔    | ✔    |      |
| 27            | allSubnetsLocal                  |      | ✔    | ✔    |      |
| 28            | broadcastAddress                 |      | ✔    | ✔    |      |
| 29            | performMaskDiscovery             |      | ✔    | ✔    |      |
| 30            | maskSupplier                     |      | ✔    | ✔    |      |
| 31            | performRouterDiscovery           |      | ✔    | ✔    |      |
| 32            | routerSolicitationAddress        |      | ✔    | ✔    |      |
| 33            | staticRoutes                     |      | ✔    | ✔    |      |
| 34            | trailerEncapsulation             |      | ✔    | ✔    |      |
| 35            | arpCacheTimeout                  |      | ✔    | ✔    |      |
| 36            | ethernetEncapsulation            |      | ✔    | ✔    |      |
| 37            | tcpDefaultTtl                    |      | ✔    | ✔    |      |
| 38            | tcpKeepaliveInterval             |      | ✔    | ✔    |      |
| 39            | tcpKeepaliveGarbage              |      | ✔    | ✔    |      |
| 40            | nisDomain                        |      | ✔    | ✔    |      |
| 41            | nisServers                       |      | ✔    | ✔    |      |
| 42            | ntpServers                       |      | ✔    | ✔    |      |
| 43            | vendorSpecificInfo               |      | ✔    | ✔    |      |
| 44            | netbiosTcpIpNameServer           |      | ✔    | ✔    |      |
| 45            | netbiosTcpIpDatagramDistributionServer |   | ✔ | ✔    |      |
| 46            | netbiosTcpIpNodeType             |      | ✔    | ✔    |      |
| 47            | netbiosTcpIpScope                |      | ✔    | ✔    |      |
| 48            | xWindowSystemFontServer          |      | ✔    | ✔    |      |
| 49            | xWindowSystemDisplayManager      |      | ✔    | ✔    |      |
| 50            | requestedIpAddress               |      | ✔    | ✔    |      |
| 51            | ipAddressLeaseTime               |      | ✔    | ✔    |      |
| 52            | optionOverload                   |      | ✔    | ✔    |      |
| 53            | dhcpMessageType                  |      | ✔    | ✔    |      |
| 54            | serverIdentifier                 |      | ✔    | ✔    |      |
| 55            | parameterRequestList             |      | ✔    | ✔    |      |
| 56            | message                          |      | ✔    | ✔    |      |
| 57            | maxDhcpMessageSize               |      | ✔    | ✔    |      |
| 58            | renewalTime                      |      | ✔    | ✔    |      |
| 59            | rebindTime                       |      | ✔    | ✔    |      |
| 60            | classIdentifier                  |      | ✔    | ✔    |      |
| 61            | clientIdentifier                 |      | ✔    | ✔    |      |
| 64            | nisPlusDomain                    |      |      | ✔    |      |
| 65            | nisPlusServers                   |      |      | ✔    |      |
| 66            | tftpServer                       |      |      | ✔    |      |
| 67            | bootFileName                     |      |      | ✔    |      |
| 68            | mobileIpHomeAgent                |      |      | ✔    |      |
| 69            | smtpServer                       |      |      | ✔    |      |
| 70            | popServer                        |      |      | ✔    |      |
| 71            | nntpServer                       |      |      | ✔    |      |
| 72            | wwwServer                        |      |      | ✔    |      |
| 73            | fingerServer                     |      |      | ✔    |      |
| 74            | ircServer                        |      |      | ✔    |      |
| 75            | streetTalkServer                 |      |      | ✔    |      |
| 76            | streetTalkDaServer               |      |      | ✔    |      |
| 80            | ?                                |      |      |      | ✗    | Service Location Protocol Naming Authority?
| 83            | ?                                |      |      |      | ✗    | Relay Agent Options
| 84            | ?                                |      |      |      | ✗    | Relay Agent Options
| 88            | ?                                |      |      |      | ✗    | IEEE 1003.1 POSIX Timezone
| 89            | ?                                |      |      |      | ✗    | FQDNs in DHCP Options
| 91            | ?                                |      |      |      | ✗    | VINES TCP/IP Server
| 92            | ?                                |      |      |      | ✗    | Server Selection
| 93            | pxeClientSystem                  |      |      |      | ✔    |
| 94            | pxeClientNdi                     |      |      |      | ✔    |
| 95            | ldapServers                      |      |      |      | ✔    |
| 97            | uuidOrGuidClientIdentifier       |      |      |      | ✔    | 
| 96            | ?                                |      |      |      | ✗    | IPv6 Transition
| 99            | ?                                |      |      |      | ✗    | ?
| 100           | ?                                |      |      |      | ✗    | Printer Name
| 101           | ?                                |      |      |      | ✗    | Multicast Assignment through DHCP
| 102           | ?                                |      |      |      | ✗    | ?
| 103           | ?                                |      |      |      | ✗    | ?
| 104           | ?                                |      |      |      | ✗    | ?
| 105           | ?                                |      |      |      | ✗    | ?
| 106           | ?                                |      |      |      | ✗    | ?
| 107           | ?                                |      |      |      | ✗    | ?
| 108           | ?                                |      |      |      | ✗    | Swap Path
| 109           | ?                                |      |      |      | ✗    | ?
| 110           | ?                                |      |      |      | ✗    | IPX Compatibility
| 111           | ?                                |      |      |      | ✗    | ?
| 112           | netinfoAddress                   |      |      |      | ✔    |
| 113           | netinfoTag                       |      |      |      | ✔    |
| 114           | url                              |      |      |      | ✔    | ?
| 115           | ?                                |      |      |      | ✗    | Failover
| 126           | ?                                |      |      |      | ✔    | Option Code Extensions
| 127           | ?                                |      |      |      | ✔    | Option Code Extensions

### Overhaul, tests and docs

Updated by [Scott "konobi" McWhirter][https://github.com/konobi/]

