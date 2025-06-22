---
title: Job Search Tracking Dashboard.
date: 2025/06/22
description: A job search tracking dashboard for tracking my progress in finding a job.
tag: Data analysis
author: Prem Shrawan Jha
---

# Job Tracking Dashboard

## View the Dashboard

You can view the interactive dashboard here: [Job Search Tracking Dashboard](https://lookerstudio.google.com/reporting/2d286904-b2af-490a-8937-fa8aa26168ef)

## Overview

The purpose of this project is to track my job applications through a dashboard, allowing me to better understand how my job search is progressing. This dashboard helps monitor key data such as:

- Number of applications submitted
- Current status of applications
- Companies applied to

My goal was to dive into the data to evaluate the responses I've been receiving and identify areas for improvement.

I used **Google Looker Studio** with its built-in connector for **Google Sheets**. Since all data was manually tracked in Google Sheets, minimal cleaning was required.

---

## Data and Dashboard Setup

### Data

I’ve been tracking:

- Company applied to
- Date of application
- Position applied for
- Application status
- Comments

![Job Applications Table](../../public/images/Job%20tracking%20dashboard/Data.png)

> 🔢 Currently tracking **40 rows of data**, automatically connected to the dashboard — no ongoing maintenance required.

### Dashboard Connection

To connect Google Sheets to Looker Studio:

1. Use the Google Sheets connector
2. Authorize Looker Studio access
3. Select the spreadsheet and worksheet
4. Keep default settings

Once connected, the data was ready for analysis.

![Job Applications Table](../../public/images/Job%20tracking%20dashboard/Data%20locker.png)

---

## Dashboard Analysis

### 1. Overview Metrics Snapshot

Key metrics display the job application journey:

![Job Applications Table](../../public/images/Job%20tracking%20dashboard/1st%20Graph.png)

- **Total Applications**: 40
- **Successful Applications**: 0
- **Applications in Last 7 Days**: 0
- **Applications Pending**: 27
- **Assessment Rounds**: 1
- **Interview Rounds**: 1
- **Rejections**: 11 (~28%)

---

### 2. Application Status Breakdown

A pie chart shows:

![Job Applications Table](../../public/images/Job%20tracking%20dashboard/2%20Graph.png)

- **Pending**: 67.5%
- **Rejected**: 27.5%
- **Assessment/Interview**: ~5%

> **Insight**: Most applications are still in limbo. Follow-up and analyze response times.

---

### 3. Application Activity Over Time

The timeline shows:

![Job Applications Table](../../public/images/Job%20tracking%20dashboard/3%20Graph.png)

- Peak activity: **June 5–15**
- No new applications in the past 7 days

> **Insight**: Consider re-engaging with job portals and recruiters.

---

### 4. Applications by Company

![Job Applications Table](../../public/images/Job%20tracking%20dashboard/4%20Graph.png)

- **Ashdown Group**: 10
- **Revolut**: 7
- **Others** (Illumina, Tesco, bet365): 1–2 each

> **Insight**: Broaden exposure by diversifying industries and company sizes.

---

### 5. Role Distribution Across Companies

![Job Applications Table](../../public/images/Job%20tracking%20dashboard/6%20Graph.png)

Ashdown Group shows multiple roles; other companies show more targeted roles.

> **Insight**: Expand role types or revisit skill-related job titles to increase opportunities.

---

## Future Updates

Planned enhancements:

1. **Automate data collection** from email/job boards
2. **Improve word cloud** clarity and relevance
3. **Add metrics** like:
   - Application-to-interview ratio
   - Time-series graph for response tracking

---

## Summary

This dashboard provides a clear overview of my job search progress, highlighting key metrics such as total applications, status breakdown, and company/role distribution. The analysis reveals that most applications are still pending, with a significant portion concentrated in a few companies and roles. Insights suggest the need to diversify applications, follow up on pending responses, and expand the range of roles targeted. Planned updates aim to automate data collection and enhance the dashboard's analytical capabilities for more effective job search tracking.

---
