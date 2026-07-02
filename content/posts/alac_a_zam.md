---
title: ALAC-a-zam – Building an NHS Referral Decision Support Tool at NHS Hack Day #30
date: 2026/03/23
description: How my team placed 2nd overall at NHS Hack Day #30 by building ALAC-a-zam, a clinical decision support tool that streamlines wheelchair referrals across Wales using Bayesian networks and LLMs.
tag: Hackathon
author: Prem Shrawan Jha
---

# ALAC-a-zam – Building an NHS Referral Decision Support Tool at NHS Hack Day #30

---

![Wheelchair referral in Wales – the scale of the problem](/images/NHS/wheelchair-referral-wales.png)

As part of [NHS Hack Day #30](https://github.com/HALP-Cardiff/NHS_Referral_Management), I teamed up with a multidisciplinary group of healthcare and tech professionals to tackle a very real inefficiency in the NHS referral system. Over an intense 48 hours, we built **ALAC-a-zam**, a clinical decision support tool for wheelchair referrals — and came away with **2nd Place Overall** and **3rd Place in the Community Vote**.

---

## The Problem

Over **45,000 long-term wheelchair users** in South Wales are affected by delays in the referral system. The process relies on a manual, error-prone **10-page referral form** with 72 questions. Incomplete forms and vague answers lead to bounced-back referrals, repeated back-and-forth communication, and significant time loss for clinicians — all of which delays patient care.

Only **80.6%** of standard wheelchairs are delivered within 21 days of referral, well below the 95% target, and processing these forms takes a team of band 6 clinicians around 4.5 hours a week.

---

## What We Built

ALAC-a-zam is a clinical decision support tool designed to streamline and enhance the referral workflow. The system:

- **Flags missing or incomplete information in real time**, so forms are corrected before they bounce
- **Reduces unnecessary referral rejections and resubmissions**
- **Provides evidence-based recommendations within ~20 seconds** using Bayesian networks
- **Supports faster, more consistent clinical decisions** while preserving clinician autonomy

Crucially, the AI is advisory only — a human is always in the loop. The tool augments clinical decision-making; it never replaces it. Every recommendation surfaces its weighted reasoning so a clinician can see *why* a suggestion was made, and accept, reject, or override it.

---

## How It Works

We split the system into three services:

- **Frontend (Next.js)** — PDF upload with drag-and-drop, extracted field display grouped by section, instant missing-field highlighting, and inference results with confidence scores.
- **Backend (Express.js)** — a REST API that parses the PDF form into structured JSON, verifies all required fields, and integrates with an LLM to produce a plain-language clinical summary.
- **Bayesian Network Service (FastAPI + pgmpy)** — a probabilistic inference engine, designed with expert knowledge rather than biased historical data, that infers hidden variables (like fall risk) from the factors provided and produces recommendations for size, type, modifications, referrals, and urgency.

### Why a Bayesian network?

Old referral data can be biased towards certain population groups. By designing the network with expert knowledge instead, we reduce that bias and standardise referral quality. A Bayesian network also weighs multiple clinical factors and *shows its working* — a clinician can see the reasoning and push back — and it can infer unstated information from what is provided.

---

## My Contributions

- Developed backend components of the application
- Integrated and configured LLM models for decision support
- Contributed to the frontend implementation
- Designed and structured the overall system architecture
- Played a key role in building and delivering the end-to-end solution within the 48-hour window

---

## What I Learned

This hackathon stretched me technically and personally. A few highlights:

- **Self-deploying fine-tuned models.** I learned how to take a fine-tuned model and stand it up myself, rather than relying entirely on hosted APIs — a skill that immediately changes what feels possible to build.
- **Connecting different microservices.** Wiring the Next.js frontend, the Express backend, and the FastAPI Bayesian network service together taught me a lot about how independent services communicate and stay in sync.
- **Delivering projects with minimal domain knowledge.** I walked in knowing very little about wheelchair referrals, and learned how to build something genuinely useful in a field I wasn't an expert in — leaning on the people who were.
- **Working with non-technical teammates.** Translating clinical requirements into technical decisions (and back again) was one of the most valuable parts of the experience.
- **Learning from my teammates.** Honestly, this was the best part. It was so impressive to learn about the field and the work my teammates do in it — the clinicians and healthcare professionals on the team shaped what we built, and I came away having learned an enormous amount from them.

---

## The Outcome

- **2nd Place Overall** – NHS Hack Day #30
- **3rd Place** – Community Vote

Beyond the placements, ALAC-a-zam meaningfully reduces administrative burden and improves efficiency in the referral pipeline. More than that, it was a reminder of why I love building technology with a real-world impact — especially alongside a team where everyone brings something the rest of us don't have.

You can find the project on [GitHub](https://github.com/HALP-Cardiff/NHS_Referral_Management).

---
