import { locationsList } from "@/data/locations";

export default function sitemap() {
  const baseUrl = "https://www.agarwalontimecargopackers.com";

  // Core pages
  const corePaths = [
    "",
    "/about.html",
    "/branches.html",
    "/gallery.html",
    "/faq.html",
    "/contact.html",
    "/payment.html",
    "/house.html",
    "/transport.html",
    "/packing.html",
    "/domestic.html",
    "/car.html",
    "/warehousing.html",
    "/office.html",
    "/air.html",
    "/sea.html",
  ];

  const coreUrls = corePaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic location pages
  const locationUrls = locationsList.map((loc) => ({
    url: `${baseUrl}/${loc.slug}.html`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...coreUrls, ...locationUrls];
}

