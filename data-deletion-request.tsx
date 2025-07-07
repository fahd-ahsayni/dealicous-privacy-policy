"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Trash2, Shield, AlertTriangle, CheckCircle, ArrowLeft, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function DataDeletionRequest() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    reason: "",
    confirmEmail: "",
    additionalInfo: "",
  })
  const [agreements, setAgreements] = useState({
    confirmIdentity: false,
    understandConsequences: false,
    confirmDeletion: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = "Email address is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.confirmEmail) {
      newErrors.confirmEmail = "Please confirm your email address"
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Email addresses do not match"
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason for deletion"
    }

    if (!agreements.confirmIdentity) {
      newErrors.confirmIdentity = "Please confirm your identity"
    }

    if (!agreements.understandConsequences) {
      newErrors.understandConsequences = "Please acknowledge the consequences"
    }

    if (!agreements.confirmDeletion) {
      newErrors.confirmDeletion = "Please confirm your deletion request"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleAgreementChange = (field: string, checked: boolean) => {
    setAgreements((prev) => ({ ...prev, [field]: checked }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-green-800">Request Submitted Successfully</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-green-700">Your data deletion request has been received and is being processed.</p>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
                  <div className="space-y-3 text-sm text-green-700">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>We'll verify your identity within 24-48 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>You'll receive a confirmation email with next steps</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Data deletion will be completed within 30 days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Final confirmation will be sent once completed</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-blue-800">Reference Number</span>
                  </div>
                  <p className="text-blue-700 font-mono text-lg">DEL-{Date.now().toString().slice(-8)}</p>
                  <p className="text-sm text-blue-600 mt-1">Please save this reference number for your records</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Link href="/privacy-policy">
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Privacy Policy
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      email: "",
                      fullName: "",
                      reason: "",
                      confirmEmail: "",
                      additionalInfo: "",
                    })
                    setAgreements({
                      confirmIdentity: false,
                      understandConsequences: false,
                      confirmDeletion: false,
                    })
                  }}
                  variant="outline"
                >
                  Submit Another Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              D
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Delicious
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Trash2 className="w-6 h-6 text-red-500" />
            Data Deletion Request
          </h2>
          <p className="text-gray-600">Request the permanent deletion of your personal data from our systems</p>
        </div>

        {/* Navigation */}
        <div className="mb-6">
          <Link href="/privacy-policy">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4" />
              Back to Privacy Policy
            </Button>
          </Link>
        </div>

        {/* Important Information */}
        <Alert className="mb-6 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Important:</strong> Data deletion is permanent and cannot be undone. Please read the consequences
            below carefully before proceeding.
          </AlertDescription>
        </Alert>

        {/* Consequences Card */}
        <Card className="mb-6 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              What will be deleted?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Personal Information</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Your account and profile data</li>
                  <li>Email address and preferences</li>
                  <li>Saved deals and favorites</li>
                  <li>Search history and interactions</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Consequences</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>You'll lose access to your account</li>
                  <li>All personalized recommendations will be lost</li>
                  <li>You won't receive deal notifications</li>
                  <li>This action cannot be reversed</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Some data may be retained for legal compliance, fraud prevention, or legitimate
                business purposes as outlined in our Privacy Policy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Request Form */}
        <Card>
          <CardHeader>
            <CardTitle>Deletion Request Form</CardTitle>
            <p className="text-sm text-gray-600">Please fill out all required fields to process your request</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Personal Information</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmEmail">
                    Confirm Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="confirmEmail"
                    type="email"
                    value={formData.confirmEmail}
                    onChange={(e) => handleInputChange("confirmEmail", e.target.value)}
                    placeholder="Confirm your email address"
                    className={errors.confirmEmail ? "border-red-500" : ""}
                  />
                  {errors.confirmEmail && <p className="text-sm text-red-600">{errors.confirmEmail}</p>}
                </div>
              </div>

              {/* Reason for Deletion */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Reason for Deletion</h3>

                <div className="space-y-2">
                  <Label htmlFor="reason">
                    Primary Reason <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.reason ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a reason</option>
                    <option value="no-longer-using">No longer using the app</option>
                    <option value="privacy-concerns">Privacy concerns</option>
                    <option value="too-many-notifications">Too many notifications</option>
                    <option value="found-alternative">Found alternative service</option>
                    <option value="account-security">Account security concerns</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.reason && <p className="text-sm text-red-600">{errors.reason}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    placeholder="Please provide any additional details about your request..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Confirmations */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Required Confirmations</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="confirmIdentity"
                      checked={agreements.confirmIdentity}
                      onCheckedChange={(checked) => handleAgreementChange("confirmIdentity", checked as boolean)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="confirmIdentity" className="text-sm font-medium">
                        I confirm that I am the owner of this account <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-xs text-gray-600">
                        I understand that providing false information may delay or prevent processing of this request.
                      </p>
                      {errors.confirmIdentity && <p className="text-sm text-red-600">{errors.confirmIdentity}</p>}
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="understandConsequences"
                      checked={agreements.understandConsequences}
                      onCheckedChange={(checked) => handleAgreementChange("understandConsequences", checked as boolean)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="understandConsequences" className="text-sm font-medium">
                        I understand the consequences of data deletion <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-xs text-gray-600">
                        I acknowledge that this action is permanent and will result in loss of access to my account and
                        all associated data.
                      </p>
                      {errors.understandConsequences && (
                        <p className="text-sm text-red-600">{errors.understandConsequences}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="confirmDeletion"
                      checked={agreements.confirmDeletion}
                      onCheckedChange={(checked) => handleAgreementChange("confirmDeletion", checked as boolean)}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="confirmDeletion" className="text-sm font-medium">
                        I want to permanently delete my data <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-xs text-gray-600">
                        I confirm that I want to proceed with the permanent deletion of my personal data from Delicious.
                      </p>
                      {errors.confirmDeletion && <p className="text-sm text-red-600">{errors.confirmDeletion}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Time Info */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-blue-800">Processing Timeline</span>
                </div>
                <div className="text-sm text-blue-700 space-y-1">
                  <p>• Identity verification: 24-48 hours</p>
                  <p>• Data deletion completion: Up to 30 days</p>
                  <p>• Final confirmation: Within 5 days of completion</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" disabled={isLoading} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing Request...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Submit Deletion Request
                    </>
                  )}
                </Button>
                <Link href="/privacy-policy">
                  <Button type="button" variant="outline" className="px-8 bg-transparent">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-6 bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Questions about data deletion?</strong>
                </p>
                <p className="text-gray-600">
                  Contact our privacy team at{" "}
                  <a href="mailto:privacy@deliciousapp.com" className="text-orange-600 hover:underline">
                    privacy@deliciousapp.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Alternative options:</strong>
                </p>
                <p className="text-gray-600">
                  Consider adjusting your privacy settings or unsubscribing from notifications instead of full deletion.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
