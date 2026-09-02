# Retail Manager Intelligence OS

### From operational data to operational decisions

**My role:** Product Designer — Product Strategy, UX/UI & Brand  
**Client:** SRD Soft Tech  
**Industry:** B2B SaaS · Retail Technology  
**Timeline:** 2026  
**Status:** Concept validation · Product in progress  

---

## The Context

Retail Manager is a desktop-based retail management system that supports day-to-day operations such as billing, inventory, purchasing, deliveries and multi-store stock management.

The system already captures the operational data needed to run these activities. The problem I identified was not a lack of data, but the effort required to find what matters in that data and decide what to do next.

For example, if tomatoes are selling quickly at one store while excess stock is sitting at another, the information may already exist across the system. Someone still needs to notice the situation, connect the two conditions and decide whether to transfer the stock, discount it or take another action.

That led me to a simple question:

> **What if Retail Manager could bring important information forward and help users decide what deserves attention?**

This became the starting point for Retail Manager Intelligence OS.

---

## Finding the opportunity

I first studied how Retail Manager worked across its existing operational workflows.

I then looked at retail ERP products, competitor approaches, industry trends and available public information to understand how other systems handled operational reporting and decision-making.

The research pointed toward an opportunity: retail systems are already good at recording and reporting data, but users still have to interpret that data themselves.

Instead of creating another reporting dashboard, I explored an intelligence layer that could identify meaningful conditions in existing operational data and present them in a way that supports action.

The initial product model became:

**Existing data → Important signal → Explanation → Recommendation → Decision**

*This was a product hypothesis, not a claim that the problem had already been validated with end users.

---

## Turning the opportunity into a product

The broader idea of an intelligence layer was already part of the client's future product direction.

My contribution was turning that direction into a concrete product concept and experience.

I started by creating a product pitch for the founder rather than immediately designing screens. The pitch explained how an Intelligence OS could sit alongside Retail Manager and use its existing operational data to surface useful signals and recommendations.

The founder's response was specific: he felt the concept could benefit some of his customers, but not the entire customer base.

That gave the direction stakeholder validation and helped move the project forward. It was not treated as end-user validation; user testing is part of the next stage.

---

## Designing the Intelligence OS

### Make the important information visible first

The first design decision was to avoid turning Intelligence OS into another analytics dashboard.

The experience starts with:

> **What needs my attention right now?**

Instead of requiring the manager to search through reports, the system surfaces conditions that may require attention:
- Perishable stock at risk
- Low or excess inventory
- Stock differences between locations
- Delivery discrepancies
- Supplier patterns
- Stock requests

The interface then provides context around the condition and a possible next action.

### Recommend, don't decide

The system can identify a situation, but it cannot know every piece of business context behind the decision.

If one store has excess tomatoes and another has high demand, for example, the system can recommend considering a transfer.

But the manager may instead decide to discount the stock, purchase elsewhere, investigate the demand or do nothing.

So I designed the interaction around:

**System recommends → Person decides**

The client's longer-term strategy includes moving toward more controlled automation. For this stage, my design response was to keep operational decisions with the person rather than automate them prematurely.

### Read existing data before changing the existing system

Retail Manager is already responsible for core business operations.

I therefore designed the initial Intelligence OS as a read-only layer.

It reads the existing operational data without writing back to the legacy system:

**Retail Manager → Intelligence OS → Recommendation → Human decision**

This creates a way to test the intelligence capability without making the existing operational system dependent on an unproven layer. Deeper integration can come later once the concept has been validated.

### Don't make users ask the AI

I also chose not to make conversational AI the primary interface.

A manager shouldn't have to think about what question to type before receiving useful information.

Instead, the product proactively surfaces relevant conditions.

The principle was simple:

> **The system should surface what deserves attention instead of making the user search for it.**

---

## Designing around operational roles

The same information is not equally useful to everyone using the system.

### Owner
> **“What needs my attention today?”**  
The overview therefore focuses on important operational conditions and recommended actions.

### Warehouse
> **“What arrived, what is missing, and what needs to move?”**  
The experience focuses on receiving, deliveries and stock movement.

### Store
> **“What's running low and what do I need to request?”**  
The experience focuses on stock availability and requests.

This led to a role-based experience rather than one large intelligence dashboard.

---

## The core workflows

I translated the product direction into four initial workflows:

- **Today's Overview**: Brings important operational conditions together so a manager can quickly see what needs attention.
- **Stock View**: Helps users understand inventory conditions across locations, including stock levels, consumption and days of cover.
- **Delivery Received**: Makes it easier to compare ordered quantities with what was actually received and identify discrepancies.
- **Stock Request**: Connects a store's stock situation with the request process while keeping the decision with the user.

These workflows were chosen as the initial product surface rather than attempting to cover every possible retail operation at once.

---

## From concept to working application

The concept has now been translated into a working application rather than remaining only as a pitch or set of static screens.

My work has expanded across:

**Product strategy → UX/UI → Application design → Frontend/backend implementation**

The application demonstrates how the intelligence layer can connect operational data with recommendations and actions.

For example:
- **Excess stock** → Identify another store with demand → Recommend transfer → User decides
- **Ordered quantity** → Received quantity → Detect discrepancy → Surface issue → Follow-up action

The goal is to make the intelligence useful within the workflow, rather than separating it into another reporting product.

---

## Expected impact

The product is being designed against measurable improvement targets:

- **~50% reduction** in manual operational monitoring work
- **40–60% faster** identification of important inventory issues
- **Better use** of existing inventory across stores
- **Reduced avoidable loss** of perishable stock
- **Fewer situations** where one store has excess inventory while another faces a shortage
- **Recovery of value** that could otherwise be lost through spoilage or unavailable stock

For example, if tomatoes are sitting unsold at Store C while Store A is experiencing higher demand, transferring the stock can reduce the need to purchase new inventory and reduce the risk of spoilage.

If selling the remaining stock at a discount is appropriate, recovering some value can still be better than allowing the inventory to expire.

*These targets define what the product is expected to improve. They are not measured outcomes yet.

---

## What happens next

The next phase is about turning the product hypothesis into evidence:

1. **Implement with real data**: Connect Intelligence OS with Retail Manager's operational data and test it with realistic data volumes.
2. **Validate with users**: Test the product with relevant users to understand whether the recommendations are clear, useful and actionable.
3. **Measure the targets**: Evaluate whether the product actually reduces manual effort, improves issue identification and helps users make better inventory decisions.
4. **Iterate**: Use the findings to improve the recommendations, workflows and product experience before broader implementation.

---

## The longer-term opportunity

The immediate goal is to prove Intelligence OS within Retail Manager.

The longer-term strategy is to make the intelligence layer useful across the client's product ecosystem and eventually explore it as a capability that can work with other legacy business systems.

The potential progression is:

**Retail Manager** (Retail operations)  
↓  
**RMServe** (Restaurant operations)  
↓  
**RM Intelligence OS** (Shared intelligence layer)  
↓  
**Intelligence capability for other legacy systems**  

Instead of asking businesses to replace the software already running their operations, the longer-term opportunity is to provide an intelligence layer that can sit on top of existing systems.

But that comes after proving the core concept first.

---

## The question I'm testing

Retail Manager already knows a lot about what is happening inside a business.

The opportunity is to make that information easier to understand and act on.

> **“If the system already has the data, can it help the people running the business see what matters and decide what to do next?”**

That is what Retail Manager Intelligence OS is being built to test.
