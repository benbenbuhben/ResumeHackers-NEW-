# ResumeHackers


Problem Domain: The puroose of the app is to facilitate the generation of stuent resumes into the Code Fellow standard resume template. Code Fellows requires a standard resume templete as a result of feedback from partner companies.

Prior to this app, students were reuqired to manually format and submit their resumes. Many times the Code Fellows staff had to retype the resumes into the standard template.

This app provides users fields into which they can enter their resume information (personal details, employment history, eductation, etc). The app will format the resume into the Code Fellows standard and allow users the ability to save as a PDF or print.

User Stories:

As a code fellows student and eventual job seeker we want: - The ability to generate a resume by adding information into a template rather than creating it from scratch. - A resume that contains all the required information and meets industry standards. - The ability to save a resume to PDF and print so that it can be sent to potential employers.

As Code Fellows we want: - The ability to have students generate a resume by adding information in a template rather than Brandy having to type it manually. - A resume that contains all required information and meets industry standards and needs of partner companies. - Ability to save resume to a PDF for reference or to send to partner comapnies.

As a developer we want: - To use local storage to store log-in and resume information so that the student does not have to enter it everytime. - To create a nice form for users to enter the required information in a user friendly manner. - Styling throughout the app to show our skills and desine sense.

NOTES: 

We used the following GitHub library to incorporate the pdf conversion: https://github.com/Xportability/css-to-pdf
  - Currently, it only works when the repo is cloned and then loaded locally. The pdf button throws errors on the published site, which we suspect has to do with GitHub's secure server (https vs http). Solving this is high-priority.

The removeAllText function is taken directly from the following StackOverflow thread: https://stackoverflow.com/questions/32247836/remove-all-text-content-from-html-div-but-keep-html-tags-and-structure

This is a recursive function that uses the nodeType property to distinguish different HTML components such as elements, text content, comments, etc. It loops through the passed-in element and when it finds text content (Node type = 3), it removes it. It does this until there is no more text and then keeps going until it finds another element (within the the parent element), and then calls itself (the recursive part). 

