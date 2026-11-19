# Prompts for Claude with the HubSpot connector

The HubSpot connector lets Claude read and update the CRM. Claude shows each change for approval before it saves.
Each prompt below names the record so Claude works from HubSpot data, not from memory.

## First email
> Open the company with Buying unit ID **[id]** and its contact **[name]**. Draft a first email from Keidrain Brewster, under 120 words.
> Use the unit's audience and type. Offer a 30, 60 or 90 minute session. Ask one question about their program calendar.
> Do not state facts about the unit that are not in the record; write [brackets] where something is missing.

## Today's follow-ups
> List contacts whose Next touch owner is HubSpot, who have no reply since our last email, and whose next cadence step is due today.
> Group them by parent agency. For each, draft the step's email or call note. Don't send anything.

## After a call
> On the deal for **[unit]**, log this call note: [paste]. Move the deal to **[stage]** and create a task for **[date]**. Show me the changes before saving.

## Weekly pipeline check
> For both pipelines, list deals with an event date in the next 60 days that are not yet at "Booked: contract and deposit", and deals with no activity in 14 days.
