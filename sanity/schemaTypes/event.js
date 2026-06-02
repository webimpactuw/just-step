import {defineField, defineType} from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: function (Rule) {
        return Rule.required();
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: function (Rule) {
        return Rule.required();
      },
    }),
    defineField({
      name: "eventStatus",
      title: "Event Status",
      type: "string",
      initialValue: "upcoming",
      options: {
        layout: "radio",
        list: [
          {title: "Upcoming", value: "upcoming"},
          {title: "Past", value: "past"},
        ],
      },
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 1,
    }),

    defineField({
      name: "day",
      title: "Card Day",
      type: "string",
      description: "Example: 17",
    }),
    defineField({
      name: "month",
      title: "Card Month",
      type: "string",
      description: "Example: May",
    }),
    defineField({
      name: "cardTime",
      title: "Card Time",
      type: "string",
      description: "Example: 3:00 PM - 5:00 PM & 6:00 PM - 8:00 PM",
    }),
    defineField({
      name: "cardLocation",
      title: "Card Location",
      type: "string",
      description: "Example: Snohomish County PUD",
    }),
    defineField({
      name: "cardDescription",
      title: "Card Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "dateLabel",
      title: "Detail Page Date",
      type: "string",
      description: "Example: Sunday, May 17, 2026",
    }),
    defineField({
      name: "timeLabel",
      title: "Detail Page Time",
      type: "string",
      description: "Example: Shows at 3:00 PM – 5:00 PM & 6:00 PM – 8:00 PM PST",
    }),
    defineField({
      name: "locationName",
      title: "Detail Page Location Name",
      type: "string",
    }),
    defineField({
      name: "locationAddress",
      title: "Detail Page Location Address",
      type: "string",
    }),
    defineField({
      name: "ticketInfo",
      title: "Ticket Info",
      type: "string",
      description: "Example: General Admission Ticket: $25",
    }),
    defineField({
      name: "detailDescription",
      title: "Detail Page Description",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "registerUrl",
      title: "Register URL",
      type: "url",
    }),

    defineField({
      name: "image",
      title: "Homepage/Card Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Detail Page Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainImagePath",
      title: "Detail Page Main Image Path",
      type: "string",
      description: "Temporary option for public folder images. Example: /Flyer1.jpg",
    }),

    defineField({
      name: "sponsors",
      title: "Sponsors & Partners",
      type: "array",
      of: [
        {
          name: "sponsor",
          title: "Sponsor",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
            }),
            defineField({
              name: "logoPath",
              title: "Logo Path",
              type: "string",
              description: "Temporary option for public folder images. Example: /Sponsor1.png",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "gallerySlides",
      title: "Gallery Slides",
      type: "array",
      of: [
        {
          name: "gallerySlide",
          title: "Gallery Slide",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
            }),
            defineField({
              name: "imagePath",
              title: "Image Path",
              type: "string",
              description: "Temporary option for public folder images. Example: /Flyer1.jpg",
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
            defineField({
              name: "objectPosition",
              title: "Object Position",
              type: "string",
              description: "Example: center, left center, right center",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "ctaLabel",
      title: "Homepage Button Label",
      type: "string",
      initialValue: "LEARN MORE",
    }),
  ],
});
