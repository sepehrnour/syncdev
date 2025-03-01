"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know what we can do.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/image.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Applied Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/ai.png",
    content:
      "Unlock the full potential of your data and processes with our cutting-edge AI solutions. We specialize in designing and implementing tailored artificial intelligence systems that enhance decision-making, automate workflows, and provide predictive insights. Our AI solutions include natural language processing, machine learning, and deep learning algorithms, all optimized to solve specific challenges in industries ranging from finance to healthcare. With an emphasis on usability and efficiency, we ensure our AI models seamlessly integrate with your existing systems, delivering real-world value from day one.",
  },
  {
    category: "Custom Cloud Infrastructure",
    title: "Enhance your productivity on a custom cloud.",
    src: "/cloud.webp",
    content:
      "Scale your business with a cloud infrastructure designed just for you. Our team creates bespoke cloud solutions that are flexible, scalable, and secure, empowering businesses to manage operations seamlessly across multiple environments. Whether you need a hybrid, multi-cloud, or private cloud setup, we provide end-to-end cloud architecture design, deployment, and management. We focus on delivering high availability, disaster recovery solutions, and cost-efficient cloud resource management, enabling your team to innovate without being restricted by infrastructure limitations.",
  },
  {
    category: "Digital Community Development, Management, and Creation",
    title: "Foster a digital precense.",
    src: "/discord.png",
    content:
      "Build and engage your audience with our comprehensive digital community solutions. We help businesses create, manage, and grow thriving online communities that foster collaboration, communication, and loyalty. From developing interactive forums and social platforms to managing your community’s day-to-day activities, our services ensure a positive and engaging user experience. We also provide advanced community analytics, enabling you to track growth, engagement, and content effectiveness while tailoring strategies to keep your audience involved and invested.",
  },
];
