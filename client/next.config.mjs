/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  //   rewrites: async () => {
  //     return [
  //       {
  //         source: '/dashboard/invoices/create',
  //         destination: '/pages/dashboard/invoices/create',
  //       },
  //       {
  //         source: '/dashboard/invoices/:id/edit',
  //         destination: '/pages/dashboard/invoices/:id/edit',
  //       },
  //     ];
  //   },
};

export default nextConfig;
