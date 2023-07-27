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
            firstName : 'Ruel',
            middleName: 'Flor',
            lastName  : 'Perez',
            nameSuffix: '',
        },
        // ===================================================================================================


        /**
         * Next, please fill in the 'review' object below with your review on me.
         * Guide:
         *        as         - you're reviewing me as what?
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
            content: 'First and foremost, I would like to say a heartfelt thank you very much, Sir Arvic. Honestly, you have been a big part of my success in college. I can confidently say that you are one of the reasons I became enthusiastic about the programming. It all started with you, and that\'s why I became more interested in programming. I\'ve seen you as a very approachable person who loves sharing knowledge and giving good advice. Most importantly, your passion to this industry really inspires me to pursue and learn more about it. Thank you so much, sir. All your advice truly left a lasting mark in my mind. I hope to collaborate with you soon, Master Lodi!!.'
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
            github  : 'https://github.com/ruelperez',
            twitter : 'https://twitter.com/ruelperez',
            facebook: 'https://www.facebook.com/ruel.perez.5473894'
        }
        // ===================================================================================================


        /**
         * That's it!
         * Thank you again!
         */
    }
}
