---
title: '"By the Light of Burning Dreams: The Triumphs and Tragedies of the Second American Revolution"'
description: '"By the Light of Burning Dreams: The Triumphs and Tragedies of the Second American Revolution" with David Talbot and Margaret Talbot'

#### Date of the event
date: "2021-10-19"


#### billboard
billboard:
  homepage-title: ''
  image: ""
  subtitle: 
  day: Wednesday
  month: October
  date: 19
  year: 2021
  starttime: 5:30 p.m.
  endtime: 7:00 p.m.

location:
  address: Virtual Event
  addresslink: 

#### custom button
registration-url: '#listing'
register-text: View latest event


#### Archive Page | Category will always be the same | event-type either Signature Event, Notable Event, Lecture Series
category: Lecture Series

#### Tags label Current or Inactive event
tags:
  - Burning Dream
  - Current
  
#### Profiles
profiles:
  - name: 'David Talbot'
    image: 
    description: 'David Talbot is a journalist, author, activist, and independent historian, most widely known for his books about the “hidden history” of U.S. politics and social change.  He founded and was the former editor-in-chief of the website magazine Salon. He has been hailed as a “web pioneer” by the New York Times, as well as “one of 50 people who matter most in the new media world” by Newsweek. He has also been heavily involved in political activism in his hometown San Francisco where he campaigned for prgressive candidates and affordable housing. Additionally, he has written for the New Yorker, Rolling Stone, and Time; served as a senior editor for Mother Jones magazine, and was a featured editor for the San Francisco Examiner. His blog, TheDavidTalbotShow.com showcases his opinions of local and national topics.'
  - name: 'Margaret Talbot'
    image: 
    description: "Margaret Talbot is an essayist and non-fiction writer.  She is a staff writer at The New Yorker and has written for The New York Times Magazine and The Atlantic Monthly. She was also a regular panelist on the Slate podcast “The DoubleX Gabfest”. Her first book, The Entertainer: Movies, Magic, and My Father's Twentieth Century features a story based off of her father Lyle Talbot, a veteran Warner Bros. actor. Margaret is also a former Senior Fellow of the New America Foundation. “By the Light of Burning Dreams: The Triumphs and Tragedies of the Second American Revolution” is her second book, which she has co-authored with her brother, David. She is a recipient of the 1999 Whiting Award."
  - name: 'Dolores Huerta'
    image: images/dolores-huerta.jpg
    description: "Dolores Huerta is a co-founder of the United Farm Workers and recipient of the Presidential Medal of Freedom. She has played a major role in the American civil rights movement for more than 50 years. In 1962, she co-founded the National Farm Workers Association with César Chávez. She has also led a national table grape boycott, which was supported by 17 million Americans and led to the passage of the California Agricultural Labor Relations Act. Additionally, her efforts have resulted in the Immigration Act of 1985. Today, she is a founding board member of the Feminist Majority Foundation, and she also serves on the board of Ms. Magazine. She continues her advocacy efforts as president of the Dolores Huerta Foundation, and continues to develop community leaders for working poor, immigrants, women, and youth."
  - name: 'Bill Zimmerman'
    image: images/bill-zimmerman.jpg
    description: "Bill Zimmerman is a political consultant and author who was an anti-Vietnam War activist during the Vietnam War.  While a student at the University of Chicago, he marched with Martin Luther King Jr. and joined anti-war demonstrations and helped to form Science for the People, a national organization of scientists that questioned military and commercial applications of weapon knowledge.  In his career of political consulting, he managed Tom Hayden’s campaign for the U.S. Senate in the 1976 California primary.  In 1988, he managed California Proposition 103 to reduce and regulate auto insurance rates and it won with a $2 million budget against $80 million spent by the insurance industry."
  - name: 'Heather Booth'
    image: images/heather-booth.jpg
    description: 'Heather Booth is a civil rights activist, feminist, and political strategist and has been heavily involved in progressive causes. She has organized civil rights, anti-Vietnam War, and women’s movements of the 1960s and continues to fight for justice to today.  She created JANE, an underground abortion service that started before Roe.  She is the President of the Midwest Academy which trains social change leaders and organizers.  In 2000, she was the Director of the NAACP National Voter Fund, which helped to increase African American election turnout by nearly 2 million voters.  In 2010, she was the founding director of Americans for Financial Reform, fighting to regulate the financial industry. She was the National Coordinator for the coalition around marriage equality and the 2013 Supreme Court decision.'
  - name: 'Madonna Thunder Hawk'
    image: 
    description: "Madonna Thunder Hawk is an Oohenumpa Lakota, a veteran of every modern Native occupation from Alcatraz, to Wounded Knee in 1973 and more recently the NODAPL protest at Standing Rock. She first became active in the late 1960s as a member and leader in the American Indian Movement and co-founded Women of All Red Nations and the Black Hills Alliance. In 1974, she established the We Will Remember Survival School as an act of cultural reclamation for young Native people pushed out of the public schools. An eloquent voice for Native resistance and sovereignty, Thunder Hawk has spoken throughout the United States, Central America, Europe, and the Middle East and served as a delegate to the United Nations in Geneva."
  
layout: full-page

---

{: .underline}
## {{ page.title }}


{% for profile in page.profiles %}
  <div class="grid-container large">
    {% if profile.image != null %}
        <img src="{{ profile.image}}" alt="{{ profile.name }}" class="img-left-25">
    {% endif %}
    <h3>{{ profile.name }}</h3>
    <p>{{ profile.description }}</p>
  </div>
{% endfor %}

<div class="grid-container large">
    <img src="images/nikki-silva.jpg" alt="Nikki Silva" class="img-left-25">
    <h3>Nikki Silva</h3>
    <p>Nikki Silva is Co-executive Producer of the public radio team, <a href="http://www.kitchensisters.org/">The Kitchen Sisters</a>, creators of hundreds of stories for NPR and public broadcast. Working with her long-time friend and producing partner, Davia Nelson, their work includes the duPont-Columbia and James Beard Award winning series <a href="http://www.kitchensisters.org/stories/hidden-kitchens/">Hidden Kitchens</a>, the Peabody Award winning <a href="http://www.kitchensisters.org/stories/lost-found-sound/">Lost & Found Sound</a> series, their Webby Award winning podcast <a href="http://www.kitchensisters.org/present/">The Kitchen Sisters Present</a>, and more. Their current NPR and podcast series is <a href="http://www.kitchensisters.org/keepers/">The Keepers</a>, stories of activist archivists, rogue librarians, curators, historians, collectors— guardians of history, large and small, protectors of the free flow of information and ideas. Both Davia and Nikki are proud UCSC Alums.</p>
</div>

