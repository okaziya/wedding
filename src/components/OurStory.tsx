import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const OurStory = () => {
  const timeline = [
    {
      date: "June 13th, 2024",
      title: 'Started watching "Jordan B Peterson on Marriage" on The Daily Wire',
      description: (
        <>
          We started watching "Part 1: The Promise" (
          <Link
            to="https://www.dailywire.com/episode/1-the-promise"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            watch here
          </Link>
          ) and thinking about committing.
        </>
      ),
    },
    {
      date: "June 14th, 2024",
      title: "Decided to commit to each other",
      description: (
        <>
          We continued watching "On Marriage, part 2: Negotiation" (
          <Link
            to="https://www.dailywire.com/episode/negotiation"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            watch here
          </Link>
          ) and decided to commit to each other, until death.
        </>
      ),
    },
    {
      date: "June 19th, 2024",
      title: "Midsummer with family in Siljansnäs",
      description:
        "Liza, Mats & Åke went on a five-day road trip to spend Midsummer holidays in Siljansnäs, first meeting with Mats mother and sister parts of the family.",
    },
    {
      date: "July 5th, 2024",
      title: "Mats & Åke goes to Prague",
      description: "Mats & Åke goes to Czechia to help relocate Liza and all her belongings to new home.",
    },
    {
      date: "July 8th, 2024",
      title: "Liza comes home to Stockholm",
      description: "Liza arrives at Arlanda from Prague with all her remaining belongings and the dog Dusty.",
    },
    {
      date: "July 10th, 2024",
      title: "Liza's residency in Sweden approved",
      description: "The Swedish Tax Agency approves Liza's relocation to Sweden.",
    },
    {
      date: "July 11th, 2024",
      title: "First birthday & Dusty finds a home",
      description: "Celebrating Liza's 30 year birthday, and same day Dusty moves into his new home with Birgitta.",
    },
    {
      date: "July 20th, 2024",
      title: "First time on a cruise ship",
      description: "Liza, Mats & Åke goes on a cruise to Helsinki, Finland; first vacation trip abroad.",
    },
    {
      date: "July 27th, 2024",
      title: "First time hiking in the forest up north",
      description:
        "Liza, Mats & Åke goes to Dalarna for overnight hiking in the forest with friends Yongtao and Niclas.",
    },
    {
      date: "August 2nd, 2024",
      title: "Family on Church Camp",
      description: "Liza getting introduced to Mats' church during a weekend at Drakudden",
    },
    {
      date: "August 5th, 2024",
      title: "Liza start studying Swedish",
      description: "First Swedish A1 course at Folkuniversitetet",
    },
    {
      date: "September 14th, 2024",
      title: "Road trip, meeting with Mats' father",
      description: "Liza, Mats & Åke goes on a road trip up north to visit Mats' father Janne over the weekend.",
    },
    {
      date: "September 28th, 2024",
      title: "Road trip, meeting with Mats' friends",
      description:
        "Liza, Mats & Åke goes on a road trip down south to visit Mats' friends in Undenäs over the weekend.",
    },
    {
      date: "October 1st, 2024",
      title: "Liza starts working in Sweden",
      description: "Finally done with employer in Czech Republic, on the road to full integration in Sweden!",
    },
    {
      date: "October 21st, 2024",
      title: "Second birthday, Mats 40 years",
      description: "Celebrating Mats' 40 year birthday with family and friends.",
    },
    {
      date: "December 14th, 2024",
      title: "Third birthday, Åke 8 years",
      description: "Celebrating Åke's 8 year birthday with family and friends.",
    },
    {
      date: "December 22nd, 2024",
      title: "First Christmas Holiday",
      description:
        "Mats, Liza & Åke goes on a 6-day road trip to celebrate first Christmas holidays with family in Siljansnäs.",
    },
    {
      date: "December 27th, 2024",
      title: "Finalized place, date & time for wedding ceremony",
      description:
        "Booked the local church in Siljansnäs (Mats' home village), booked accommodation for the guests up on the mountain and in surrounding areas, announced the final date and time details as Saturday June 14th at 15:00 CET.",
    },
    {
      date: "January 18th, 2024",
      title: "Booked main event venue for the ceremony",
      description:
        "Booked Roddens Hus as the main venue, as well as a conference room up on the mountain for gathering point next to accommodations in Siljansnäs Stugby",
    },
  ];

  return (
    <section className="py-20 bg-wedding-background" id="our-story">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12 text-wedding-accent">Our Story</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((event, index) => (
            <Card key={index} className="mb-8 animate-fade-in bg-white/80 backdrop-blur-sm">
              <div className="p-6">
                <div className="font-playfair text-xl text-wedding-secondary mb-2">{event.date}</div>
                <h3 className="font-playfair text-2xl mb-2 text-wedding-accent">{event.title}</h3>
                <p className="font-inter text-gray-600">{event.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
