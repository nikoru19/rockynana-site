---
title: "Ports"
description: "Ports allow multiple services to run on a single device and help identify which service or application should handle incoming network traffic."
category: "Networking Basics"
summary: "Ports are virtual communication endpoints used by devices to send and receive data over a network."
layout: concept_template.njk
permalink: "/concepts/{{ title | slug }}/"
quiz:
  - question: "What is the main purpose of network ports?"
    answer: "To direct network traffic to the correct service or application on a device."
  - question: "Which port is commonly used for secure web traffic?"
    answer: "Port 443 for HTTPS."
resources:
  - title: "Cloudflare - What Is a Computer Port"
    url: "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/"
  - title: "What is Ports in Networking? - GeeksforGeeks"
    url: "https://www.geeksforgeeks.org/computer-networks/what-is-ports-in-networking/"
---

## What Are Ports?

A **port** is a **virtual endpoint** that allows a computer or device to **send and receive data over a network**. Think of your computer as a building, and **ports are doors**: different doors are used for different services (like web, email, or file transfers).  

<br>

## Why Ports Matter

| Benefit | Description |
|---------|-------------|
| **Multiple Services** | A single device can run many services at the same time, each using a different port. |
| **Traffic Direction** | Helps the system know which service should handle incoming data. |
| **Security Controls** | Firewalls and ACLs can allow or block traffic based on port numbers. |
| **Troubleshooting** | Identifying open/closed ports helps diagnose network and application issues. |

<br>

## Common Port Types

### **TCP vs UDP**
- **TCP (Transmission Control Protocol):** Reliable, connection-oriented.  
- **UDP (User Datagram Protocol):** Faster, connectionless, no guaranteed delivery.  

### **Common Ports (0–1023)**
| Port | Protocol | Common Use |
|------|---------|------------|
| 20/21 | TCP | FTP (File Transfer) |
| 22 | TCP | SSH (Secure Shell) |
| 23 | TCP | Telnet (Unsecure remote login) |
| 25 | TCP | SMTP (Email sending) |
| 53 | TCP/UDP | DNS (Domain Name System) |
| 80 | TCP | HTTP (Web traffic) |
| 110 | TCP | POP3 (Email retrieval) |
| 143 | TCP | IMAP (Email retrieval) |
| 443 | TCP | HTTPS (Secure web traffic) |
| 3389 | TCP | RDP (Remote Desktop Protocol) |

<br>

## How Ports Work

1. Your computer sends a packet to a server IP address and specifies a **port number**.  
2. The server looks at the port number to determine which service should handle the data.  
3. Response traffic comes back to the **same source port** on your computer.  

**Analogy:** Ports are like **mail slots in an apartment building**—each slot directs mail to the correct apartment (service).


