"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Trash2, Shield, AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DataDeletionRequest() {
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
              dealicious
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Trash2 className="w-6 h-6 text-red-500" />
            Data Deletion Request
          </h2>
          <p className="text-gray-600">
            This app does not collect any personal data, has no authentication system, and does not process payments inside the app.
          </p>
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

        {/* Important Note */}
        <Alert className="mb-6 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Note:</strong> This app does not collect, store, or process any personal data. There is no authentication or payment system. No data deletion is necessary.
          </AlertDescription>
        </Alert>

        {/* Info Card */}
        <Card className="mb-6 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              What data is collected?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Personal Information</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>No personal information is collected or stored.</li>
                <li>No authentication or user accounts exist.</li>
                <li>No payment or financial data is processed.</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>You're all set!</strong> There is no data to delete. Your privacy is protected by default.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Final Message */}
        <Card>
          <CardHeader>
            <CardTitle>Deletion Request</CardTitle>
            <p className="text-sm text-gray-600">
              No action is required. This app does not collect or store any user data.
            </p>
          </CardHeader>
          <CardContent>
            <div className="text-center text-green-700 font-semibold py-8">
              ✅ You're safe — no personal data exists to delete.
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-6 bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Questions about privacy?</strong>
                </p>
                <p className="text-gray-600">
                  Contact our privacy team at{" "}
                  <a href="mailto:privacy@dealiciousapp.com" className="text-orange-600 hover:underline">
                    privacy@dealiciousapp.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Alternative options:</strong>
                </p>
                <p className="text-gray-600">
                  No data is collected, so no further action is needed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
