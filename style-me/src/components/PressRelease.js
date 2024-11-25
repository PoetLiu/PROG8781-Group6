// Ceaated By : Harsh Patel

import { Chrono } from 'react-chrono';

const pressReleases = [
  {
    date: "30 NOV 2022",
    title: "Digital Fashion Leader Style.me Launches Mixed Reality Metaverse Runway with tagSpace",
  },
  {
    date: "28 JUL 2022",
    title: "STYLE.ME Partners with XRSPACE to Bring Digital Fashion to the Metaverse",
  },
  {
    date: "27 JAN 2022",
    title: "Style.me to Enter the Metaverse With Wearable NFTs",
  },
  {
    date: "30 SEP 2021",
    title: "Style.me's Virtual Fitting and Styling Solution, Expanding Rapidly Across Three Continents",
  },
  {
    date: "15 MAY 2020",
    title: "Demand for Style.me Surges During the COVID-19 Era",
  },
  {
    date: "7 MAY 2020",
    title: "Style.me Launches Advisory Board for Market Expansion",
  },
  {
    date: "6 JAN 2020",
    title: "Diane von Furstenberg Launches with Leading Virtual Fitting & Styling Solution Style.me",
  },
];

export default function PressReleasesTimeline() {
  return (
    <div className="container mx-auto px-4 py-12 pl-8">
      <h2 className="text-3xl font-bold mb-8">Press Releases</h2>

      {/* React Chrono Timeline */}
      <Chrono
        items={pressReleases.map(release => ({
          title: release.title,
          cardTitle: release.date,
        }))}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#3498db', // Primary color (blue)
          secondary: '#ffffff', // Background color for cards
          cardBgColor: '#f4f4f4', // Light gray background for cards
          cardForeColor: '#333333', // Dark text for readability
          lineColor: '#3498db', // Blue line for timeline
        }}
        slideShow={false} // Disable slide show to make it simpler
        allowDynamicUpdate={true} // Allow dynamic updates to the timeline
        cardWidth={220} // Reduce width for low density
        cardHeight={100} // Reduce height for low density
        circleWidth={10} // Smaller circle size
        circleHeight={10} // Smaller circle size
        fontSize={12} // Smaller font size
      />
    </div>
  );
}
