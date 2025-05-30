---

## 📄 Project Description – FAQ Accordion Section

This project is a fully responsive and interactive FAQ (Frequently Asked Questions) section built using modern front-end technologies including HTML5, CSS3, and vanilla JavaScript. It is designed to enhance user engagement by providing clear, visually appealing, and easy-to-navigate answers to common user queries on any business or personal website.

The core feature of this component is the **accordion behavior**, where each FAQ item can be individually expanded or collapsed by clicking on it. Only one question is visible at a time, helping maintain a clean layout and reducing user overwhelm. This improves the user experience significantly, especially on mobile devices or when there are many FAQ entries.

Each FAQ block contains a title (question), a plus icon indicating toggle capability, and associated hidden content (answer) which becomes visible when activated. In addition to the text answer, each block also includes a related image that dynamically appears alongside the expanded content. The image adds a visual context to the answer and improves the overall aesthetics.

The accordion behavior is handled entirely by a lightweight JavaScript script (`main.js`). The logic ensures that:

- Clicking on any FAQ item toggles its active state.
- If an item is already open and clicked again, it collapses.
- When a new item is opened, all other items close automatically.
- The plus icon rotates smoothly to indicate expansion or collapse.

From a design perspective, the project uses **Google Fonts (Montserrat)** for clean and modern typography. The FAQ section has a dark theme (`#181d27` as the background) with subtle gradients and transitions that give it a sleek, polished look. The layout is built using Flexbox and is fully responsive across screen sizes, with additional media queries placed in `media.css` for device-specific adjustments.

Image sizes and icons are optimized for web usage to reduce load times without sacrificing visual quality. All icons (e.g., the plus symbol) and FAQ images are stored in the `assests/images/` directory, organized into folders for easier maintenance and scalability.

This component is ideal for portfolios, SaaS websites, digital agencies, and product landing pages. It can be easily integrated into any existing HTML structure or adapted into frameworks like React or Vue with minimal effort.

### Key Highlights:

- Clean and minimal UI/UX
- Expand/collapse animation with smooth transitions
- Only one active FAQ at a time (auto-collapse others)
- Click-to-toggle functionality using pure JavaScript
- Custom hover effects and animated icons
- Rich media support with optional images per answer
- No external dependencies or libraries

### Use Cases:

- Help center or support pages
- Product or service FAQs
- Onboarding sections for apps or software
- Company or team Q\&A segments

Whether you're building a static site or looking to enhance user interaction on an existing project, this FAQ accordion module offers a lightweight yet powerful solution. Feel free to customize the styling, structure, or behavior as needed for your own use case.

---
