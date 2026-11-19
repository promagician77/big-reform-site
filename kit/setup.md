# Setting up the booking desk in HubSpot

1. **Properties.** Create the group "Big Reform booking" and the properties in properties.json (Settings → Properties, or the CRM properties API).
   "Buying unit ID" must have unique values switched on.
2. **Company auto-association.** Several units share one web domain (all TDCJ units use tdcj.texas.gov).
   I'd switch off automatic company creation and association from contact email domains, and link each contact to its unit by Buying unit ID.
3. **Import companies.csv.** In the import, choose **Buying unit ID** as the unique identifier, not Company domain name.
   With the domain as the key, rows that repeat a domain fail as DUPLICATE_ALTERNATE_ID.
4. **Pipelines.** On Starter or above, create the two pipelines in pipelines.json. On Free there are no custom pipelines:
   use the default pipeline and the "Deal kind" property to tell speaking engagements from contracts.
5. **Follow-ups.** Sales Hub Professional: build one sequence from cadence.csv. Free or Starter: create the same steps as tasks with due dates.
   Stop on: Reply received; Meeting booked; Deal created; Unsubscribed or bounced; Next touch owner set to paused.
6. **Gmail.** Connect the inbox to HubSpot and install the HubSpot extension for Gmail so sent mail and replies are logged on the contact.
7. **Claude.** Connect the HubSpot connector in Claude (it needs a paid Claude plan) and use claude_prompts.md.
8. **Marblism.** Anything Marblism finds goes into contacts_template.csv or a new companies row with a Buying unit ID, then into HubSpot by import.
   Marblism drafts replies; HubSpot owns the next follow-up.
