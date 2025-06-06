"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Menu,
  X,
  Download,
  MessageCircle,
  Github,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  BookOpen,
  Users,
  Award,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function TeacherBrandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const typingTexts = ["AI 교육자", "콘텐츠 제작자", "예비 교사"]

  useEffect(() => {
    const text = typingTexts[currentIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        setCurrentText(text.slice(0, charIndex + 1))
        charIndex++
      } else {
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setCurrentText(text.slice(0, charIndex - 1))
              charIndex--
            } else {
              clearInterval(deleteInterval)
              setCurrentIndex((prev) => (prev + 1) % typingTexts.length)
            }
          }, 100)
        }, 2000)
        clearInterval(typeInterval)
      }
    }, 150)

    return () => clearInterval(typeInterval)
  }, [currentIndex])

  const projects = [
    {
      title: "AI 기반 수업 설계 가이드북",
      description: "ChatGPT와 교육용 AI 도구를 활용한 정보교육 수업 설계 방법론을 정리한 eBook",
      tech: ["AI Tools", "Curriculum Design", "Canva"],
      link: "#",
      type: "eBook",
    },
    {
      title: "Scratch 프로그래밍 교육 자료",
      description: "초등학생 대상 블록 코딩 교육을 위한 단계별 학습 자료 및 프로젝트 모음",
      tech: ["Scratch", "Block Coding", "Game Design"],
      link: "#",
      type: "교육자료",
    },
    {
      title: "교육용 챗봇 개발 프로젝트",
      description: "학생들의 학습 질문에 답변하는 AI 챗봇 프로토타입 개발",
      tech: ["Python", "OpenAI API", "Streamlit"],
      link: "#",
      type: "개발",
    },
    {
      title: "Micro:bit 피지컬 컴퓨팅 수업안",
      description: "중학교 정보 교과 대상 IoT 기초 개념 학습을 위한 실습 중심 수업 설계",
      tech: ["Micro:bit", "IoT", "Physical Computing"],
      link: "#",
      type: "수업안",
    },
  ]

  const skills = [
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "Python", level: 90, category: "Programming" },
    { name: "React", level: 80, category: "Framework" },
    { name: "Firebase", level: 75, category: "Backend" },
    { name: "Scratch", level: 95, category: "EdTech" },
    { name: "Micro:bit", level: 90, category: "EdTech" },
    { name: "Replit", level: 85, category: "EdTech" },
    { name: "Canva", level: 90, category: "Design" },
    { name: "Notion", level: 95, category: "Productivity" },
    { name: "Figma", level: 80, category: "Design" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
              교사 퍼스널 브랜딩
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-green-700 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-green-700 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-green-700 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-green-700 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-700 transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="#home" className="text-gray-700 hover:text-green-700 transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-green-700 transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-gray-700 hover:text-green-700 transition-colors">
                  Projects
                </Link>
                <Link href="#skills" className="text-gray-700 hover:text-green-700 transition-colors">
                  Skills
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-green-700 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-lg text-green-700 font-medium">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  학생들과 함께 성장하는 예비 교사,{" "}
                  <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                    AI 교육을 실천합니다
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  정보컴퓨터교육의 본질을 고민하며, 실천 중심의 교육을 만들어갑니다.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3">
                  <Download className="mr-2 h-5 w-5" />
                  이력서 다운로드
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-3"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  상담 요청하기
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">AI</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3">
                  <Award className="h-6 w-6 text-yellow-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3">
                  <Code className="h-6 w-6 text-green-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">AI 교육 전문가로 성장하는 예비 교사의 이야기</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Card className="bg-white/80 backdrop-blur-lg border-white/30 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold">
                      윤혜연
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">윤혜연</h3>
                      <p className="text-green-700 font-medium">AI 교육 전문가 · 예비 교사</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    건국대학교 교육대학원에서 정보컴퓨터교육 석사 과정을 수료하며, AI 시대에 맞는 새로운 교육 방법론을
                    연구하고 실천하고 있습니다. 학생들이 기술을 도구로 활용하여 창의적 사고력을 기를 수 있도록 돕는 것이
                    저의 교육 철학입니다.
                  </p>

                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    상세 이력서 다운로드
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-lg border-white/30 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">15+</h4>
                  <p className="text-gray-600">교육 프로젝트</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-white/30 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">500+</h4>
                  <p className="text-gray-600">학습자 대상</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-white/30 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Code className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">10+</h4>
                  <p className="text-gray-600">기술 스택</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-white/30 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">3+</h4>
                  <p className="text-gray-600">수상 경력</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-xl text-gray-600">AI 교육 실천을 위한 다양한 프로젝트들</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-lg border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {project.type}
                    </Badge>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-green-700 cursor-pointer" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full text-green-700 hover:bg-green-50">
                    프로젝트 상세보기
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-xl text-gray-600">AI 교육을 위한 기술 역량</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-xl text-gray-600">협업과 상담을 위한 연락처</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-lg border-white/30 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">연락 정보</h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-green-700" />
                      <span className="text-gray-700">gpdus9710@konkuk.ac.kr</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-700" />
                      <span className="text-gray-700">010-2914-9710</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-green-700" />
                      <span className="text-gray-700">서울특별시</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-4">소셜 미디어</h4>
                    <div className="flex space-x-4">
                      <Link href="#" className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
                        <Linkedin className="h-5 w-5 text-green-700" />
                      </Link>
                      <Link href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Github className="h-5 w-5 text-gray-600" />
                      </Link>
                      <Link href="#" className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition-colors">
                        <Youtube className="h-5 w-5 text-red-600" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-lg border-white/30 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">상담 요청</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                      <Input placeholder="이름을 입력하세요" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                      <Input type="email" placeholder="이메일을 입력하세요" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">문의 유형</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent">
                      <option>협업 제안</option>
                      <option>채용 문의</option>
                      <option>교육 상담</option>
                      <option>기타</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">메시지</label>
                    <Textarea placeholder="상담 내용을 자세히 적어주세요" rows={4} />
                  </div>

                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">상담 요청 보내기</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-xl font-bold mb-2">교사 퍼스널 브랜딩</div>
              <p className="text-gray-400">© 2024 All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                개인정보 처리방침
              </Link>
              <Link href="mailto:gpdus9710@konkuk.ac.kr" className="text-gray-400 hover:text-white transition-colors">
                gpdus9710@konkuk.ac.kr
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
