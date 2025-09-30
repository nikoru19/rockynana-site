---
title: "SD-WAN"
description: "SD-WAN is a virtual WAN architecture that uses software to manage connectivity, traffic, and security across wide area networks."
category: "Network Security"
summary: "SD-WAN is a virtual WAN architecture that uses software to manage connectivity, traffic, and security across wide area networks."
layout: concept_template.njk
permalink: "/concepts/{{ title | slug }}/"
related:
  - title: "VPN"
    url: "/concepts/vpn/"
quiz:
  - question: "What is the main purpose of SD-WAN?"
    answer: "To provide secure, efficient, and flexible WAN connectivity using software-defined control."
  - question: "How does SD-WAN differ from traditional WANs like MPLS?"
    answer: "SD-WAN uses multiple connection types (e.g., broadband, LTE, MPLS) and intelligently routes traffic, offering more flexibility and lower cost."
  - question: "Does SD-WAN often rely on tunneling?"
    answer: "Yes, SD-WAN typically uses IPSec tunnels to securely connect branch offices and remote sites."
  - question: "What are the main benefits of SD-WAN?"
    answer: "Lower cost, improved performance, integrated security, and simplified management for distributed networks."
  - question: "What is the key difference between SD-WAN and a traditional VPN?"
    answer: "VPN secures a connection between two points, while SD-WAN securely manages and optimizes multiple WAN links across distributed sites."
resources:
  - title: "Fortinet – SD-WAN Explained"
    url: "https://www.fortinet.com/resources/cyberglossary/sd-wan-explained"
  - title: "Cloudflare – What is SD-WAN"
    url: "https://www.cloudflare.com/learning/network-layer/what-is-an-sd-wan/"
---

## What is Software-Defined Wide Area Network (SD-WAN)
- A **virtual WAN architecture** that allows organizations to securely connect users to applications using **multiple connection types** (MPLS, broadband, LTE, 5G).  
- Uses **software-defined control** to manage traffic routing and security.  

<br>

## Key Features
- **Dynamic Path Selection:** Routes traffic based on performance, cost, or policy.  
- **Encrypted Tunnels:** Typically uses IPSec tunnels for secure branch-to-branch and branch-to-cloud communication.  
- **Centralized Management:** Network admins configure and monitor WANs from a central controller.  
- **Application Awareness:** Prioritizes critical apps like VoIP or video conferencing.  

<br>

## Benefits
- **Cost Savings:** Reduces reliance on expensive MPLS links by using broadband.  
- **Performance:** Improves application performance with intelligent routing.  
- **Security:** Includes built-in encryption, firewalls, and sometimes IDS/IPS.  
- **Flexibility:** Easily connects branches, remote workers, and multi-cloud environments.  

<br>

## Use Cases
- Enterprises with multiple branch offices.  
- Organizations adopting **cloud-first strategies**.  
- Companies needing secure, high-performance WAN for remote workforces.  

<br>

## Quick Summary
- **SD-WAN** = Software-defined control + multiple link types + security.  
- Provides **better performance, security, and cost-efficiency** compared to traditional WAN.  
- Often works alongside **SASE** for cloud-delivered security.  
