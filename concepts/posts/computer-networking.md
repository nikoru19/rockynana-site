---
title: "Computer Networking"
description: "Computer networking connects devices to share data, access the internet, and communicate efficiently."
category: "Networking Basics"
summary: "Computer networking connects devices to share data, access the internet, and communicate efficiently."
related:
  - title: "Ports"
    url: "/concepts/ports/"
layout: concept_template.njk
permalink: "/concepts/{{ title | slug }}/"
quiz:
  - question: "What is the main purpose of computer networking?"
    answer: "To connect devices so they can share data and resources."
  - question: "What is the largest example of a Wide Area Network (WAN)?"
    answer: "The Internet."
  - question: "What does a router do in a network?"
    answer: "It distributes internet connections and manages communication between devices."
---

## Introduction
Computer networking connects devices to share data, access the internet, and communicate efficiently. It enables services such as email, streaming, video calls, file sharing, printing, and smart device integration. Networking is essential for personal, educational, and business activities.

<br>

## What Is Computer Networking?
### Definition
Computer networking is the process of connecting devices to exchange data and resources. Devices communicate using **protocols**, which standardize how information is sent and received.

### How Networks Work
Data on a network is sent in **packets**, which are small units of information. Each packet contains:  
- **Header:** Includes the source and destination IP addresses, protocol type, and sequencing information.  
- **Payload:** The actual data being transmitted.  

When a packet is sent:  
1. It leaves the sender device and travels through the local network (LAN) via **switches**. Switches forward packets within the same network based on the device’s MAC address.  
2. If the packet needs to leave the local network, it reaches a **router**, which examines the destination IP and forwards it toward the correct external network.  
3. Packets may take different paths to the destination, but protocols like **TCP** ensure they arrive in order and without errors.  

This process allows devices to communicate efficiently, even across long distances, while handling potential network issues like lost or delayed packets.

### Applications
- **Personal:** Internet access, file sharing, printing, smart devices.  
- **Business:** Team communication, cloud storage, remote work.

<br>

## Types of Computer Networks
| Network Type | Full Name | Coverage | Example |
|---------------|------------|-----------|----------|
| **PAN** | Personal Area Network | A few meters | Bluetooth headphones |
| **LAN** | Local Area Network | One building | Home or office WiFi |
| **WAN** | Wide Area Network | Cities/countries | The Internet |

- **PAN:** Connects devices in a small area using Bluetooth or USB.  
- **LAN:** Connects devices within a building via Ethernet or WiFi.  
- **WAN:** Connects multiple LANs across distances; the Internet is the largest WAN.

<br>

## Essential Networking Components
- **Modem:** Connects a network to an Internet Service Provider.  
- **Router:** Distributes internet to devices and manages communication.  
- **Switch:** Expands wired connections.  
- **Access Point:** Extends WiFi coverage.  
- **Network Cables:** Wired connections (Cat5e, Cat6).

<br>

## Basic Network Protocols
Protocols define **how devices communicate** on a network.

**TCP/IP (Transmission Control Protocol / Internet Protocol):**  
- **IP:** Routes packets to the correct destination using IP addresses.  
- **TCP:** Ensures reliable delivery, resends lost packets, and arranges them in the correct order.  

**HTTP/HTTPS (Hypertext Transfer Protocol / Secure):**  
- Transfers website content.  
- HTTPS encrypts traffic to prevent interception.  

**DNS (Domain Name System):**  
- Converts domain names (like `example.com`) into numerical IP addresses.  
- Uses recursive and authoritative servers to efficiently locate addresses worldwide.  

**WiFi (802.11 standards):**  
- Allows devices to communicate wirelessly.  
- Divides signals into **channels** to reduce interference.  
- Standards like WiFi 5 and WiFi 6 improve **speed, capacity, and reliability**.

<br>

## IP Addresses
Each device on a network requires a **unique identifier** called an IP address.  

- **Public IP:** Used to identify your network on the internet. All devices in your home may share this IP externally.  
- **Private IP:** Internal device addresses within your LAN, assigned by the router.  

**Network Address Translation (NAT)** allows multiple private IP devices to share a single public IP. For example, your laptop, phone, and smart TV all access the internet using the same public IP while keeping unique private IPs internally.

| Feature | IPv4 | IPv6 |
|----------|------|------|
| **Format** | 192.168.1.1 | 2001:0db8:85a3::8a2e:0370:7334 |
| **Availability** | ~4.3 billion | Virtually unlimited |

<br>

## WiFi
### Frequency Bands
WiFi networks operate mainly on **2.4 GHz** and **5 GHz** bands:  

| Band | Range | Speed | Use |
|------|--------|--------|-----|
| 2.4 GHz | Long | Slower | Distant devices |
| 5 GHz | Short | Faster | Nearby devices |

- 2.4 GHz signals travel farther but are more susceptible to interference (microwaves, cordless phones).  
- 5 GHz signals are faster and less crowded but have shorter range.  

### Security
To protect wireless networks:  
- Use **WPA2 or WPA3** encryption.  
- Set strong passwords (12+ characters).  
- Change default router credentials.  
- Create a guest network to isolate visitor devices.
<br>

## Conclusion
Computer networking enables devices to communicate, share data, and access the internet. Understanding network types, hardware components, protocols, IP addressing, and WiFi provides a foundation for managing and using networks effectively.
