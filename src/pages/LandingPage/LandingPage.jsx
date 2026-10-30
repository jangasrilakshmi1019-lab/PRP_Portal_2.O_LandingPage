import React from 'react'
import './LandingPage.css'


import logoIcon from '../../assets/landingPage/logoIcon.png'
import heroIllustration from '../../assets/landingPage/heroIllustration.png'
import wideJobsIcon from '../../assets/landingPage/wideJobsIcon.png'
import aiResumeIcon from '../../assets/landingPage/aiResumeIcon.png'
import trainingIcon from '../../assets/landingPage/trainingIcon.png'
import analyticsIcon from '../../assets/landingPage/analyticsIcon.png'
import everyUserIcon from '../../assets/landingPage/everyUserIcon.png'
import userAvatar from '../../assets/landingPage/userAvatar.png'
import starRating from '../../assets/landingPage/starRating.png'
import quoteIcon from '../../assets/landingPage/quoteIcon.png'
import groqLogo from '../../assets/landingPage/groqLogo.png'
import ovenLogo from '../../assets/landingPage/ovenLogo.png'
import ollamaLogo from '../../assets/landingPage/ollamaLogo.png'
import deepmindLogo from '../../assets/landingPage/deepmindLogo.png'
import huggingFaceLogo from '../../assets/landingPage/huggingFaceLogo.png'
import claudeLogo from '../../assets/landingPage/claudeLogo.png'
import openAiLogo from '../../assets/landingPage/openAiLogo.png'
import facebookIcon from '../../assets/landingPage/facebookIcon.png'
import instagramIcon from '../../assets/landingPage/instagramIcon.png'
import xIcon from '../../assets/landingPage/xIcon.png'

const navLinks = [
  { id: 1, label: 'Home', isActive: true },
  { id: 2, label: 'Features', isActive: false },
  { id: 3, label: 'For Recruiters/Employers', isActive: false },
  { id: 4, label: 'For Training Institutions', isActive: false },
  { id: 5, label: 'Success Stories', isActive: false },
]

const featureCards = [
  { id: 1, icon: wideJobsIcon, title: 'Wide Job Opportunities', text: 'Access thousands of job openings from top companies.' },
  { id: 2, icon: aiResumeIcon, title: 'AI Resume Matching', text: 'Get matched with the right jobs using AI technology.' },
  { id: 3, icon: trainingIcon, title: 'Training & Skill Readiness', text: 'Build in-demand skills with industry-relevant training programs.' },
  { id: 4, icon: analyticsIcon, title: 'Placement Analytics', text: 'Track performance and make data-driven decisions.' },
  { id: 5, icon: everyUserIcon, title: 'For Every User', text: 'Tailored benefits for job seekers, recruiters and training institutions.' },
]

const testimonials = [
  { id: 1, name: 'Sarah Chen', role: 'Product Designer @ Aura Systems', text: "\"ConnectHire transformed my job search. The AI matching felt intuitive, and within two weeks, I was interviewed and hired by my dream company in fintech. The process was seamless.\""},
  { id: 2, name: 'Jhon Francis', role: 'Recruitment Manager @ Vertex Solutions', text: "\"The community gave me the confidence to showcase my work and connect with amazing people. I got my first full-time offer within 6 months. The support and guidance here are unmatched.\"" },
  { id: 3, name: 'David Miller', role: 'Talent Director @ Zenith Capital', text:  "\"The quality of candidates on ConnectHire is unmatched. We reduced our time-to-hire by 40% and have found some of our most productive team members through their automated screening.\""},
]

const companyLogos = [
  { id: 1, logo: groqLogo, name: 'Groq' },
  { id: 3, logo: ovenLogo, name: 'Oven' },
  { id: 2, logo: ollamaLogo, name: 'Ollama' },
  { id: 4, logo: deepmindLogo, name: 'DeepMind' },
  { id: 5, logo: huggingFaceLogo, name: 'Hugging Face' },
  { id: 6, logo: claudeLogo, name: 'Claude' },
  { id: 7, logo: openAiLogo, name: 'OpenAI' },
]

const footerColumns = [
  { id: 1, title: 'COMPANY', links: ['About Us', 'Careers', 'Contact'] },
  { id: 2, title: 'PLATFORM', links: ['Job Listings', 'AI Resume Matching', 'Training & Skill Readiness', 'Placement Analytics'] },
  { id: 3, title: 'SUPPORT', links: ['Help Center', 'FAQs', 'Resources', 'Contact Support'] },
  { id: 4, title: 'LEGAL', links: ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'] },
]

const socialIcons = [
  { id: 1, icon: facebookIcon, name: 'Facebook' },
  { id: 2, icon: instagramIcon, name: 'Instagram' },
  { id: 3, icon: xIcon, name: 'X' },
]

const LandingPage = () => {
  return (
    <div className="LandingPage-container">
      {/* Header */}
      <header className="LandingPage-header">
        <div className="LandingPage-headerLogo">
          <img className="LandingPage-headerLogoIcon" src={logoIcon} alt="logoIcon" />
          <p className="LandingPage-headerLogoText">
            Placement &amp; <br /> Recruitment Platform
          </p>
        </div>

        <nav className="LandingPage-headerNav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className={`LandingPage-headerNavLink ${link.isActive ? 'LandingPage-headerNavLinkActive' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="LandingPage-headerActions">
          <button className="LandingPage-headerLoginBtn">Login</button>
          <button className="LandingPage-headerRegisterBtn">Register</button>
        </div>
      </header>

      {/* Hero */}
      <section className="LandingPage-hero">
        <div className="LandingPage-heroContent">
          <p className="LandingPage-heroTag">BUILD YOUR FUTURE</p>
          <h1 className="LandingPage-heroTitle">
            Connect. Learn.
            <br />
            Get Placed.
          </h1>
          <p className="LandingPage-heroText">
            The all-in-one platform that bridges the gap between talented individuals, top employers and training institutions.
          </p>
          <div className="LandingPage-heroButtons">
            <button className="LandingPage-heroPrimaryBtn">Get Started</button>
            <button className="LandingPage-heroSecondaryBtn">Explore Jobs</button>
          </div>
        </div>
        <img className="LandingPage-heroImage" src={heroIllustration} alt="heroIllustration" />
      </section>

      {/* Why choose us */}
      <section className="LandingPage-features">
        <p className="LandingPage-sectionTag">WHY CHOOSE US</p>
        <h2 className="LandingPage-sectionTitle">Everything You Need for a Successful Career</h2>
        <div className="LandingPage-featuresGrid">
          {featureCards.map((card) => (
            <div key={card.id} className="LandingPage-featureCard">
              <div className="LandingPage-featureIconWrap">
                <img className="LandingPage-featureIcon" src={card.icon} alt={card.title} />
              </div>
              <h3 className="LandingPage-featureTitle">{card.title}</h3>
              <p className="LandingPage-featureText">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success stories */}
      <section className="LandingPage-stories">
        <p className="LandingPage-sectionTag">SUCCESS STORIES</p>
        <h2 className="LandingPage-sectionTitle LandingPage-storiesTitle">WHAT OUR USERS SAY</h2>
        <div className="LandingPage-storiesGrid">
          {testimonials.map((item) => (
            <div key={item.id} className="LandingPage-storyCard">
              <img className="LandingPage-storyQuote" src={quoteIcon} alt="quoteIcon" />
              <div className="LandingPage-storyUser">
                <img className="LandingPage-storyAvatar" src={userAvatar} alt="userAvatar" />
                <div className="LandingPage-storyUserInfo">
                  <img className="LandingPage-storyStars" src={starRating} alt="starRating" />
                  <p className="LandingPage-storyName">{item.name}</p>
                  <p className="LandingPage-storyRole">{item.role}</p>
                </div>
              </div>
              <p className="LandingPage-storyText">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top companies */}
      <section className="LandingPage-companies">
        <p className="LandingPage-companiesTag">TRUSTED BY LEADING COMPANIES</p>
        <h2 className="LandingPage-companiesTitle">TOP COMPANIES HIRE HERE</h2>
        <div className="LandingPage-companiesLogos">
          {companyLogos.map((company) => (
            <img
              key={company.id}
              className="LandingPage-companiesLogo"
              src={company.logo}
              alt={company.name}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="LandingPage-footer">
        <div className="LandingPage-footerColumns">
          {footerColumns.map((column) => (
            <div key={column.id} className="LandingPage-footerColumn">
              <h4 className="LandingPage-footerColumnTitle">{column.title}</h4>
              {column.links.map((link) => (
                <a key={link} href="#" className="LandingPage-footerLink">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="LandingPage-footerBottom">
          <p className="LandingPage-footerCopyright">
            © 2026 Placement and Recruitment Platform
          </p>
          <div className="LandingPage-footerSocial">
            {socialIcons.map((social) => (
              <img
                key={social.id}
                className="LandingPage-footerSocialIcon"
                src={social.icon}
                alt={social.name}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
