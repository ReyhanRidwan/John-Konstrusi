/**
 * Custom Cloudinary Assets for JohnKonstruksi with automatic optimized paths
 */

// Global optimizer function
export function optimizeCloudinaryUrl(url: string): string {
  if (!url) return "";
  // Check if it's a Cloudinary url
  if (url.includes("res.cloudinary.com")) {
    // If it already has some optimization or specific folder upload
    if (url.includes("/upload/v")) {
      return url.replace("/upload/", "/upload/f_auto,q_auto,w_1200,c_limit/");
    }
    // If it has q_auto/f_auto already
    if (url.includes("/upload/q_auto/f_auto/")) {
      return url.replace("/upload/q_auto/f_auto/", "/upload/f_auto,q_auto,w_1200,c_limit/");
    }
    // Simple replacement
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_1200,c_limit/");
  }
  return url;
}

export const IMAGES = {
  // Home Carousel
  heroSlide1: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941841/slide2_vlhgia.jpg"),
  heroSlide2: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg"),
  
  // Section backdrops and previews
  serviceHighlightBg: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941746/naksha-banwao-3ddHcjHmiGw-unsplash_jdslxv.jpg"),
  portfolioBefore: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941823/sebastian-herrmann-ysqlsEnWpLg-unsplash_pbv806.jpg"),
  portfolioAfter: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941801/ronnie-george-S0-e9aITeHc-unsplash_ogymgo.jpg"),

  // Project 1
  project1: {
    before: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941813/sandy-millar-u1KG_wZTnkg-unsplash_kglxsg.jpg"),
    after: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg"),
    gallery: [
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941380/iwood-R5v8Xtc0ecg-unsplash_nfr6rt.jpg"),
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941776/roberto-nickson-emqnSQwQQDo-unsplash_vrhxtd.jpg"),
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941755/naksha-banwao-nAFuA8t5K9Y-unsplash_v8sxdy.jpg"),
    ]
  },

  // Project 2
  project2: {
    before: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941769/olek-buzunov-cm-gqu42F20-unsplash_gmblqa.jpg"),
    after: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941852/spacejoy-4xRP0Ajk9ys-unsplash_olxzns.jpg"),
    gallery: [
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941832/serhat-beyazkaya-ayWgRkCk2sQ-unsplash_whjzpo.jpg"),
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941380/iwood-R5v8Xtc0ecg-unsplash_nfr6rt.jpg"),
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941885/zac-gudakov-ztWpwTEx728-unsplash_b2wvie.jpg"),
    ]
  },

  // Project 3
  project3: {
    before: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941363/house_decoration_fgbtju.jpg"),
    after: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941867/spacejoy-YI2YkyaREHk-unsplash_t2s8ka.jpg"),
    gallery: [
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg"),
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941859/spacejoy-9M66C_w_ToM-unsplash_kqkwhw.jpg"),
      optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941100/collov-home-design-4_jQL4JCS98-unsplash_borowp.jpg"),
    ]
  },

  // Services
  services: {
    bangunBaru: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941841/slide2_vlhgia.jpg"),
    renovasi: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941859/spacejoy-9M66C_w_ToM-unsplash_kqkwhw.jpg"),
    arsitektur: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941852/spacejoy-4xRP0Ajk9ys-unsplash_olxzns.jpg"),
    interior: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941346/etienne-girardet-sgYamIzhAhg-unsplash_vvnxjq.jpg"),
  },

  // About Us
  about: {
    team: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941792/ronnakorn-triraganon-IvEYfb-3B70-unsplash_fwhdz6.jpg"),
    founder: optimizeCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778943896/15ba0e3c10587844c0e73ad425d1adcd_gedrjd.jpg"),
  },

  // Fallbacks
  fallback: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
};
