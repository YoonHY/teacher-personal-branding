import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '교사 퍼스널 브랜딩',
  description: '2025-1학기 인터넷활용교육 기말 과제: 교사 퍼스널 브랜딩 페이지',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
