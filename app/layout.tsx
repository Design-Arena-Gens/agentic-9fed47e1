import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google My Business Ad Optimizer - Saudi Arabia',
  description: 'Optimize your Google My Business ads for better call conversions in Riyadh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
