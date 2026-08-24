# Clinical Emergency Response

## Helping doctors and nurses coordinate STEMI emergencies with clarity

A mobile healthcare application that helps medical teams raise, receive, verify, and coordinate STEMI alerts.

The application supports emergency situations both **within the same hospital branch** and **between different branches**, helping medical teams understand the patient, urgency, and next steps.

I worked across the experience to make emergency information, alerts, patient details, and communication easier to understand and act on.

---

## Project Snapshot

**Role**
UX/UI Designer

**Users**
Doctors, nurses & medical personnel

**Timeline**
June 2025 – October 2025

**Platform**
Mobile application

**My contribution**
UX/UI Design, Information Architecture, Workflow Design & Validation

**Status**
Implemented

*This project is under NDA. Client-identifying information has been masked or anonymized.*

---

# The Product

## One emergency can involve multiple teams

The application helps medical teams coordinate STEMI cases from the moment an emergency is identified through verification, communication, and treatment.

There were two main situations the product needed to support.

### When treatment happens at the same branch

A medical professional identifies a STEMI patient and raises an alert.

The relevant team receives the alert, verifies the information, understands the urgency, and coordinates internally before the patient proceeds for treatment.

**STEMI identified → Alert raised → Team notified → Alert verified → Internal coordination → Treatment**

### When the patient needs another branch

A patient may be identified at a branch that does not have the equipment needed for STEMI treatment.

The alert helps notify the appropriate receiving branch. The receiving team verifies the patient information, coordinates the transfer, and prepares to continue treatment when the patient arrives.

**STEMI identified → Alert raised → Receiving branch notified → Alert verified → EMS transfer → Receiving team prepares → Treatment**

This meant the application had to support both **coordination within a branch** and **coordination between branches**.

---

# The Design Challenge

## How do you make a high-pressure experience easier to understand?

During a design review, I noticed that the Alarm List was carrying a large amount of information in each card:

* Patient information
* Case ID
* Contact details
* Alarm timing
* Patient status
* Facility information
* EMS information
* Actions

The information was useful.

The problem was that too many elements were competing for attention.

Two things were particularly difficult to identify quickly:

**Who is the patient?**
**What is the patient's current status?**

For a medical professional receiving an alert, these answers need to be easy to find.

I wanted to improve the hierarchy without removing the information or functionality clinicians needed.

---

# The Design Goal

## Make the right information easier to find

I designed around a practical goal:

> **A clinician should be able to understand the alert and reach the action they need within roughly 30 seconds.**

This was a **design target, not a measured performance metric**.

So the goal wasn't simply to make the interface look cleaner.

It was to make the information and actions clinicians needed **easier to find and understand**.

---

# Design Decision 01

## Make patient identity and status easier to understand

One of my key changes was improving the visibility of the **patient name and current patient status** in the Alarm List.

In the previous design, the patient name was not prominent enough, and the patient's status was also difficult to identify at a glance.

For medical staff receiving an alert, these are important pieces of information to understand immediately:

**Who is the patient?**
**What is their current status?**
**How urgent is the situation?**

I changed the visual hierarchy so the **patient name became a stronger anchor** and the **patient status became more visible** within the card.

This wasn't just a visual adjustment. I suggested and discussed the changes with:

**Doctors · End Client · Product Manager · Manager**

The goal was to make the most important patient information easier to recognize without requiring clinicians to scan through the entire card.

---

# Design Decision 02

## Keep emergency alerts and communication separate

The application also supported communication between medical staff through groups and conversations.

I kept **Alarm List** and **Communication** as separate experiences because they serve different purposes.

### Alarm List

**What is happening?**
**Who is the patient?**
**How urgent is it?**
**What action is needed?**

### Communication

**Who do I need to coordinate with?**
**What does the team need to know?**
**What do we need to discuss?**

Both are important to emergency response, but they shouldn't compete with each other.

Separating them allowed the alert experience to stay focused while giving teams a dedicated place to communicate.

---

# Design Decision 03

## Make different levels of urgency easier to understand

The application supported **tiered alerts** because not every emergency requires the same level of attention.

I worked on how these different levels of urgency were represented so medical personnel could understand the priority of an alert more easily.

The goal was to communicate urgency clearly **without adding unnecessary complexity**.

---

# Designing the Experience

## From the original design to the final direction

The redesign went through multiple iterations.

### Original

The original Alarm List placed a large amount of information into each card.

The information was useful, but too much of it competed for attention.

The patient name and status were also not prominent enough.

### First iteration

I explored a more compact direction with a clearer status and information hierarchy.

This reduced the visual load, but I realized that I was simplifying too aggressively.

Important information and workflow context still needed to remain accessible.

### Final direction

The final direction kept the information and actions clinicians needed while giving greater prominence to what they needed first.

The patient name became easier to identify.

The patient status became more visible.

The overall information hierarchy became easier to scan.

The balance became:

**Clear information + accessible actions + lower cognitive load**

---

# Organizing the Experience

The application supported several actions around an emergency case.

I organized these so that different tasks had clearer entry points, including:

**Details · Chat · Members · EMS · Updates**

This helped create a clearer distinction between:

**Responding to an emergency**

and

**Communicating about the emergency**

The intention was not to remove functionality.

It was to make the different tasks easier to understand and access.

---

# Working With Familiar Patterns

This was a high-stakes healthcare environment, so I didn't want to introduce new interaction patterns simply for the sake of being different.

I looked at familiar patterns used in US healthcare products, including patterns influenced by established systems such as Epic.

The existing application did not consistently follow those familiar patterns.

Instead of making clinicians learn a completely new way of working, I used familiar patterns as a reference and adapted the experience around the needs of the product.

---

# Working Within Real Constraints

This was not a greenfield project.

I worked within:

* Existing product architecture
* Ionic framework constraints
* Existing navigation and workflows
* Client requirements
* Technical limitations
* Limited project time
* Established healthcare interaction patterns

These constraints meant I had to improve the experience within the existing product rather than assume the entire application could be redesigned from scratch.

---

# Validation

## Testing with doctors and nurses

I tested the redesigned experience with **3–4 doctors and nurses**.

The purpose was to check whether the new structure made sense to the people who would actually use the application and whether the information and actions they needed were still accessible.

The end client was satisfied with the result and reported **no performance or usage issues**.

The redesigned experience was subsequently **implemented in the product**.

---

# Outcome

The redesigned experience made the emergency information easier to scan while keeping the information and actions medical teams needed.

**3–4**
Doctors and nurses tested the redesign

**Satisfied**
End client feedback

**Implemented**
Redesigned experience shipped in the product

The **30-second figure was a design target**, not a post-launch performance metric.

---

# Closing

The goal was not to reinvent how medical teams respond to emergencies.

It was to make the information they needed **clearer, easier to identify, and easier to act on**.
