export default {
    namespaced: true,

    state: {

        /**
         * HEY! Thank you for exerting some efforts in reaching this JavaScript code.
         * May the metaverse gods bless you now and forever!
         *
         * Let's get started, shall we?
         *
         * First, please fill in the 'personal' object below with your data
         * Guide:
         *        title      - your honorific or name title
         *                     examples: 'Mr.', 'Ms.', 'Dr.', 'Engr.'
         *                     this is OPTIONAL (leave empty if you want to stay stupid like me)
         *
         *        firstName  - your first name in proper case
         *                     examples: 'John', 'Mary', 'Bill', 'Anne Billy'
         *                     this is REQUIRED (or I will call you 'Poop', I'm not kidding)
         *
         *        middleName - your middle name in proper case
         *                     examples: 'Delos', 'Reyes', 'Delos Reyes'
         *                     this is OPTIONAL (no need to check your birth certificate)
         *
         *        lastName   - your last name or surname in proper case
         *                     examples: 'Doe', 'Dela Cruz'
         *                     this is REQUIRED (sorry, there's really a need to check your birth certificate)
         *
         *        nameSuffix - your name suffix
         *                     examples: 'Jr.', 'III'
         *                     this is OPTIONAL (leave empty if you don't have this extra baggage in your name)
         *
         */

        // this is that 'personal' object I mentioned above:
        personal: {
            title     : '',
            firstName : 'Louie',
            middleName: 'Molina',
            lastName  : 'Navales',
            nameSuffix: '',
        },
        // ===================================================================================================


        /**
         * Next, please fill in the 'review' object below with your review on me.
         * Guide:
         *        as         - you're reviewing me as my _____?
         *                     examples: 'friend', 'student', 'mentee', 'client', 'co-worker', 'boss'
         *                     this is an ARRAY, so you can assign one or more values
         *                     this is also REQUIRED (or I will tell Dr. Strange to delete you in my memory)
         *
         *        rating     - a number from 1 to 5
         *                     examples: 4.5, 5
         *                     this is REQUIRED (you know what to do)
         *
         *        content    - the actual review
         *                     examples: (come on, examples? really?)
         *                     this is REQUIRED (please be brutally honest)
         *
         */

        // here you go:
        review: {
            as     : ['student', ''],
            rating : 5,
            content: 'I am incredibly grateful to Sir Arvic for his guidance and dedication. His expertise in programming, especially in web development, has given me a strong foundation and the confidence to grow in this field. He simplifies complex concepts, making learning entertaining and effective. His enthusiasm for teaching is extremely inspirational. Highly recommended for anyone looking to master web development!'
        },
        // ===================================================================================================


        /**
         * Finally, please fill in the 'socials' object below with your social media links.
         * Examples:
         *           'https://github.com/kulotsystems',
         *           'https://twitter.com/kulotsystems',
         *           'https://web.facebook.com/kulotsystems'
         */


        // it's your time to shine!
        socials: {
            github  : 'https://github.com/johnlouie09',
            twitter : 'https://x.com/navales_louie',
            facebook: 'https://web.facebook.com/johnlouie.navales/'
        }
        // ===================================================================================================


        /**
         * That's it!
         * Thank you again!
         */
    }
}
