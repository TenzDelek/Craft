
const testimonials = [
  "I pay homage to all the Buddhas and Bodhisattvas.",
  "With deep respect, I bow to the Buddhas who possess the dharmakaya, to their spiritual heirs, and to all who are worthy of reverence. I will now briefly explain how to enter the discipline of the Bodhisattvas, the heirs of the Buddhas, in accordance with the scriptures.",
  "I haven't written anything new or original here. I don't possess the skill of elegant composition. I didn't create this with the intention of benefiting others. I wrote this simply to cultivate these teachings in my own mind.",
  "May the power of my faith increase for now through these efforts to cultivate virtue. And if others who share my aspirations happen to see these teachings, may their encounter be meaningful and beneficial.",
  "This precious human life with its freedoms and advantages is extremely rare to obtain. Since we have gained this opportunity to fulfill meaningful human goals, if we fail to accomplish what is beneficial in this lifetime, how could we expect to obtain such a perfect opportunity again in the future?",
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen items-center justify-center w-full max-w-3xl flex-col p-8 bg-white dark:bg-black sm:items-start">
        <p className="text-xl font-bold">The Way of the Bodhisattva</p>
        <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
          A Guide to the Bodhisattva's Way of Life
        </p>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <p
              key={index}
              className="testimonial-item cursor-pointer transition-all duration-300 hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-200"
            >
              {testimonial}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
