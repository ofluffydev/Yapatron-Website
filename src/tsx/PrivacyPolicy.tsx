const PrivacyPolicy = () => {
    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy for Yapatron Bot</h1>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                <p>Yapatron Bot collects and stores the following information:</p>
                <ul className="list-disc pl-5">
                    <li>Discord User IDs</li>
                    <li>Server IDs where the bot is used</li>
                    <li>Command usage data</li>
                    <li>User-provided content for specific commands</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-5">
                    <li>Provide and maintain the bot's functionality</li>
                    <li>Improve our services based on usage patterns</li>
                    <li>Respond to user inquiries and support requests</li>
                    <li>Prevent misuse and ensure compliance with our Terms of Service</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">3. Data Retention</h2>
                <p>We retain your data for as long as necessary to provide our services. You can request deletion of your data at any time.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
                <p>We do not sell or share your personal information with third parties, except as required by law or to provide our services.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">5. Security</h2>
                <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@kadenfrisk.com.</p>
            </section>

            <p className="text-sm text-gray-600 mt-4">Last updated: 6-29-2024</p>
        </div>
    );
};

export default PrivacyPolicy;