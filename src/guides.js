// Long-form guides. Each section: { h: heading, p: [paragraphs] }.
// Worked examples use made-up numbers. Tipping norms are general guidance and vary by place.

export const guides = [
  {
    slug: 'split-tip-evenly-or-proportionally',
    title: 'Should you split the tip evenly or in proportion?',
    description: 'The two ways to divide a restaurant tip, a worked example with real numbers, and how to decide which one your group should use.',
    intro: `The tip is the part of a shared bill that causes the most quiet resentment. Two people can agree on every item and still disagree about whether the tip should be shared equally or by how much each person ordered. Here is how both methods work, when each one is fair, and how to settle it fast.`,
    sections: [
      { h: `The two methods`, p: [
        `An even tip split adds up the whole tip and divides it by the number of people. A proportional tip split gives each person a share of the tip that matches their share of the food: if you ordered 40 percent of what was on the table, you cover 40 percent of the tip.`,
        `Proportional is the default most people expect, because tip is normally a percentage of the bill. If everyone tips 20 percent of their own meal, the group total is the same as a proportional split. An even split quietly means the big orderers pay less tip than they would on their own, and the light orderers pay more.`,
      ]},
      { h: `A worked example`, p: [
        `Four friends share a check. Ana ordered 60 dollars of food and drinks, Ben 40, Cara 25 and Dev 15, so the subtotal is 140. The group agrees on a 20 percent tip, which is 28 dollars.`,
        `Split evenly, each person adds 7 dollars of tip. Dev, who ordered a salad and water, pays 7 on a 15 dollar meal, which is 47 percent. Ana pays 7 on 60, which is about 12 percent.`,
        `Split proportionally, the tip follows the food. Ana pays 12, Ben pays 8, Cara pays 5 and Dev pays 3. Everyone effectively tipped 20 percent of their own order. This is the result most people call fair, and it is what EasyBillSplitting does unless you switch it.`,
      ]},
      { h: `When an even split is the better choice`, p: [
        `There are good reasons to split the tip evenly. When orders are close in size, the two methods give almost the same answer, so the simpler one wins. When the group is celebrating someone, or the table has agreed to take turns paying, an even split avoids bookkeeping. And when service was shared by everyone, for example one large pitcher and one set of plates, the work the server did does not scale with each person's order.`,
        `An even split is also kinder to anyone who stuck to water because of budget or health. They already paid less for the food, and the server did the same work for them.`,
      ]},
      { h: `How to decide quickly`, p: [
        `Ask before the check arrives, not after. A simple line works: "Should we split the tip evenly or by what we ordered?" If the gap between the biggest and smallest order is less than about 30 percent, go even. If it is larger, go proportional.`,
        `Whichever you choose, agree on the tip percentage first. Disagreements about the rate are about values, and disagreements about the split are about arithmetic. Keep them separate and both get easier.`,
      ]},
      { h: `Tip on the pre-tax amount or the total?`, p: [
        `Many people calculate the tip on the pre-tax subtotal, since the tax goes to the government and not the server. Others tip on the final total because it is faster. The difference is small, roughly one to two percentage points of the tip, so it is fine either way as long as the group is consistent. In EasyBillSplitting you type in the tip amount, so you can calculate it whichever way you prefer.`,
      ]},
    ],
  },
  {
    slug: 'splitting-a-bill-with-roommates',
    title: 'Splitting bills with roommates without the arguments',
    description: 'How roommates can divide rent, utilities, internet and groceries fairly, with rules that prevent resentment before it starts.',
    intro: `Shared meals are a one-time split. Shared housing is a split that repeats every month, which means small unfairness compounds. A few clear rules set up at the start prevent most roommate money arguments.`,
    sections: [
      { h: `Split rent by room, not by head`, p: [
        `If one bedroom is larger, has its own bathroom or gets more light, an equal rent split is not equal in value. A common fair method is to weight rent by room: add up the total rent, assign each room a points value based on size and features, and divide in proportion. A room worth 40 percent of the total value pays 40 percent of the rent.`,
        `Be honest about trade-offs. The room next to the street, the one with the shared closet, or the one that people walk through to reach the kitchen should earn a discount.`,
      ]},
      { h: `Utilities and internet`, p: [
        `Electricity, gas, water and internet are normally split evenly among everyone living there, because the household shares them. Exceptions are fair when one person works from home with a second monitor and heater running all day, or when someone is away for most of the month. Agree on the exception in advance, not in the middle of a heated month.`,
        `Put the bills in one person's name only if the others reimburse them on a fixed date. The person whose name is on the account carries the risk of a late payment, so it helps to rotate that role every year.`,
      ]},
      { h: `Groceries and shared supplies`, p: [
        `There are three workable systems. The first is fully separate: everyone buys and labels their own food. The second is a shared pool for staples such as milk, oil, cleaning supplies and toilet paper, with everyone contributing the same amount monthly. The third is itemized: whoever shops keeps the receipt and the group splits it by item.`,
        `For the itemized approach, scan or enter the receipt, assign each item to the people who use it, and divide the shared things evenly. That is exactly the split by item mode here, and it works well for a monthly grocery run when one person did the shopping.`,
      ]},
      { h: `Make paying back easy`, p: [
        `Set a day each month when everyone settles up, such as the first. Use the same payment method every time, and send a plain message with the amount and what it covers. Most conflicts do not come from the amount. They come from not knowing when it is due.`,
        `Keep a shared note listing who paid what and when. If a roommate is short one month, agree a repayment date in writing. It is awkward for a minute and saves months of tension.`,
      ]},
      { h: `When someone moves out`, p: [
        `Decide in advance how the lease, the deposit and any shared purchases are handled. Shared items bought together, such as a couch or a router, should be listed at the start with who owns what, so nobody has to argue about it on the way out.`,
      ]},
    ],
  },
  {
    slug: 'tipping-guide-by-country',
    title: 'Tipping around the world: a practical guide',
    description: 'What is customary for restaurant tipping in the United States, Canada, the UK, Europe, Japan, Australia and more, and why it varies.',
    intro: `Tipping norms are one of the biggest differences travelers meet at the table. In some countries a 20 percent tip is expected, in others it can be a mild insult. This guide covers general customs. Always check the bill first, because many places add a service charge automatically.`,
    sections: [
      { h: `United States and Canada`, p: [
        `At a sit-down restaurant, 18 to 20 percent of the pre-tax bill is standard, with more for exceptional service. Servers rely on tips as a major part of their pay, so tipping well below 15 percent is noticed. For counter service, bars and delivery the norms are looser: a dollar or two per drink at a bar, 10 to 15 percent for delivery.`,
        `Large groups often have an automatic gratuity of 18 percent or more added to the bill. Check for it before adding another tip.`,
      ]},
      { h: `United Kingdom and Ireland`, p: [
        `A discretionary service charge of 10 to 12.5 percent is common and is often added to the bill, especially for groups. If it is already included, you do not need to add more. If it is not, 10 percent for good service is usual. Tipping at pubs where you order at the bar is not expected.`,
      ]},
      { h: `France, Italy, Spain and Germany`, p: [
        `In France, service is included by law in the price of the menu, and leaving a few extra euros is a gesture of thanks, not an obligation. In Italy, a cover charge called coperto is often listed separately, and small extra tips are welcome but modest. In Spain, rounding up or leaving a few euros is typical. In Germany, rounding up the bill by 5 to 10 percent is customary, and you usually tell the server the total you want to pay when handing over the money.`,
      ]},
      { h: `Japan, South Korea and China`, p: [
        `Tipping is not part of the culture in Japan and tipping can cause confusion or be politely returned to you. The same is broadly true in South Korea and mainland China, where service is built into the price. Some upscale hotels and tourist restaurants add a service charge instead.`,
      ]},
      { h: `Australia and New Zealand`, p: [
        `Wages are higher and tipping is not expected. Leaving about 10 percent for a great meal at a nicer restaurant is appreciated but never assumed.`,
      ]},
      { h: `Latin America and the Caribbean`, p: [
        `Customs vary. In Mexico, 10 to 15 percent is typical. In many other countries a service charge of 10 percent is added to the bill automatically, so check before tipping again. Tipping in cash is often preferred because card tips may not reach the server.`,
      ]},
      { h: `A simple rule for travelers`, p: [
        `Look at the bill for a line labelled service, servicio, couvert, coperto or similar. If it is there, you are mostly done. If not, ask a local or check a recent guide for that country. When in doubt, a small round-up shows appreciation without causing offense. Enter whichever tip you decide on in the tip box when you split by item, and the split will take care of the math for everyone at the table.`,
      ]},
    ],
  },
  {
    slug: 'shared-appetizers-and-drinks',
    title: 'How to fairly split shared appetizers, wine and drinks',
    description: 'Practical rules for shared plates, bottles of wine, rounds of drinks and the person who skipped alcohol.',
    intro: `Shared items are where itemized splits get tricky. Who pays for the bottle of wine when two people drank it? What about the dessert everybody tasted? These rules keep it simple and fair.`,
    sections: [
      { h: `Shared plates: divide by people who ate`, p: [
        `The cleanest rule is to divide a shared plate equally among everyone who ate some of it. A 24 dollar appetizer eaten by four people costs 6 each. If one person only had a bite, it is reasonable to leave them out and divide it among three, but be consistent across the whole meal.`,
        `Do not assign a shared plate to whoever happened to order it. They would end up paying for other people's food, and the same person often ends up ordering shared plates every time.`,
      ]},
      { h: `Wine and bottles`, p: [
        `A bottle shared by two people is split between those two. A bottle poured for the whole table is divided among everyone who drank it. The person who did not drink should not be asked to pay for wine they did not have, even if it is awkward to bring up.`,
        `If the group likes a bottle of wine at every dinner, agree that wine is always split among the drinkers. It prevents repeating the discussion at every outing.`,
      ]},
      { h: `Rounds of drinks`, p: [
        `Rounds can be messy because of cost differences. A fair option is to track each person's own drinks as items and share a round of drinks only when it was bought for the whole table. If people take turns buying rounds, make sure the number of rounds and the cost per round are roughly the same, or settle the difference at the end.`,
      ]},
      { h: `The person who ordered less`, p: [
        `If one person had a salad and water while others had steak and cocktails, an even split is unfair to them. Splitting by item solves this without making them argue for it. Everyone pays for their own food, shares the common plates equally, and the tax and tip follow in proportion.`,
      ]},
      { h: `How it works in EasyBillSplitting`, p: [
        `In the split by item mode, add every item, add the people, and drag an item onto each person who shared it. When an item is assigned to more than one person, its price is divided equally between them. Tax, tip and any discounts are then spread in proportion, so the result matches how much each person actually ordered.`,
      ]},
    ],
  },
  {
    slug: 'discounts-coupons-and-bills',
    title: 'How to split a bill when there is a discount or coupon',
    description: 'Percent-off coupons, fixed-amount vouchers, buy-one-get-one deals and loyalty rewards: who gets the savings and how to divide them.',
    intro: `A coupon on a shared bill raises a surprisingly common question: who gets the savings? The fair answer depends on what the discount applies to. Here are the cases you will meet most often.`,
    sections: [
      { h: `Percent off the whole bill`, p: [
        `If a coupon takes 15 percent off the entire check, everyone should get 15 percent off their own share. This is the easiest case. Apply the percentage to each person's subtotal, then add their share of tax and tip.`,
        `Be careful about whether the discount is applied before or after tax. Most restaurants apply it before tax, so the tax is calculated on the lower amount, which saves slightly more.`,
      ]},
      { h: `A fixed dollar voucher`, p: [
        `A 20 dollar voucher on a 120 dollar bill is a flat saving. The fair way to divide it is in proportion to what each person ordered: the person who ordered one sixth of the bill gets one sixth of the voucher, which is 3.33 dollars. Splitting a fixed voucher evenly is simpler, and fine when orders are similar.`,
      ]},
      { h: `Discounts on a single item`, p: [
        `Sometimes a deal applies to only one dish, such as a happy hour price or a free dessert for a birthday. The savings should go to the people who share that item. If the birthday dessert is free and four people ate it, the saving is divided among the four, which in practice means nobody pays for it.`,
      ]},
      { h: `Buy one, get one free`, p: [
        `A buy one get one free deal on two meals ordered by different people is easiest to treat as a 50 percent discount on both. That is fair when the two items cost the same. If they cost different amounts, the free item is normally the cheaper one, so the saving belongs to the pair and can be divided between the two people in proportion.`,
      ]},
      { h: `Loyalty points and the person whose account it is`, p: [
        `If one person pays with a card that earns points and everyone else reimburses them, the points belong to that person. It is a friendly gesture to take turns using your card. A discount from a specific member account, such as a student or employee rate, can reasonably go to the account holder alone, but it is polite to agree on it before the bill arrives.`,
      ]},
      { h: `Entering discounts here`, p: [
        `EasyBillSplitting lets you add percent or fixed discounts, either to the whole order or to a single item. The totals shown at the end already include them, and the app shows how much each group saved.`,
      ]},
    ],
  },
  {
    slug: 'splitting-group-trip-expenses',
    title: 'How to split expenses on a group trip',
    description: 'A clear system for travel costs: lodging, groceries, shared transport and who paid what, so the group settles up once at the end.',
    intro: `Group trips create dozens of small costs paid by different people. Without a system, someone ends up quietly covering far more than their share. This approach keeps it simple and keeps friendships intact.`,
    sections: [
      { h: `Agree on the rules before you go`, p: [
        `Decide in advance which costs are shared and which are personal. Typically lodging, groceries, rental car, gas, parking and shared activities are shared. Individual meals out, souvenirs and personal activities are not. Writing this down in the group chat takes five minutes and avoids most arguments.`,
      ]},
      { h: `One tracker, everyone logs`, p: [
        `Keep one shared note or spreadsheet. Each time someone pays for a shared cost, they add a line with the date, what it was and the amount. Take a photo of any receipt. By the end of the trip you have an accurate list without anyone reconstructing it from memory.`,
      ]},
      { h: `Lodging: equal or weighted`, p: [
        `If everyone gets a similar room, split lodging equally. If one couple gets the master suite and others share a pull-out sofa, weight it. A simple method is to give each bed a rating and split in proportion. People are rarely upset about paying more for a better room as long as they chose it.`,
      ]},
      { h: `Groceries and group meals`, p: [
        `Buying groceries for a shared house is much cheaper than eating out. Have one person shop, keep the receipt, and split it evenly among everyone who ate. For a single dinner out, use the split by item mode when orders differ, and an even split when they were similar.`,
      ]},
      { h: `Settle up once, with the fewest payments`, p: [
        `At the end, add up what each person paid and what each person owes. Those who paid more than their share are owed money, those who paid less owe money. Match the largest debts to the largest credits so that the number of payments is as small as possible. For a group of six, this usually takes three or four payments, not fifteen.`,
        `Settle within a week of getting home while the trip is fresh. Waiting a month makes small amounts feel like favors and large ones feel awkward to ask for.`,
      ]},
      { h: `Currency and exchange rates`, p: [
        `If you cross borders, record costs in the currency they were paid in and agree on one exchange rate to convert them at the end, such as the day you return. EasyBillSplitting supports changing the currency symbol, so each dinner can be calculated in the local currency.`,
      ]},
    ],
  },
  {
    slug: 'how-restaurant-tax-works',
    title: 'How restaurant tax works and how to divide it fairly',
    description: 'What sales tax on a restaurant bill is calculated on, why it differs by place, and how to share it when everyone ordered something different.',
    intro: `Tax is the line on the check nobody thinks about until it has to be divided. Understanding what it is calculated on makes it easy to split without anyone overpaying.`,
    sections: [
      { h: `What the tax is applied to`, p: [
        `In most places, sales tax on a meal is a percentage of the food and drink subtotal. Rates vary widely by city, state and country. In some regions, tax is already included in the menu price, which is common in much of Europe and in Japan, and in others it is added at the end, as in most of the United States.`,
        `Some places also tax alcohol at a higher rate, or add a separate charge for takeout containers or local levies. If the bill shows more than one tax line, add them together and use the total.`,
      ]},
      { h: `Why tax should follow what you ordered`, p: [
        `Because tax is a percentage of the subtotal, each person's share of tax is naturally proportional to what they ordered. If your food is 25 percent of the subtotal, you are responsible for 25 percent of the tax. An even split of tax shifts cost onto people who ordered less and away from people who ordered more.`,
      ]},
      { h: `A quick example`, p: [
        `A table of three has a subtotal of 100 dollars with 8 percent tax, which is 8 dollars. One person ordered 50 dollars of it, another 30 and the third 20. Their tax shares are 4, 2.40 and 1.60. If tax were divided evenly, each would pay 2.67, so the first person would underpay by 1.33 and the third would overpay by 1.07.`,
        `The amounts are small on one dinner, but over a year of group meals they add up, and they are the kind of thing people notice.`,
      ]},
      { h: `Discounts and tax`, p: [
        `When a discount is applied before tax, the tax is calculated on the reduced amount, so the saving is a bit larger than the discount itself. When it is applied after tax, the tax is unchanged. Check which one your restaurant uses and enter the final amounts from the bill.`,
      ]},
      { h: `Entering tax here`, p: [
        `In split by item mode, type the tax from the receipt in the tax and tip step. EasyBillSplitting divides it across people in proportion to their subtotals, so the result always adds up to the exact amount on the check.`,
      ]},
    ],
  },
  {
    slug: 'awkward-bill-splitting-situations',
    title: 'Awkward bill-splitting situations and what to say',
    description: 'Polite scripts for the moments when the check arrives and the split is not obvious: unequal orders, someone short on cash, and the friend who always pays late.',
    intro: `Bill splitting is a small money task wrapped in social pressure. A few calm sentences, said early, keep it friendly. Here are the situations that come up most and a simple way to handle each.`,
    sections: [
      { h: `When one person ordered much less`, p: [
        `Say it before the check arrives: "Should we split by what we ordered?" Raising it as a general suggestion, not as a personal request, makes it easy for everyone to agree. If you are the one who ordered less, you can also say, "I only had a salad, so I will cover mine plus a share of tip."`,
      ]},
      { h: `When someone does not drink`, p: [
        `Do not make them argue for it. The group can simply decide that alcohol is paid for by the people who drank it. If you are hosting, mention at the start that drinks will be split separately. It is a courtesy that people remember.`,
      ]},
      { h: `When someone is short on money`, p: [
        `Offer to cover it and let them pay you back, quietly and without commentary. Nobody needs to know. If it keeps happening, suggest cheaper places or splitting before ordering, such as agreeing on a rough budget per person.`,
      ]},
      { h: `The friend who always pays later`, p: [
        `Send a short, friendly request with the exact amount and your preferred payment method the same day. If it is a recurring pattern, reply to your own message after a week with a simple reminder. Putting the number in writing makes it neutral, not personal.`,
      ]},
      { h: `When the bill does not add up`, p: [
        `Check the totals before splitting. Duplicate items, missing discounts and an automatic gratuity already added are the usual causes. Ask the server to correct it before anyone pays, not afterwards.`,
      ]},
      { h: `Using a tool takes the heat off`, p: [
        `Pulling out a neutral calculator makes the split feel like a process, not a negotiation. Enter the items, assign them, and the numbers come out the same for everyone. It is much easier to accept an answer from a tool than from the person across the table.`,
      ]},
    ],
  },
  {
    slug: 'scan-a-receipt-to-split-it',
    title: 'How to scan a receipt to split a bill',
    description: 'How the receipt scanner works, how to get a good photo, what it can and cannot read, and why your photo never leaves your device.',
    intro: `Typing every line of a long receipt is the slowest part of splitting a bill. The receipt scanner in EasyBillSplitting reads a photo and fills the items in for you, and everything stays on your device.`,
    sections: [
      { h: `How to use it`, p: [
        `In split by item mode, tap Scan a receipt above the item list, then take a photo of the receipt. On a computer you can also drag an image file onto the same area. In the even split mode, the scanner looks for the total and fills it in.`,
        `After a few seconds you will see a review screen showing what was found. Fix any mistakes, remove lines that are not items, and tap Add. If the receipt included tax and tip, they are filled in too.`,
      ]},
      { h: `Taking a good photo`, p: [
        `Good light and a flat receipt matter more than anything else. Lay it on a table, avoid shadows from your phone or hand, and fill the frame with the receipt. Crumpled or curled paper, faded thermal ink and glare all reduce accuracy.`,
        `If a long receipt does not fit in one photo, scan the first half, add the items, then scan the second half. Each scan adds to the list.`,
      ]},
      { h: `What it reads well and what it misses`, p: [
        `Printed receipts with clear item names and prices on the right usually come out well. It can struggle with handwriting, very small print, unusual fonts and receipts where quantities and prices wrap across lines. Modifiers such as extra cheese may be read as separate items, which you can delete or merge on the review screen.`,
        `This is why the review screen exists. A scan is a head start, not a final answer, so always glance over the amounts before you continue.`,
      ]},
      { h: `Privacy`, p: [
        `The text recognition runs inside your browser or app. Your photo is not uploaded to a server, and it is not saved. The first time you scan in a browser, the recognition engine and language data are downloaded from a public content delivery network. That download does not include your photo or any bill details.`,
      ]},
      { h: `After scanning`, p: [
        `From there, continue as usual: add the names of the people, drag each item onto the person or people who had it, check the tax and tip, and see who owes what. You can share the result as an image from the results screen.`,
      ]},
    ],
  },
]

export function getGuide(slug) {
  return guides.find((g) => g.slug === slug)
}
