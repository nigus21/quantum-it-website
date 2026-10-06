'use client'

import React, { useState } from 'react'
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  FileText,
  Calendar,
  Layers,
} from 'lucide-react'

export interface ConsultationFormBlockProps {
  formMode?: 'consultation' | 'contact'
  tagline?: string
  heading?: string
  description?: string
  showNextSteps?: boolean
  successMessage?: string
}

export const ConsultationFormBlockComponent: React.FC<ConsultationFormBlockProps> = ({
  formMode = 'consultation',
  tagline,
  heading = "Tell Us Your Challenge. We'll Recommend the Right Approach.",
  description,
  showNextSteps = true,
  successMessage = 'Thank you! Your request has been received. Our team will contact you within 1 business day.',
}) => {
  const [requestType, setRequestType] = useState<'consultation' | 'proposal' | 'demo'>(
    'consultation',
  )
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    jobTitle: '',
    email: '',
    phone: '',
    solution: 'Enterprise ERP',
    timeline: 'Immediate (within 30 days)',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section className="container py-8 md:py-12">
      <div className="max-w-3xl mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-3">
          {heading}
        </h2>
        {description && (
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {showNextSteps && formMode === 'consultation' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="p-5 md:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative">
            <span className="text-2xl md:text-3xl font-mono font-black text-emerald-600 mb-1.5 block">
              01
            </span>
            <h4 className="text-base font-bold text-slate-900 mb-1">You Tell Us</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Share your goals, current environment and timeline.
            </p>
          </div>
          <div className="p-5 md:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative">
            <span className="text-2xl md:text-3xl font-mono font-black text-emerald-600 mb-1.5 block">
              02
            </span>
            <h4 className="text-base font-bold text-slate-900 mb-1">We Review</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our specialists study your operational requirements.
            </p>
          </div>
          <div className="p-5 md:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative">
            <span className="text-2xl md:text-3xl font-mono font-black text-emerald-600 mb-1.5 block">
              03
            </span>
            <h4 className="text-base font-bold text-slate-900 mb-1">We Recommend</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              You receive a clear, practical approach and next steps.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-8 md:p-12 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
          {submitted ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Request Received!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto mb-8">
                {successMessage}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formMode === 'consultation' && (
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                    Select Request Type:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setRequestType('consultation')}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        requestType === 'consultation'
                          ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-500/20 shadow-sm'
                          : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 hover:bg-slate-100/70'
                      }`}
                    >
                      <Calendar className="w-5 h-5 mb-2 text-emerald-600" />
                      <div className="font-bold text-sm text-slate-900">Consultation</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Discuss needs with a specialist
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRequestType('proposal')}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        requestType === 'proposal'
                          ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-500/20 shadow-sm'
                          : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 hover:bg-slate-100/70'
                      }`}
                    >
                      <FileText className="w-5 h-5 mb-2 text-emerald-600" />
                      <div className="font-bold text-sm text-slate-900">Proposal</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Technical & commercial proposal
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRequestType('demo')}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        requestType === 'demo'
                          ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-500/20 shadow-sm'
                          : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 hover:bg-slate-100/70'
                      }`}
                    >
                      <Layers className="w-5 h-5 mb-2 text-emerald-600" />
                      <div className="font-bold text-sm text-slate-900">Software Demo</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        See software solutions in action
                      </div>
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Abebe Bikila"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    placeholder="e.g. Dashen Bank / Enterprise"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+251-9..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Solution of Interest
                  </label>
                  <select
                    value={formData.solution}
                    onChange={(e) =>
                      setFormData({ ...formData, solution: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm"
                  >
                    <option value="Enterprise ERP">Enterprise ERP Systems</option>
                    <option value="Biometric Attendance">
                      Biometric Attendance & Workforce Management
                    </option>
                    <option value="Electronic Invoicing">
                      Electronic Invoicing & MOR Integration
                    </option>
                    <option value="Web & Digital Marketing">
                      Website Development & Digital Marketing
                    </option>
                    <option value="Enterprise Networks">
                      Enterprise Network Solutions (LAN/WAN/Wi-Fi)
                    </option>
                    <option value="Systems & Cloud">
                      System & Cloud Solutions (Servers/DR/Backup)
                    </option>
                    <option value="Cybersecurity Solutions">
                      Cybersecurity Solutions & Assessments
                    </option>
                    <option value="Solar Energy">Solar Energy Solutions</option>
                    <option value="EV Charging">
                      EV Charging Supply & Installation
                    </option>
                    <option value="Professional Training">
                      Professional Training Programs
                    </option>
                    <option value="Exam Center">Professional Exam Center</option>
                    <option value="Other">Other Enterprise Enquiry</option>
                  </select>
                </div>
                {formMode === 'consultation' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm"
                    >
                      <option value="Immediate (within 30 days)">
                        Immediate (within 30 days)
                      </option>
                      <option value="1-3 Months">1 - 3 Months</option>
                      <option value="3-6 Months">3 - 6 Months</option>
                      <option value="Planning & Exploration">
                        Planning & Exploration
                      </option>
                    </select>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Description / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your organization's goals, current technical setup or challenge..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-base hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>
                        {formMode === 'consultation'
                          ? 'Submit Consultation Request'
                          : 'Send Message'}
                      </span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                We respect your privacy. Your information is protected under our{' '}
                <a href="/privacy-policy" className="underline hover:text-emerald-700 font-medium">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Contact Information
            </h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Location</strong>
                  <span className="text-slate-600">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Phone</strong>
                  <a
                    href="tel:+251982313233"
                    className="text-slate-600 hover:text-emerald-600 block transition-colors font-medium"
                  >
                    +251-982-31-32-33
                  </a>
                  <a
                    href="tel:+251980116187"
                    className="text-slate-600 hover:text-emerald-600 block transition-colors font-medium"
                  >
                    +251-980-11-61-87
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Email</strong>
                  <a
                    href="mailto:henok@quantumitss.com"
                    className="text-slate-600 hover:text-emerald-600 block transition-colors font-medium"
                  >
                    henok@quantumitss.com
                  </a>
                  <a
                    href="mailto:marketing@quantumitss.com"
                    className="text-slate-600 hover:text-emerald-600 block transition-colors font-medium"
                  >
                    marketing@quantumitss.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Business Hours</strong>
                  <span className="text-slate-600 block">
                    Mon - Fri: 8:30 AM - 5:30 PM
                  </span>
                  <span className="text-slate-600 block">
                    Saturday: 8:30 AM - 1:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50/80 to-teal-50/60 border border-emerald-200/70 text-slate-900 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse-slow" />
              <span>Fast Response Guarantee</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every inquiry is reviewed by our senior technical consultants. You will receive an initial assessment or consultation booking within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
