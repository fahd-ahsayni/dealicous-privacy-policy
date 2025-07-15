import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Mail, Shield } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Privacy Policy</h2>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 7, 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-500" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Welcome to dealicious! We respect your privacy. This app does not collect, store, or share any personal data.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm text-orange-800">
                <strong>Note:</strong> dealicious is a deal aggregation platform that redirects users to third-party retailers such as Amazon, Walmart, etc. We do not sell anything directly or require user accounts.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What We Collect */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Data Collection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We do not collect, process, or store any user data. There is no authentication system, and we do not use analytics or tracking services.
            </p>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Third-Party Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              When clicking on a deal, you may be redirected to an external retailer’s site. These third-party websites may collect data based on their own privacy policies. We are not responsible for their practices.
            </p>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              This app is not intended for children under 13. Since no data is collected, no data from children is stored.
            </p>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Updates to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              This privacy policy may be updated occasionally. All updates will be reflected in this document with a revised date.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-500" />
              5. Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              If you have any questions about this policy, please contact us:
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg mt-4">
              <p className="text-sm text-gray-700">Email: privacy@dealiciousapp.com</p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="text-center text-sm text-gray-500">
          <p>© 2025 dealicious App. All rights reserved.</p>
          <p className="mt-2">
            Effective date: January 7, 2025
          </p>
        </div>
      </div>
    </div>
  )
}
