---
title: "SASE"
description: "SASE is a cloud-delivered architecture that combines wide area networking (WAN) with network security functions to provide secure and optimized access for users, regardless of location."
category: "Network Security"
summary: "SASE (Secure Access Service Edge) merges SD-WAN and network security services into a single, provider-managed solution, enabling secure access for remote workers, branch offices, and HQs without relying solely on on-premises security appliances."
related:
  - title: "VPN"
    url: "/concepts/vpn/"
  - title: "SD-WAN"
    url: "/concepts/sd-wan/"
  - title: "Firewall"
    url: "/concepts/firewall/"
layout: concept_template.njk
permalink: "/concepts/{{ title | slug }}/"
quiz:
  - question: "What does SASE stand for?"
    answer: "Secure Access Service Edge."
  - question: "What two main technologies does SASE combine?"
    answer: "SD-WAN and network security services (like firewall, zero-trust, and secure web gateway)."
  - question: "How does SASE differ from traditional HQ-based security models?"
    answer: "Instead of forcing all traffic through HQ, SASE applies security controls in distributed data centers closer to the user."
resources:
  - title: "Cisco – What Is SASE?"
    url: "https://www.cisco.com/site/us/en/learn/topics/security/what-is-secure-access-service-edge-sase.html"
  - title: "Cloudflare – Understanding SASE"
    url: "https://www.cloudflare.com/learning/access-management/what-is-sase/"
---

## How SASE Works
SASE integrates **networking and security functions** into a service delivered from distributed provider data centers (sometimes called points of presence, or PoPs).  
Instead of routing all traffic back through a company’s HQ firewall, users connect to the nearest SASE PoP, where security checks are applied before sending traffic to its destination.

<br>

**Key components usually include:**
- **SD-WAN:** Optimizes network routing and prioritizes critical traffic.
- **Firewall-as-a-Service (FWaaS):** Provides traditional firewall protection without on-premise hardware.
- **Secure Web Gateway (SWG):** Filters harmful websites and content.
- **Zero Trust Network Access (ZTNA):** Ensures users and devices are authenticated before accessing resources.
- **Cloud Access Security Broker (CASB):** Controls access to SaaS/cloud applications.

<br>

## Benefits
- **Consistent security everywhere:** Same protection whether at HQ, branch office, or working remotely.  
- **Lower latency:** Traffic doesn’t need to backhaul through HQ.  
- **Scalability:** Easy to add new users or locations without new appliances.  
- **Centralized management:** One unified security and networking policy.  

<br>

## SASE in Practice
**Remote Worker → SASE PoP → Internet or HQ**  
Remote employees connect securely to the nearest provider location, which enforces policies before traffic continues to the HQ network or cloud apps.  

**Branch Office → SASE PoP → Cloud Services**  
Branches use SASE instead of expensive MPLS links to HQ, getting direct, secure connections to SaaS apps like Microsoft 365 or Salesforce.  

<br>

## Quick Summary
- **SASE = SD-WAN + Security-as-a-Service.**  
- Shifts from **HQ-based security** to **distributed security checkpoints** closer to the user.  
- Ideal for organizations with **many remote workers and branch o**
