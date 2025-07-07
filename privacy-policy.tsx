import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, Shield, Users } from "lucide-react"

export default function Component() {
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
              Delicious
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
              Welcome to Delicious! We are committed to protecting your privacy and ensuring transparency about how we
              collect, use, and protect your information. This Privacy Policy explains our practices regarding your
              personal data when you use our mobile application and services.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm text-orange-800">
                <strong>Important:</strong> Delicious is a deal aggregation platform that shares the best offers from
                popular retailers like Amazon, Walmart, and others. We do not sell our own products or act as a seller -
                we simply connect you with great deals from trusted retailers.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Email address (for account creation and notifications)</li>
                <li>Name and profile information (optional)</li>
                <li>User preferences and interests</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Usage Information</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>App usage patterns and interactions</li>
                <li>Deals viewed, saved, and shared</li>
                <li>Search queries and browsing history within the app</li>
                <li>Time spent on different sections of the app</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Device Information</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Device type, model, and operating system</li>
                <li>Unique device identifiers</li>
                <li>IP address and general location information</li>
                <li>App version and technical diagnostics</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Service Provision</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                  <li>Curate personalized deal recommendations</li>
                  <li>Improve app functionality and user experience</li>
                  <li>Provide customer support</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Communication</h4>
                <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                  <li>Send deal alerts and notifications</li>
                  <li>Share app updates and new features</li>
                  <li>Respond to your inquiries</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Analytics</h4>
                <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm">
                  <li>Analyze app usage and performance</li>
                  <li>Understand user preferences</li>
                  <li>Improve our deal curation algorithms</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Legal Compliance</h4>
                <ul className="list-disc list-inside space-y-1 text-orange-700 text-sm">
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and abuse</li>
                  <li>Enforce our terms of service</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">We DO NOT sell your personal information</h4>
              <p className="text-red-700 text-sm">
                Your personal data is never sold to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                We may share information in these limited circumstances:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Retail Partners:</strong> When you click on deals, you may be redirected to retailer websites
                  (Amazon, Walmart, etc.). These sites have their own privacy policies.
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party services that help us operate the app (analytics,
                  cloud storage, customer support).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and
                  safety.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger, acquisition, or sale of our business assets.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Third-Party Services and Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">Our app contains links to third-party websites and services, including:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Badge variant="outline" className="mb-2">
                  Retailers
                </Badge>
                <p className="text-sm text-gray-600">Amazon, Walmart, Target, Best Buy, and other partner stores</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Badge variant="outline" className="mb-2">
                  Analytics
                </Badge>
                <p className="text-sm text-gray-600">Google Analytics, Firebase Analytics</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Badge variant="outline" className="mb-2">
                  Advertising
                </Badge>
                <p className="text-sm text-gray-600">Ad networks for relevant deal promotions</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
              <strong>Note:</strong> These third-party services have their own privacy policies. We encourage you to
              review them when you visit their sites or use their services.
            </p>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Technical Measures</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security updates and patches</li>
                  <li>Access controls and authentication</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Organizational Measures</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Limited access to personal data</li>
                  <li>Employee training on data protection</li>
                  <li>Regular security assessments</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              6. Your Rights and Choices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">You have the following rights regarding your personal information:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Access</h5>
                    <p className="text-sm text-gray-600">Request a copy of your personal data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Correction</h5>
                    <p className="text-sm text-gray-600">Update or correct inaccurate information</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Deletion</h5>
                    <p className="text-sm text-gray-600">Request deletion of your personal data</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Portability</h5>
                    <p className="text-sm text-gray-600">Export your data in a portable format</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Opt-out</h5>
                    <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Restriction</h5>
                    <p className="text-sm text-gray-600">Limit how we process your data</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We retain your personal information only as long as necessary for the purposes outlined in this policy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Account Information:</strong> Until you delete your account or request deletion
              </li>
              <li>
                <strong>Usage Data:</strong> Typically retained for 2-3 years for analytics purposes
              </li>
              <li>
                <strong>Communication Records:</strong> Retained for customer support and legal compliance
              </li>
              <li>
                <strong>Marketing Data:</strong> Until you opt-out or unsubscribe
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800">
                <strong>Age Restriction:</strong> Our app is not intended for children under 13 years of age. We do not
                knowingly collect personal information from children under 13. If you are a parent or guardian and
                believe your child has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* International Users */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. International Users</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              If you are accessing our app from outside the United States, please note that your information may be
              transferred to, stored, and processed in the United States where our servers are located.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">For EU Users (GDPR)</h4>
              <p className="text-blue-700 text-sm">
                We comply with the General Data Protection Regulation (GDPR). You have additional rights under GDPR,
                including the right to lodge a complaint with a supervisory authority.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updates to Policy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>10. Updates to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal,
              operational, or regulatory reasons.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">How we notify you of changes:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                <li>In-app notification for significant changes</li>
                <li>Email notification to registered users</li>
                <li>Updated "Last modified" date at the top of this policy</li>
                <li>Prominent notice on our app's main screen</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-500" />
              11. Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">General Inquiries</h4>
                <p className="text-sm text-gray-700">Email: privacy@deliciousapp.com</p>
                <p className="text-sm text-gray-700">Response time: Within 48 hours</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Data Protection Officer</h4>
                <p className="text-sm text-gray-700">Email: dpo@deliciousapp.com</p>
                <p className="text-sm text-gray-700">For GDPR and data rights requests</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 Delicious App. All rights reserved.</p>
          <p className="mt-2">
            This privacy policy is effective as of January 7, 2025, and was last updated on January 7, 2025.
          </p>
        </div>
      </div>
    </div>
  )
}
