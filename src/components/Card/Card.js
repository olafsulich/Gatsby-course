import React from "react";

const Card = () => (
  <article class="p-4 md:w-1/3">
    <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="blog"
      />
      <div class="p-6">
        <span class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
          Gear
        </span>
        <h3 class="title-font text-lg font-medium text-gray-900 mb-3">
          How to choose your first camera?
        </h3>
        <p class="leading-relaxed mb-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
        <div class="flex items-center flex-wrap ">
          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Learn More
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
);

export default Card;
