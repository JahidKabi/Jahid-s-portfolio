// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    // Add your production Netlify domain and local dev domains
    case '6807f993814b7088050c3696--jahid-s-portfolio.netlify.app':
    case 'localhost':  // Localhost for local dev
      return '4fdf5d5375750768c2dddcb2f55526';  // Replace with your actual DatoCMS token

    // Optional: Add other hostnames or environments if applicable
    // case 'another-unique-hostname.com':
    //   return 'another-dato-cms-api-token';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};


