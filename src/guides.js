// Long-form guides. Each section: { h: heading, p: [paragraphs] }.
// Worked examples use made-up numbers. Tipping norms are general guidance and vary by place.

export const guides = [
  {
    slug: 'split-tip-evenly-or-proportionally',
    title: 'Should you split the tip evenly or in proportion?',
    description: 'The two ways to divide a restaurant tip, a worked example with real numbers, and how to decide which one your group should use.',
    intro: `Nobody argues about the pasta. It's the tip that gets people tight-lipped. You can agree on every line of the check and still end up in a standoff over whether the tip gets divided by head count or by who ate what.`,
    sections: [
      { h: `Even versus proportional`, p: [
        `Even is the lazy version: add up the tip, divide by the number of people, done. Proportional ties each person's tip to their own food, so if you ordered 40 percent of everything on the table you cover 40 percent of the tip.`,
        `Most people expect proportional without ever saying so, since tips are a percentage to begin with. Tip 20 percent on your own meal and the group's total is identical to a proportional split. Go even and somebody is quietly subsidizing somebody else. Usually it's the person who stuck to a salad.`,
      ]},
      { h: `Try it with numbers`, p: [
        `Say four of you get a 140 dollar check. Ana's food and drinks came to 60, Ben's to 40, Cara's to 25 and Dev's to 15. You settle on 20 percent, so 28 dollars of tip.`,
        `Even split: everyone puts in 7. That's fine for Ana, who's tipping about 12 percent of her own order. Dev ordered a 15 dollar meal and just tipped 47 percent on it.`,
        `Proportional: Ana pays 12, Ben 8, Cara 5, Dev 3. Each of them has tipped exactly 20 percent of what they ordered, which is why this is the version that rarely starts a fight. It's also what EasyBillSplitting does by default, though there's a checkbox if you'd rather go even.`,
      ]},
      { h: `When even is the right call`, p: [
        `If everyone's order landed within a few dollars of each other, the two methods give nearly the same answer, so take the easy one. Even also makes sense when someone's being treated, or when the table has an informal deal that you take turns covering things.`,
        `It's kinder to the person who skipped drinks to save money, too. The server still walked to the table for them just as often.`,
      ]},
      { h: `Settling it in ten seconds`, p: [
        `Ask before the check shows up, because it's much harder to raise afterward. Something like "evenly or by what we ordered?" is plenty. A rough rule: if the biggest order is less than about 30 percent above the smallest, go even. Beyond that, go proportional.`,
        `Pick the percentage first and the method second. Arguing about the rate is arguing about values. Arguing about the method is arithmetic. They're easier to solve one at a time.`,
      ]},
      { h: `Before or after tax?`, p: [
        `Plenty of people tip on the pre-tax subtotal, since the tax isn't going to the server. Others tip on the final total because it's quicker. You're talking about a point or two of difference on the tip itself, so don't lose sleep over it. Just make sure the whole table is doing the same thing. EasyBillSplitting asks for the tip as an amount, so use whichever you like.`,
      ]},
      { h: `The same bill with tax included`, p: [
        `Take the four friends again, but now the check shows a 140 dollar subtotal and 11.20 in tax (8 percent). If the group tips 20 percent on the pre-tax subtotal, the tip is 28 dollars. If it tips on the final total of 151.20, the tip is 30.24. That's a 2.24 dollar gap across the whole table, which works out to about 56 cents each if you split it evenly.`,
        `Proportional shares give Ana 60 of 140, so she covers 42.9 percent of the tip. On the pre-tax tip that's 12.00. On the after-tax tip it's 12.96. Whichever base you choose, apply it to everyone at the table and the total stays consistent.`,
      ]},
      { h: `A mental check before you pay`, p: [
        `Divide the tip by the pre-tax subtotal. If you get a number near the percentage you meant to leave, you're fine. In the example, 28 divided by 140 is 0.20, exactly 20 percent. If a proportional split gives somebody a personal tip rate far from the group's, one of the figures was probably typed wrong.`,
        `This is also a useful sanity test when somebody else did the math. Add up everyone's tip share. It should equal the total tip to the cent, give or take a rounding difference of a penny or two.`,
      ]},
      { h: `Rounding without a fight`, p: [
        `Proportional shares rarely land on whole cents. Twelve dollars and ninety-six cents is easy, but 9.4286 isn't. Round each person to the nearest cent and, if the total is a cent or two off, let the person who's paying the card absorb it. Arguing over a single cent costs more goodwill than it saves.`,
      ]},
    ],
  },
  {
    slug: 'splitting-a-bill-with-roommates',
    title: 'Splitting bills with roommates without the arguments',
    description: 'How roommates can divide rent, utilities, internet and groceries fairly, with rules that prevent resentment before it starts.',
    intro: `A dinner out is over by ten p.m. A flat share goes on for twelve months at least, and every little unfairness comes back on the first of the month. Sort out the money rules in week one and most of the drama never gets a chance to start.`,
    sections: [
      { h: `Equal rent isn't always fair rent`, p: [
        `Say one bedroom is twice the size of the other and comes with its own bathroom. Splitting the rent fifty-fifty is a bit silly, isn't it? The person in the small room pays the same and gets far less.`,
        `What helps is a points system. Score each room on size, light, noise and bathroom access, add the scores up, and everybody pays their slice of the total. The grim ones (street side, the walk-through room, the closet the size of a shoebox) ought to cost noticeably less. Say that out loud before anyone signs.`,
      ]},
      { h: `Bills: even, with a couple of exceptions`, p: [
        `Electricity, gas, water and internet usually get split evenly, since you all live there. But if one of you works from home with a space heater on all day, or is away half the month, bring it up before the first big bill, not after. People are surprisingly reasonable when they aren't already annoyed.`,
        `Whoever has the accounts in their name carries the risk of a late payment, so everyone else should pay them back by a fixed date. Rotate that job yearly. It stops one person becoming the permanent landlord figure.`,
      ]},
      { h: `The fridge problem`, p: [
        `Most flats land on one of three setups. Separate shelves, separate food, labels on everything. A monthly pot for staples (milk, oil, dish soap, loo roll). Or whoever does the big shop keeps the receipt and the rest divide it line by line.`,
        `The line-by-line version sounds fussy, but it takes about two minutes. Enter or scan the receipt, drag each item onto the people who'll actually eat or use it, and share the common stuff equally. Done.`,
      ]},
      { h: `Make paying back boring`, p: [
        `Pick one settle-up day (the first works) and stick to one app or bank transfer. Send a short message with the amount and what it's for. Honestly, the sum is rarely what causes bad feeling. Not knowing when it's due is.`,
        `Keep a shared note of who paid what. And if someone's broke one month, get the repayment date in writing. A bit awkward for sixty seconds, then no resentment for the next six months.`,
      ]},
      { h: `Leaving`, p: [
        `Settle what happens to the deposit and the shared stuff early. If you bought a couch or a router together, write down who owns it. Having that argument while somebody's carrying boxes downstairs is no fun for anyone.`,
      ]},
      { h: `A points split, step by step`, p: [
        `Three roommates share a 2,400 dollar apartment. Room A is the largest and has its own bathroom, so the group scores it 45 points. Room B is medium with a window onto the street, 35 points. Room C is the small one off the kitchen, 20 points. That's 100 points in total, so each point is worth 24 dollars.`,
        `Rent comes out to 1,080 for A, 840 for B and 480 for C. An even split would have been 800 each. The person in room C saves 320 a month and the person in room A pays 280 more, which tracks with what they actually get.`,
        `Do the scoring together, on paper, before anybody signs a lease. The numbers matter less than the fact that everyone watched them being chosen.`,
      ]},
      { h: `Handling a bill when someone is away`, p: [
        `Say the electricity, gas and internet come to 240 dollars in a month and one roommate was abroad for two of the four weeks. A quick approach is to split the internet three ways, since it's a flat fee, and split the electricity and gas by days present. If the traveler was home for 14 of 28 days, they count as half a person for those two bills.`,
        `With 180 dollars of electricity and gas and 60 dollars of internet, the two who stayed pay 180 divided by 2.5, so 72 each, and the traveler pays 36. Add 20 each for internet and the totals are 92, 92 and 56. Whether to do this at all is up to the group, but agreeing on the rule once beats debating it every winter.`,
      ]},
    ],
  },
  {
    slug: 'tipping-guide-by-country',
    title: 'Tipping around the world: a practical guide',
    description: 'What is customary for restaurant tipping in the United States, Canada, the UK, Europe, Japan, Australia and more, and why it varies.',
    intro: `Tipping is the thing most likely to make a traveler look like they don't know what they're doing. Leave 20 percent in Tokyo and the server may politely hand it back. Leave nothing in Chicago and you've insulted someone. What follows are broad customs, and they do shift, so always look at the bill first. A lot of places add a service charge without telling you.`,
    sections: [
      { h: `The US and Canada`, p: [
        `Sit down for dinner and you're looking at 18 to 20 percent of the pre-tax bill, maybe a little more if the service was special. Under 15 and people will notice, because for many servers tips are most of the paycheck. At a bar it's about a dollar or two a drink. Delivery drivers get 10 to 15 percent, give or take.`,
        `Big parties often have 18 percent or so added automatically. Spot it on the check and you can relax: don't tip again.`,
      ]},
      { h: `The UK and Ireland`, p: [
        `First, hunt for a service charge. Ten to twelve and a half percent is common, groups especially. If it's printed there, that's your tip. If it isn't, around 10 percent for decent service is plenty. Ordering at the bar of a pub? Nobody expects a thing.`,
      ]},
      { h: `Mainland Europe`, p: [
        `In France, service is already baked into menu prices by law, so a couple of euros on the table is just a thank-you. Italy sometimes adds a coperto, a cover charge, as its own line, and extra tips on top are small. In Spain people round up or leave some coins. Germany's the odd one out. You tell the server the total you want to pay as you hand over the money, usually 5 to 10 percent above the bill, instead of leaving anything behind.`,
      ]},
      { h: `East Asia`, p: [
        `In Japan, tipping simply isn't done, and it may cause confusion or be returned to you politely. South Korea and mainland China are broadly similar. Upscale hotels and restaurants aimed at tourists sometimes add a service charge to make up for it.`,
      ]},
      { h: `Australia and New Zealand`, p: [
        `Wages are higher, so there's no expectation. If a meal at a nice place blew you away, around 10 percent is welcome. Nobody will think less of you for skipping it.`,
      ]},
      { h: `Latin America and the Caribbean`, p: [
        `Wide range. In Mexico, 10 to 15 percent is typical. Elsewhere a 10 percent service charge might already be on the bill, so check before you pay twice. Bring some cash: card tips don't always reach the staff.`,
      ]},
      { h: `One habit worth building`, p: [
        `Before tipping anywhere unfamiliar, hunt for a line on the bill that says service, servicio, couvert or coperto. If it's there, you're pretty much done. If you can't tell, ask the hotel front desk what locals do. Whatever you land on, type it into the tip box when you split by item and the app shares it out across the table.`,
      ]},
      { h: `Working out a tip in your head`, p: [
        `Move the decimal one place to get 10 percent, then adjust. On an 86 dollar pre-tax bill, 10 percent is 8.60. Double it for 20 percent, 17.20. For 15 percent, add half of the 10 percent figure: 8.60 plus 4.30 is 12.90. For 12 percent, take 10 percent and add two single percents, about 10.32.`,
        `Round to a number you can actually pay. On that 86 dollar bill, 17 or 18 dollars is a perfectly reasonable 20 percent tip. Nobody checks the cents.`,
      ]},
      { h: `Service charge or tip, or both`, p: [
        `A printed service charge usually goes to the restaurant, and how much of it reaches staff varies by place. If you were happy with the service and the charge is low, a few extra coins or a round-up is a gracious extra. If the charge is already 12.5 percent or more, most locals leave nothing further.`,
        `Be wary of the same fee appearing twice. Some bills include a service charge in the total and then show a suggested tip line underneath. Read down to the amount you're actually being asked to pay before adding anything.`,
      ]},
      { h: `Paying by card abroad`, p: [
        `Card machines in some countries have no tip option, and a few ask you to choose before the total is displayed. If you want to tip, tell the server the amount before they run the card, or leave cash. If the terminal offers to charge you in your home currency, choosing the local currency usually gets you a better rate.`,
      ]},
    ],
  },
  {
    slug: 'shared-appetizers-and-drinks',
    title: 'How to fairly split shared appetizers, wine and drinks',
    description: 'Practical rules for shared plates, bottles of wine, rounds of drinks and the person who skipped alcohol.',
    intro: `Splitting by item works nicely right up until somebody orders nachos for the table. Then you're asking who ate how much, whether a single bite counts, and why the wine suddenly cost 60 dollars. A few simple rules cover most of it.`,
    sections: [
      { h: `Plates for the middle of the table`, p: [
        `Share the price equally among whoever actually ate some. Four people, 24 dollar appetizer, 6 each. If one of them only stole a single bite, you can leave them out and divide by three, as long as you do the same all night.`,
        `What you shouldn't do is leave it with whoever ordered it. That person ends up paying for everyone's food, and it's nearly always the same person, because every group has one who orders for the table.`,
      ]},
      { h: `Wine`, p: [
        `Bottle shared by two? Those two split it. Poured around the table? Whoever had a glass shares it. The friend who doesn't drink shouldn't be funding a Malbec they never touched, even though saying so feels a bit petty.`,
        `If your group always orders wine, make it standing policy that wine goes to the drinkers. Then you only have that conversation once.`,
      ]},
      { h: `Rounds are messy`, p: [
        `Drinks cost wildly different amounts, and there's always one pricey cocktail next to a glass of tap water. Easiest fix: log each person's own drinks as items, and only share a round if it was clearly for everyone. Taking turns at the bar? Keep the number of rounds and the cost roughly level, or square up at the end.`,
      ]},
      { h: `The salad-and-water person`, p: [
        `Don't make them argue for it. An even split of a table that's mostly steak and cocktails isn't fair to the person who had a salad. Splitting by item handles it quietly: you pay for yours, shared plates get divided, and tax and tip follow the food.`,
      ]},
      { h: `How it works in the app`, p: [
        `Add every item, add the people, then drag each item onto everyone who shared it. Put one item on three people and its price is divided three ways. Tax, tip and discounts are then spread in proportion, so each total matches what that person actually ordered.`,
      ]},
      { h: `A full example with five people`, p: [
        `Five friends share nachos (15 dollars, four of them ate it), wings (18, all five), a bottle of wine (42, three drank it) and two sodas (4 each, for Dev and Eli).`,
        `Nachos split four ways is 3.75 each for Ana, Ben, Cara and Dev. Wings split five ways is 3.60 each. The wine split three ways is 14 each for Ana, Ben and Cara. Dev and Eli pay for their own sodas.`,
        `Ana, Ben and Cara each owe 3.75 plus 3.60 plus 14, which is 21.35. Dev owes 3.75 plus 3.60 plus 4, so 11.35. Eli owes 3.60 plus 4, so 7.60. Added together that's 83 dollars, the same as the four items on the check. If your totals don't match the receipt, something was assigned to the wrong person.`,
      ]},
      { h: `Deciding who counts as sharing`, p: [
        `The simplest rule is that you share a dish if you touched it. It's easy to remember and nobody has to judge portion sizes. If the group would rather be stricter, agree before ordering that anyone who only had a bite is left out.`,
        `Be consistent within a night. Counting a friend in for the nachos but not the wings feels arbitrary, even if each decision made sense at the time.`,
      ]},
    ],
  },
  {
    slug: 'discounts-coupons-and-bills',
    title: 'How to split a bill when there is a discount or coupon',
    description: 'Percent-off coupons, fixed-amount vouchers, buy-one-get-one deals and loyalty rewards: who gets the savings and how to divide them.',
    intro: `There's a coupon, and now there's a little problem: whose savings are they? Usually the answer depends on what the coupon actually applies to. Here are the situations that crop up most often.`,
    sections: [
      { h: `Percent off the entire check`, p: [
        `Say it's 15 percent off everything. Then everyone gets 15 percent off their own food. Apply the percentage to each person's subtotal, then add their share of tax and tip.`,
        `One catch: find out whether the discount comes off before or after tax. Most restaurants take it off first, so tax is calculated on a smaller number and you save a touch more than the coupon says.`,
      ]},
      { h: `A fixed voucher`, p: [
        `A 20 dollar voucher on a 120 dollar bill is a flat saving. Fair way to share it? By what each person ordered. Someone responsible for a sixth of the bill gets a sixth of the voucher, about 3.33. Splitting it evenly is simpler and fine when everyone's order was similar.`,
      ]},
      { h: `A deal on one dish`, p: [
        `Happy hour pricing, a free birthday dessert. The saving goes to whoever shared that dish. If four people ate the free dessert, they split the saving four ways, which in practice means nobody pays for it.`,
      ]},
      { h: `Buy one, get one`, p: [
        `Two meals, two people, one deal. Easiest is to treat it as 50 percent off both. That's fair if they cost the same. If not, the free one is normally the cheaper dish, so the saving belongs to the pair and you can divide it between those two by price.`,
      ]},
      { h: `Points and member rates`, p: [
        `If one person pays on a card that earns points and everybody reimburses them, the points are theirs. Taking turns is a nice gesture. A student or member discount tied to a single account can go to that person alone, but agree on it before the check comes, not after.`,
      ]},
      { h: `In the app`, p: [
        `You can add a percent or fixed discount in EasyBillSplitting, on the whole order or on one item. The final totals already include it, and you'll see how much the group saved.`,
      ]},
      { h: `The same bill, two kinds of discount`, p: [
        `Three people have a 100 dollar subtotal. Ana ordered 50, Ben 30 and Cara 20. Tax is 8 percent and is charged after the discount.`,
        `With 20 percent off the whole check, the subtotal drops to 80, so tax is 6.40. Ana pays 40 plus 3.20, Ben 24 plus 1.92 and Cara 16 plus 1.28. That's 43.20, 25.92 and 17.28, which adds up to 86.40.`,
        `With a 15 dollar voucher instead, shared by order size, Ana's share of the voucher is 7.50, Ben's 4.50 and Cara's 3. Their subtotals fall to 42.50, 25.50 and 17.00, so the taxable amount is 85 and the tax is 6.80. They pay 45.90, 27.54 and 18.36, a total of 91.80. The percentage coupon saved more here because it is worth 20 dollars, not 15.`,
      ]},
      { h: `When the discount shows up late`, p: [
        `Sometimes the server applies a coupon after the check has been printed, or a manager comps something after you've already added it up. Don't redo everything from scratch. Work out the new total from the receipt, then change the discount line so the grand total matches. The proportional math will carry the saving through to each person.`,
        `If one person's dish was removed from the bill, take it off that person's items, not everyone's.`,
      ]},
    ],
  },
  {
    slug: 'splitting-group-trip-expenses',
    title: 'How to split expenses on a group trip',
    description: 'A clear system for travel costs: lodging, groceries, shared transport and who paid what, so the group settles up once at the end.',
    intro: `Six people, one rental house, two cars and a hundred small purchases. By day four nobody remembers who paid for the ferry. A little structure on day one stops one person quietly covering half the trip. This is the setup that tends to work.`,
    sections: [
      { h: `Decide what's shared before you leave`, p: [
        `Usually lodging, groceries, the rental car, gas, parking and group activities are shared. Your own lunch out, souvenirs and anything you do solo aren't. Type it into the group chat. Takes five minutes and saves a lot of grumbling.`,
      ]},
      { h: `One place to write everything down`, p: [
        `A shared note works, so does a spreadsheet. Whoever pays for something shared adds a line (date, what, how much) and snaps the receipt. That way nobody's trying to rebuild the week from memory at the airport.`,
      ]},
      { h: `Rooms that aren't equal`, p: [
        `When rooms are similar, split lodging equally. When one couple takes the master suite and two friends share a pull-out sofa, don't. Rate each bed and split in proportion. People don't usually mind paying more for a nicer room as long as it was their choice.`,
      ]},
      { h: `Food`, p: [
        `Cooking at the rental is way cheaper than eating out every night. One person does the shop and keeps the receipt, and everyone who ate splits it equally. For a restaurant night where orders were all over the place, use split by item. Pretty similar orders? Just split evenly and move on.`,
      ]},
      { h: `Settling up`, p: [
        `At the end, add up what each person paid and what each person owes. People who paid more than their share are owed money. People who paid less owe it. Pair the biggest debts with the biggest credits and you'll need far fewer transfers. For six people that's typically three or four payments rather than fifteen.`,
        `Do it within a week of getting home. After a month, small amounts start to feel like favors and big ones feel rude to ask for.`,
      ]},
      { h: `Money from other countries`, p: [
        `Write each cost down in the currency you paid in, then pick one exchange rate for the final tally (the rate on the day you fly home works). You can change the currency symbol in EasyBillSplitting, so a dinner in Lisbon can be worked out in euros.`,
      ]},
      { h: `A settle-up example`, p: [
        `Four friends spend a long weekend away. Ana paid 600 for the rental house, Ben paid 240 for groceries and gas, Cara paid 90 for activity tickets and Dev paid 30 for parking. Together they spent 960, so a fair share is 240 each.`,
        `Ana paid 360 more than her share, Ben paid exactly his share, Cara paid 150 less and Dev 210 less. So Cara sends Ana 150 and Dev sends Ana 210. Two payments settle the whole trip, and everyone has paid exactly 240 in the end.`,
        `Sorting out the net positions first, instead of reimbursing each purchase one at a time, is what keeps the number of transfers small.`,
      ]},
      { h: `When someone joins late or leaves early`, p: [
        `Count nights or days, not heads, for shared lodging. A friend who is there for two of four nights owes about half of a full-stay share of the house, though most groups round up a little because the house has to be booked for the whole stay anyway.`,
        `Meals and activities are simpler: only people who took part pay for them. Decide at the planning stage and write it in the group chat, so nobody is surprised at the end.`,
      ]},
    ],
  },
  {
    slug: 'how-restaurant-tax-works',
    title: 'How restaurant tax works and how to divide it fairly',
    description: 'What sales tax on a restaurant bill is calculated on, why it differs by place, and how to share it when everyone ordered something different.',
    intro: `Tax is the line on the check nobody reads until it has to be split. Knowing what it's based on makes it easy to divide without anyone overpaying.`,
    sections: [
      { h: `What gets taxed`, p: [
        `In most places, tax on a meal is a percentage of the food and drink subtotal, and the rate depends on the city, state or country. Sometimes it's already inside the menu price, as in much of Europe and Japan. In other places, like most of the United States, it's added at the end.`,
        `Alcohol may be taxed at a higher rate, and some bills add separate charges for takeout containers or local levies. If there's more than one tax line, add them up and treat the total as the tax.`,
      ]},
      { h: `Why tax should follow your order`, p: [
        `Since tax is a percentage of the subtotal, each person's share is naturally proportional to what they ordered. If your food was a quarter of the subtotal, you owe a quarter of the tax. Splitting tax evenly pushes cost onto people who ordered less.`,
      ]},
      { h: `A quick example`, p: [
        `Three people, a 100 dollar subtotal, 8 percent tax, so 8 dollars. One ordered 50 of it, another 30 and the third 20. Their tax shares are 4, 2.40 and 1.60. Split evenly, each would pay 2.67, so the first person underpays by 1.33 and the third overpays by 1.07.`,
        `It's pocket change on one dinner. Across a year of group meals it adds up, and people do notice.`,
      ]},
      { h: `Discounts and tax`, p: [
        `If a discount comes off before tax, the tax is calculated on the lower amount, so the saving is a bit bigger than the discount itself. If it comes off after tax, the tax doesn't change. Look at which one your restaurant did and use the figures from the bill.`,
      ]},
      { h: `Entering tax in the app`, p: [
        `In split by item mode, type the tax from the receipt in the tax and tip step. EasyBillSplitting spreads it across people in proportion to their subtotals, so the totals always add up to the amount on the check.`,
      ]},
      { h: `When prices already include tax`, p: [
        `In many countries the menu price already contains the tax. A 12.00 dish with 20 percent included tax is 10.00 of food and 2.00 of tax. You don't add anything at the end, so there's no tax line to split. Everyone simply pays their own menu prices, plus a share of any tip.`,
        `The simplest way to handle it in the app is to leave the tax field at zero. The tax is already inside each item's price, so the proportional math is done for you.`,
      ]},
      { h: `Different rates on one bill`, p: [
        `Some places tax alcohol more than food. Say the rate is 8 percent on food and 10 percent on drinks. Someone who ordered 40 dollars of food and 30 of drinks owes 3.20 plus 3.00, so 6.20 in tax. Another person with 40 of food and no drinks owes 3.20.`,
        `Splitting that evenly would make the non-drinker pay part of a tax on drinks they never ordered. If the receipt shows separate lines for each rate, the cleanest approach is to add them together as one tax figure and share it by subtotal. The slight imprecision is small, and it's far better than an even split.`,
      ]},
      { h: `Tax on the tip`, p: [
        `You generally don't pay tax on a tip in a restaurant. That's why it makes sense to calculate the tip on the pre-tax subtotal, or to accept that tipping on the total is slightly more generous. Either is fine as long as the whole table agrees.`,
      ]},
    ],
  },
  {
    slug: 'awkward-bill-splitting-situations',
    title: 'Awkward bill-splitting situations and what to say',
    description: 'Polite scripts for the moments when the check arrives and the split is not obvious: unequal orders, someone short on cash, and the friend who always pays late.',
    intro: `The check lands, everyone suddenly finds their phone fascinating, and somebody has to say something. It's a small money problem with a lot of social pressure on top. These are the moments that come up most, and what usually works.`,
    sections: [
      { h: `You ordered way less than everyone`, p: [
        `Say something before the check arrives, and make it about the table instead of yourself. "Should we just split by what we ordered?" is hard to disagree with. And if you're the one who ate light, "I only had a salad, so I'll cover mine plus a bit of tip" tends to end the conversation on the spot.`,
      ]},
      { h: `One friend doesn't drink`, p: [
        `Don't make them be the one to ask. The group can just agree that drinks are paid for by whoever had them. If you're organizing, say so at the start of the night. Small thing, but people remember it.`,
      ]},
      { h: `Someone can't really afford it`, p: [
        `Cover it quietly and let them pay you back whenever they can. No speech needed. If it keeps happening, pick cheaper places for a while, or agree a rough budget per person before anybody orders.`,
      ]},
      { h: `The friend who forgets to pay you`, p: [
        `Message them that evening with the exact amount and how you'd like to be paid. A week on, reply to your own message: "just a reminder." With the number in writing it feels like admin, not an accusation.`,
      ]},
      { h: `The bill doesn't add up`, p: [
        `Check it over before anyone pays. The usual suspects are an item charged twice, a discount nobody applied, or a gratuity that's already on the check. Get the server to fix it right then, because afterward it's a real hassle.`,
      ]},
      { h: `Let the app be the bad guy`, p: [
        `A calculator on the table turns a negotiation into a process. Enter the items, drag them to whoever had them, and everyone sees the same answer. Taking a number from an app is far easier than taking it from the friend across the table.`,
      ]},
      { h: `Short scripts worth keeping`, p: [
        `Before ordering: "Are we splitting evenly, or paying for what we get?" It takes five seconds and nobody can be offended by a question asked before the food arrives.`,
        `When the check arrives: "Can everyone tell me their items and I'll put it in?" This makes you the organizer, which is a lot less awkward than being the one who objects.`,
        `When someone is quiet about money: "I'll put it on my card and you can send me yours whenever." It removes the pressure to produce cash or a transfer at the table.`,
      ]},
      { h: `Big groups`, p: [
        `Once a table passes six or seven people, one person collecting everything is the only thing that works. Ask everybody to say their items once, not argue about them. Itemize, add tax and tip, and send each person their total in the group chat, not at the table.`,
        `Many restaurants will split a check by seat on request, and it's worth asking at the start of the meal. Even if they can't, you've at least signaled that you want to keep it fair.`,
      ]},
    ],
  },
  {
    slug: 'scan-a-receipt-to-split-it',
    title: 'How to scan a receipt to split a bill',
    description: 'How the receipt scanner works, how to get a good photo, what it can and cannot read, and why your photo never leaves your device.',
    intro: `Typing out a long receipt line by line is the most tedious part of splitting a bill, so the scanner in EasyBillSplitting does it for you. It reads a photo and fills in the items. And the reading happens on your own device, not on a server.`,
    sections: [
      { h: `Using it`, p: [
        `In split by item mode, tap Scan a receipt above the item list and photograph the receipt. On a computer you can drag an image file onto the same spot. In even split mode, it hunts for the total and fills that in.`,
        `A few seconds later a review screen shows what it found. Fix anything that's wrong, delete lines that aren't items, then tap Add. If the receipt had tax and a tip, those get filled in too.`,
      ]},
      { h: `A better photo`, p: [
        `Light and a flat receipt matter more than anything else. Set it on a table, keep your hand and phone from casting a shadow, and fill the frame. Crumpled paper, faded thermal print and glare all hurt.`,
        `Long receipt that won't fit in one shot? Scan the top, add those items, then scan the bottom. Each scan adds to the list rather than replacing it.`,
      ]},
      { h: `Where it struggles`, p: [
        `Clean printed receipts with item names on the left and prices on the right usually come out well. Handwriting, tiny type, unusual fonts and prices that wrap to a second line are harder. Add-ons such as "extra cheese" can show up as their own item, so delete or fix those on the review screen.`,
        `That review screen is there for a reason. A scan gets you most of the way. Check the numbers before you carry on.`,
      ]},
      { h: `Privacy`, p: [
        `The text recognition runs inside your browser or app. Your photo isn't uploaded and isn't saved. The first time you scan in a browser, the recognition engine and its language data are downloaded from a public content delivery network. That download doesn't include your photo or anything from your bill.`,
      ]},
      { h: `After the scan`, p: [
        `From here it's the usual routine: add the names, drag each item onto whoever had it, check tax and tip, and see who owes what. You can share the result as an image from the results screen.`,
      ]},
      { h: `What a good scan looks like`, p: [
        `Imagine a receipt with five lines: a burger at 14.50, fries at 5.00, two sodas at 3.00 each, and a salad at 12.00. The scanner should read five items, a subtotal of 37.50 and, if printed, the tax and tip lines. On the review screen you'd check that each price matches, rename anything cryptic like "CHKN SNDWCH" to something your friends will recognize, and delete any lines that aren't dishes, such as a table number.`,
        `Compare the total of the items with the subtotal on the paper receipt before you continue. If the two numbers differ, a line was misread or missed.`,
      ]},
      { h: `If a scan doesn't work`, p: [
        `Try the photo again in better light, with the receipt flat and the whole width in frame. If it still struggles, take two photos, one of the top half and one of the bottom, and let the app add them together. If a particular line keeps coming out wrong, simply fix that one by hand. Correcting one price is quicker than typing the whole receipt.`,
        `And if the camera isn't working at all, you can always type items in by hand. The scanner is a shortcut. The result is the same either way.`,
      ]},
    ],
  },
]

export function getGuide(slug) {
  return guides.find((g) => g.slug === slug)
}
