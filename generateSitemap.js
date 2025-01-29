const fs = require("fs");

// List your React app routes here
const routes = [
  "/",
  "/about",
  "/pos-features",
  "/pos-features/inventory-management",
  "/pos-features/sales-purchase-management",
  "/pos-features/multi-warehouse-management",
  "/pos-features/products-production-management",
  "/pos-features/trading-management",
  "/pos-features/accounts-management",
  "/pos-features/customer-relationship-management",
  "/pos-features/salaries-expense-management",
  "/pos-features/sales-forecasting",
  "/pos-features/comprehensive-reporting",
  "/pos-features/people-management",
  "/pos-features/24-7-support",
  "/system-hardware",
  "/pos-industries",
  "/blog",
  "/blog/the-ultimate-pos-system-all-in-one-for-diverse-businesses",
  "/blog/account-management-excellence-exploring-how-capobiz-manages-customer-and-supplier-account",
  "/blog/barcode-scanning-system-enhancing-efficiency-with-capobiz-pos",
  "/blog/sales-forecasting-software-an-in-depth-look-at-capobiz",
  "/blog/trading-software-powerhouse-unveiling-the-capabilities-of-capobiz-pos",
  "/blog/best-pos-for-small-business-why-capobiz-is-the-ideal-choice",
  "/blog/omnichannel-retailing-the-future-of-customer-centric-commerce",
  "/blog/pos-hardware-integration-enhancing-business-efficiency-with-capobiz-pos",
  "/blog/inventory-process-divergent-marketing-solutions-for-your-pos",
  "/blog/the-e-commerce-integration-platform-enhancing-your-pos",
  "/blog/retail-management-software-streamlining-operations-with-capobiz-pos-system",
  "/blog/retail-inventory-software-optimizing-with-capobiz-point-of-sale",
  "/blog/cross-merchandising-strategies-benefits-and-best-practices",
  "/blog/retail-software-solutions-tackling-inventory-management-challenges-with-capobiz-pos",
  "/blog/erp-accounting-software-unlocking-efficiency-with-capobiz-pos-as-your-ideal-solution",
  "/blog/enterprise-crm-streamlining-business-operations-with-capobiz-accounting-integration",
  "/blog/free-inventory-management-software-unlocking-efficiency-with-capobiz",
  "/blog/multi-warehouse-management-mastery-with-capobiz-point-of-sale-software",
  "/blog/production-management-software-enhancing-efficiency-with-capobiz",
  "/blog/restaurant-management-made-easy-unleashing-the-power-of-capobiz",
  "/blog/restaurant-inventory-software-essential-tool-for-efficient-restaurant-management",
  "/blog/best-accounting-software-capobiz-solving-real-life-business-challenges",
  "/blog/distribution-software-why-capobiz-is-the-best-choice",
  "/blog/manufacturing-software-how-capobiz-transforms-modern-manufacturing",
  "/blog/what-is-pos-terminals-features-benefits-and-how-it-works",
  "/blog/barcode-scanners-a-comprehensive-guide",
  "/blog/receipt-printers-a-complete-guide-to-understanding-and-choosing-the-right-one",
  "/blog/cash-drawers-essential-tools-for-seamless-pos-operations",
  "/blog/customer-displays-enhancing-transparency-and-trust-at-the-point-of-sale",
  "/blog/card-readers-enabling-seamless-transactions-in-the-modern-retail-landscape",
  "/blog/capobiz-label-printers-essential-tools-for-product-labeling-and-inventory-management",
  "/blog/pos-tablets-a-capobiz-portable-solution-for-modern-sales-transactions",
  "/blog/capobiz-handheld-scanners-the-perfect-tools-for-mobility-and-efficiency",
  "/blog/capobiz-digital-scales-precision-tools-for-weight-based-transactions",
  "/blog/capobiz-biometric-attendance-system-revolutionizing-workforce-management",
  "/blog/face-recognition-system",
  "/retail-pos-system",
  "/best-pos-system-for-restaurant",
  "/faqs",
  "/contact",
  "/help",
  "/pos-demo",
  "/Signup",
];

function generateXml(urls) {
  const today = new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === "https://capobiz.com/" ? "1.0" : "0.8"}</priority>
  </url>
  `
  )
  .join("\n")}
</urlset>
  `;
}
function generateSitemap() {
  const fullUrls = routes.map((route) => `https://capobiz.com${route}`);
  const xmlContent = generateXml(fullUrls);

  // Write the XML content to a file
  const sitemapPath = "./public/sitemap.xml"; // Adjust the path as needed
  fs.writeFileSync(sitemapPath, xmlContent);

  console.log(`Sitemap generated at ${sitemapPath}`);
}

// Run the function
generateSitemap();
