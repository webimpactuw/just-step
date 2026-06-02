export const EVENTS_QUERY = `
  *[_type == "event"] | order(displayOrder asc, _createdAt desc) {
    "id": _id,
    "status": coalesce(eventStatus, "upcoming"),
    title,
    "start": coalesce(cardTime, timeLabel, ""),
    "description": coalesce(cardDescription, detailDescription, ""),
    "imageSrc": coalesce(image.asset->url, mainImage.asset->url, mainImagePath, "/events/event_placeholder_img.png"),
    "href": select(
      defined(slug.current) => "/events/" + slug.current,
      "/events"
    ),
    "ctaLabel": coalesce(ctaLabel, "LEARN MORE")
  }
`;

export const EVENT_LIST_QUERY = `
  *[_type == "event"] | order(displayOrder asc, _createdAt desc) {
    "id": _id,
    "status": coalesce(eventStatus, "upcoming"),
    title,
    "day": coalesce(day, ""),
    "month": coalesce(month, ""),
    "time": coalesce(cardTime, ""),
    "location": coalesce(cardLocation, locationName, ""),
    "description": coalesce(cardDescription, detailDescription, ""),
    "href": select(
      defined(slug.current) => "/events/" + slug.current,
      "/events"
    ),
    "registerHref": registerUrl
  }
`;

export const EVENT_BY_SLUG_QUERY = `
  *[_type == "event" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    "status": coalesce(eventStatus, "upcoming"),
    "dateLabel": coalesce(dateLabel, ""),
    "timeLabel": coalesce(timeLabel, ""),
    "locationName": coalesce(locationName, cardLocation, ""),
    "locationAddress": coalesce(locationAddress, ""),
    "ticketInfo": coalesce(ticketInfo, ""),
    "detailDescription": coalesce(detailDescription, cardDescription, ""),
    "registerUrl": registerUrl,
    "mainImageSrc": coalesce(mainImage.asset->url, image.asset->url, mainImagePath, "/events/event_placeholder_img.png"),
    "sponsors": sponsors[] {
      name,
      "logoSrc": coalesce(logo.asset->url, logoPath)
    },
    "gallerySlides": gallerySlides[] {
      "src": coalesce(image.asset->url, imagePath),
      "alt": coalesce(alt, "Event gallery image"),
      "objectPosition": coalesce(objectPosition, "center")
    }
  }
`;
