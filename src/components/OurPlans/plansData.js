export const plans = [
  {
    id: 1,
    duration: "Quarterly",
    prices: { ngn: ["₦75,000", "₦135,000"], usd: ["$90", "$162"] },
    discount: "10%",
    category: "Single / Couple",
    benefits: [
      "3 visits (1/month) over 3 months.",
      "Doctor home visits, monthly reports, home sample collection, emergency hotline nationwide coverage.",
    ],
    addOns: [
      {
        text: "Add WhatsApp group + multiple email reports for",
        price: "₦22,000/month",
      },
    ],
  },

  {
    id: 2,
    duration: "Bi-Annual",
    prices: { ngn: ["₦150,000", "₦270,000"], usd: ["$180", "$324"] },
    discount: "10%",
    category: "Single / Couple",
    benefits: [
      "6 visits (1/month) over 6 months.",
      "Same benefits in quarterly with extended continuity of care.",
    ],
    addOns: [
      {
        text: "Add WhatsApp group + multiple email reports for",
        price: "₦22,000/month",
      },
    ],
  },

  {
    id: 3,
    duration: "Annual",
    prices: { ngn: ["₦270,000", "₦486,000"], usd: ["$324", "$583"] },
    discount: "10%",
    category: "Single / Couple",
    benefits: [
      "12 visits (1/month) over 12 months.",
      "Consistent elderly care management throughout the year.",
    ],
    addOns: [
      {
        text: "Add WhatsApp group + multiple email reports for",
        price: "₦22,000/month",
      },
    ],
  },

  {
    id: 4,
    duration: "Bespoke",
    prices: { ngn: ["₦25,000"], usd: ["$30"] },
    discount: null,
    category: "Per Visit",
    benefits: [
      "Choose 1-12 visits (monthly, every 2-3 months).",
      "Full Gerocare services, flexible frequency, app, & hotline access.",
    ],
    addOns: [
      {
        text: "Add WhatsApp group + multiple email reports for",
        price: "₦22,000/month",
      },
    ],
  },
];
