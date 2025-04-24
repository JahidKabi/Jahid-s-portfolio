// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    // Add your production Netlify domain and local dev domains
    case 'jahid-s-portfolio.netlify.app':
    case 'localhost':  // Localhost for local dev
    case 'www.jahidulkabir.com':  // Custom domain with www
    case 'jahidulkabir.com':      // Optional: root domain without www
      return 'f49794b0786d7869bc598ef06ac4ab';  // Replace with your actual DatoCMS token

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
