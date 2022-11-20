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
            firstName : 'Ron Hedwig',
            middleName: 'Aquino',
            lastName  : 'Zape',
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
            content: 'I am a student of Sir Arvic since my Senior Highschool. When I was Grade 11, I am new to programming and Sir Arvic was our teacher. He taught programming to us so right and fluently. Even that has no idea of programming can learn from him. I promise he\'s better than watching Youtube. He\'s also better at motivating students that are so down in programming. Also optimistic and will everyday make you special. Because of Sir Arvic, I am now good at programming, coding, communicating, and collaborating with people. Lastly, I am thankful that I\'m one of his students. Sir Arvic is best of best! 😎'
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
            github  : 'https://github.com/ronhedwigzape',
            twitter : 'https://twitter.com/ronhedwigzape',
            facebook: 'https://www.facebook.com/ronhedwig.zape.hogwarts.headmaster'
        }
        // ===================================================================================================


        /**
         * That's it!
         * Thank you again!
         */
    }
}
