---
title: "VPN"
description: "Learn what a VPN is, how Site-to-Site and Client-to-Server VPNs work, and why technologies like IPsec and SSL/TLS matter."
layout: concept_template.njk
tags: concept
category: "Network Security"
summary: "A VPN creates a secure, encrypted tunnel for your internet traffic. It protects data, privacy, and access across networks."
permalink: "/concepts/{{ title | slug }}/"
related:
  - title: "Firewall"
    url: "/concepts/firewall/"
quiz:
  - question: "What is the main purpose of a VPN?"
    answer: "To create a secure, encrypted tunnel for traffic between devices and networks."
  - question: "Can a VPN replace a firewall?"
    answer: "No, a VPN protects privacy and secures traffic, while a firewall controls and filters network access."
  - question: "Can firewalls act as VPN concentrators?"
    answer: "Yes. Many modern firewalls have built-in VPN functionality and can manage multiple secure connections."
resources:
  - title: "Cisco: Site-to-Site VPN Overview"
    url: "https://www.cisco.com/c/en/us/td/docs/security/vpnclient/"
  - title: "Cloudflare: What is a VPN?"
    url: "https://www.cloudflare.com/learning/security/glossary/what-is-vpn/"
---

## How VPNs Work
When you connect to a VPN:
1. Your traffic is **encrypted** on your device.  
2. It travels through a secure VPN server or gateway.  
3. The server then connects you to the internet or a private network, masking your identity and protecting your data.  

<br>

## Site-to-Site VPN
A **Site-to-Site VPN** connects entire networks together. For example, linking a branch office with company headquarters.  
- Users don’t need to configure anything; the VPN is managed by routers or firewalls.  
- These connections are often built using **IPsec (Internet Protocol Security)**, which ensures traffic between sites is encrypted and authenticated at the **network layer**.  

This makes Site-to-Site VPNs ideal for organizations with multiple offices needing constant, secure communication.

<br>

## Client-to-Server VPN
A **Client-to-Server VPN** (sometimes called Remote Access VPN) connects an individual device to a remote network.  
- Common for remote workers needing secure access to company files or apps.  
- These VPNs often rely on **SSL/TLS** (the same security protocol used in HTTPS websites), which makes them easy to run through web browsers and firewalls.  

This type is flexible, but puts more responsibility on the user’s device and VPN client.

<br>

## VPN Concentrators
For organizations with hundreds or thousands of VPN users, a **VPN concentrator** manages all the secure connections.  
It handles **authentication, encryption, and traffic routing**, ensuring scalability and performance.  
