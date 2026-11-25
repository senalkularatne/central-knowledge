# Writing Guide

Rules for every note in Finance, for humans and AI assistants alike. When a rule from this guide is quoted in a request, apply it literally.

## Writing Content

- Assume the reader is a complete novice with no prior knowledge of the topic.
- Be explicit: name exactly what you mean. Example: write "Read 1. Basic Economic Concepts first, because the other Economics notes use its terms," not "To start from the beginning and then move forward:".
- Every sentence must make sense to a reader who has read only the earlier notes. Never refer to "the beginning", "this branch", "the shared concepts" or similar without naming what is meant.
- Write one idea per sentence. Do not shorten a sentence if the meaning becomes unclear, and do not join two definitions with a semicolon.
- Say what something is. Say what it is not only when people commonly confuse the two, and name the confusion. Do not warn against a mistake the reader had no reason to make, such as "They describe an expectation, not proof of what will happen."
- When a term's name does not explain itself, say where the name comes from if a reliable source documents it, and say when the origin is uncertain. Example: bull and bear in Market Mechanics.
- Give a concrete example for every abstract statement. Example: Short Sales in Market Mechanics follows a share sold at \$60 and bought back at \$40 for a \$20 profit.
- Use legal names: the term defined in statute, regulation, or on the official form, not the informal phrase.
  - Example: "Ordinary Income" is the legal term for the income itself, while "ordinary income tax" is the informal phrase people use for the tax applied to it.
- Never mix up a tax with what it is applied to.
  - Example: Income Tax is the tax. Taxable Income is what it applies to. Ordinary Income and Capital Gain are classifications of income, not taxes.
- Complete sets: a list that claims to cover a whole set (all federal taxes, all sectors, all asset classes) must contain every member, taken from an authoritative source (e.g., the Internal Revenue Code, which is the U.S. federal tax law, or GICS, the Global Industry Classification Standard, which sorts companies into sectors). Never assume the items already in the folder are the full set. A deliberately partial list is labeled "Major" or "Examples" and names what it leaves out.
- Numbers and claims: every rate, limit, percentage, or statistic states the year it applies to and its scope (e.g., federal only, or federal plus state and local), with the source under References. A ranking also states its metric (e.g., revenue collected). Cite law by section only after checking the section. Mark anything unchecked as [unverified] instead of stating it as fact.
- Avoid em dashes (—) because they sound like AI writing. Use a period, a comma, or a normal dash (-) instead. Also avoid filler phrases such as "It is worth noting that", and closing sentences that only repeat what the section already said.
- In markdown all dollars need to be escaped with a backslash (e.g., \$100), otherwise they are treated as a math formula and do not render properly.

## Organizing Files & Folders

Two questions decide where a note goes. Placement is which folder it lives in, and it follows the taxonomy: the classification of topics into parents and children. Order is what number it gets, and it follows prerequisites: what a reader must already know. If the two conflict, the taxonomy decides the folder and prerequisites decide the number.

### Placement (Taxonomy)

Follow a strict conceptual taxonomy. Organize both folders and in-file headings by true parent-child-sibling relationships rather than loose associations. Example: Short Sales is in Market Mechanics because a short sale is a way of trading. It is not under Stocks just because stocks are often sold short, since ETF shares and bonds can be sold short too.

- Parent = broad umbrella category (e.g., Income Tax). Child = a narrower part of its parent. Siblings = peers under the same parent.
- Child test: "<Child> is a type of <Parent>" or "<Child> is a part of <Parent>" must read as true. If neither does, the note is in the wrong place.
- Sibling test: siblings are sorted by the same single criterion, sit at the same level of detail, and do not overlap.
- One criterion per level. Types of Tax is sorted by what is taxed, so it cannot also hold a tax form or an account.
- Different kinds of thing get different folders. A tax, the income it applies to, the form that reports it, the account that shelters it, and the strategy that lowers it are five different kinds.
- Time is not a category. No History, News, or Recent folders. The history of a topic goes inside that topic. Anything with an as-of date (prices, forecasts, theses, current events) goes in `13. Investment Research`. Definitions and mechanics that do not go stale go in the concept folders.
- One home per concept. Write the note once and link to it from everywhere else. Never keep two notes on the same concept.
- A folder holds at least two children. A folder with one child is a file. A child that is planned but not yet written counts if the Todo of the nearest `0.` overview lists it.
- The top level holds only `0. Finance.md` and section folders, never loose notes. A topic too small for its own folder goes inside the section it is part of.
- Unsorted notes live in `Notebook Support/Organize/` until they are placed. `0. Finance.md` holds the map of the top-level folders.

### Order (Prerequisites)

Numbers set the reading order. Reading in numeric order, finishing each folder and its subfolders before the next numbered folder (all of 1. Economics before 2. Money and Banking), no note may use a term that an earlier note, or the note itself, has not explained.

- Renumber siblings to fix the order. Never move a note out of its correct parent to fix the order.
- This applies at every level, including top-level folders: foundations come before the topics that apply them.
- Number all siblings or none. Siblings with no prerequisite relationship stay unnumbered. The `0.` overview does not count as a sibling. Keep numbers gap-free and renumber when a planned sibling is written.
- `0. <Folder Name>.md` is the overview of its folder and is read first. It states what the umbrella is and how its children relate. Children not yet written are listed under Todo in `###### Comments`.
- The first use of a term defined in another note links to that note instead of re-explaining it. A note never relies on a later-numbered note to be understood. A link to a later-numbered note is allowed only under `###### Resources` or as a brief pointer inside a sentence, and an overview may link down to its children. If two notes need each other, move the shared concept into its own earlier note.

### Naming

- File names are Title Case and use the official or standard name (e.g., `Income Tax.md`, `W-2.md`, `1099-DIV.md`).
- A note's title (its first line, starting with `# `) matches the file name without the number prefix and the `.md` extension.
  - File Name: 1. Federal Income Tax Brackets
  - Title: Federal Income Tax Brackets
- Folder names never end in `.md` or any other file extension.
- Names never encode rank or importance. State a ranking in the content.

### Note Template

Every note uses this structure. This guide is exempt.

```markdown
# <Title>

- body

---

###### References

###### Resources

- [ ]

###### Comments

- Complete: No
- Last Updated: MM/DD/YYYY, Weekday
- Todo:
```

- The body holds only material for studying. Plans, missing topics and remarks about where things are placed go under Todo in `###### Comments`.
- Links kept for later reading go under `###### Resources` as `- [ ]` items, never in a body section such as Optional Further Reading or Related Topics.
- Never leave a note as an empty file. An unwritten note still contains the title and the template so it can be found by searching for `Complete: No`.

## Rules for AI Assistants

- Never change a note's wording or structure without first showing the exact before and after and getting approval.
- Before asking the user to choose, explain every term in the question in plain words and show what each option looks like.
- Do exactly what was asked, in the format asked. If asked for one ranked list of everything, give one list. Not several lists, not one list per category. Re-read the request before answering.
- If a request is repeated or rephrased, the previous answer failed. Do not restate it and do not defend it. Say in one sentence what was misread, then give the corrected answer.
- When the user shows a partial list, treat it as partial. The missing members are what the user wants to learn about. See Complete sets above.
- Never use file order, alphabetical order, or listing order as evidence of rank or importance.
- Stay consistent. Give one recommendation and base it on the rules in this guide. Do not change position between answers unless you name the rule or fact that changed.
- Do not end with a menu of offers or follow-up questions. Ask a question only when the missing answer blocks the task, and ask it once, before doing the work. Otherwise do the work.
- Do not state figures or citations from memory as fact. See Numbers and claims above.