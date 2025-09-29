---
title: "Firewall"
description: "A firewall is a network security device that monitors and controls incoming and outgoing traffic based on security rules."
category: "Network Security"
summary: "A firewall is a network security device that monitors and controls incoming and outgoing traffic based on security rules."
related:
  - title: "VPN"
    url: "/concepts/vpn/"
layout: concept_template.njk
permalink: "/concepts/{{ title | slug }}/"
quiz:
  - question: "What is the primary purpose of a firewall?"
    answer: "To monitor and control network traffic and block unauthorized access."
  - question: "Can a firewall protect against all types of cyberattacks?"
    answer: "No, it mainly protects against unauthorized network access, not all attacks like malware or phishing."
resources:
  - title: "Cisco – What is a Firewall?"
    url: "https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html"
  - title: "Cloudflare – Firewall Basics"
    url: "https://www.cloudflare.com/learning/ddos/what-is-a-firewall/"
---

## How Firewalls Work
Firewalls filter network traffic using rules that define what is allowed or blocked. They can operate at different layers, including:

- **Network layer:** Blocks traffic based on IP addresses, ports, and protocols.  
- **Application layer:** Filters traffic for specific applications or services.

<br>

## Benefits
- Protects networks from unauthorized access  
- Blocks malicious traffic and potential attacks  
- Monitors and logs traffic for security auditing

<br>

## Different Types of Firewalls

### 1. WAF (Web Application Firewall)
**Definition:** Specialized firewall that protects **web applications** (websites, APIs) by filtering **HTTP/HTTPS traffic**.  
**Protects against:** SQL Injection, XSS, CSRF, malicious bots.  
**Examples:** Cloudflare WAF, AWS WAF, F5 ASM

<br>

### 2. UTM (Unified Threat Management)
**Definition:** A **multi-function security device** combining firewalling with other security features.  
**Features include:** Firewall, IDS/IPS, antivirus, VPN, content filtering, spam filtering.  
**Use case:** Simplified “all-in-one” security solution for SMBs.  
**Examples:** Fortinet FortiGate, Sophos XG, Check Point UTM  

<br>

### 3. NGFW (Next-Generation Firewall)
**Definition:** An **advanced firewall** that goes beyond Layer 3/4 filtering with deep inspection.  
**Key capabilities:**  
  - Deep Packet Inspection (DPI)  
  - Application awareness (identify apps like Facebook, Dropbox, etc.)  
  - Integrated IDS/IPS  
  - SSL/TLS decryption  
  - Threat intelligence integration  
**Examples:** Palo Alto Networks NGFW, Cisco Firepower, Check Point NGFW  

<br>

### 4. Layer 4 & Layer 7 Firewalls

#### Layer 4 Firewall (Transport Layer)
**Definition:** Filters traffic based on **IP, ports, and protocols**.  
**Use case:** Basic packet filtering, access control.  
**Limitation:** Cannot inspect the actual content of traffic.  
**Example:** Cisco ASA (stateful firewall).  

#### Layer 7 Firewall (Application Layer)
**Definition:** Inspects the **actual data/content** inside packets.  
**Use case:** Blocks specific applications or malicious requests (e.g., block YouTube but allow Gmail).  
**Example:** WAFs, NGFWs with app-awareness.  

<br>

### Quick Summary
- **WAF** → Web app protection (HTTP/S attacks).  
- **UTM** → All-in-one security (firewall + IDS/IPS + AV, etc.).  
- **NGFW** → Smarter, app-aware firewall with deep inspection.  
- **Layer 4** → Basic filtering (IP/port).  
- **Layer 7** → Advanced filtering (application data).  

