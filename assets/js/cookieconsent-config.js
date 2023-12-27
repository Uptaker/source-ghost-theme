import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "bar",
            position: "left",
            equalWeightButtons: false,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        // analytics: {}, uncomment if using analytics
        marketing: {}
    },
    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    title: "Cookie Consent",
                    description: "We use cookies to enhance your experience and for analytics and marketing purposes. By clicking 'Accept All,' you agree to the use of all cookies. Customize settings to manage preferences.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/privacy-policy\" target=\"_blank\">Privacy Policy</a>\n<a href=\"/terms-and-conditions\" target=\"_blank\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences",
                    closeIconLabel: "Close modal",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Customize your cookie settings to control the types of cookies used on this website. Your preferences allow you to manage which categories of cookies are active. Please note that blocking certain types of cookies may impact your experience on the site."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the website to function properly. They ensure basic functionalities and security features of the site, such as enabling navigation and access to secure areas.",
                            linkedCategory: "necessary"
                        },
                        // {
                        //     title: "Analytics Cookies",
                        //     description: "These cookies collect information to help us understand how visitors interact with our website. They are used to analyze and improve our services.",
                        //     linkedCategory: "analytics"
                        // },
                        {
                            title: "Marketing Cookies",
                            description: "These cookies are used to personalize and deliver ads and marketing content based on your interests and browsing habits. Disabling these cookies will still deliver marketing content, but they will no longer be tailored for you.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"mailto:info@wirekat.com\">contact us</a>."
                        }
                    ]
                }
            }
        }
    }
});