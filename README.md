# Buyback

https://buyback-delta.vercel.app/

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repo:

- git clone https://github.com/cgtysnsy/buyback.git

2. Install NPM packages:

- npm install
- yarn install

3. Running the App

- npm start
- yarn start

# Project Implementation Details

## General Requirements

- **Pixel Perfect and Responsive Design**: Implemented the design from Figma to be pixel-perfect and fully responsive.
- **Separation of CSS and HTML**: Maintained CSS and HTML in separate files to facilitate ease of maintenance and development.
- **Local Storage of Images**: Stored all image assets locally, ensuring no external hosting.
- **Custom Architecture**: Built the project architecture from scratch without the use of pre-built libraries.
- **Personal Modifications**: Incorporated personal interpretations and modifications throughout the development process.

## Specific Page Implementations

### Popup Window Content (Page 28)

- **Content Structure**:
  - **Title 1**: "Your process is not yet complete"
  - **Title 2**: "Can you tell us why you didn't want to complete the process?"
  - **Combobox with Search Feature**:
    - Options include "Select", "I didn’t like the offer", "I received an offer from another company"
  - **Primary Button**: "Continue"
  - **Secondary Button**: "Exit"
- **Behavior**: The popup window can be closed, leaving the user on the same page.

### Form and Validation (Page 29)

- **Mandatory Fields**: Ensured that at least one textbox and checkbox must be filled in. Custom warning messages are displayed for empty fields.
- **Hover Popup over IBAN Number Field**: Implemented a hover popup for additional information on the IBAN number field.
- **Inline Button Loader on Button 1**: Integrated a 3-second inline button loader, activated upon clicking Button 1.

### Result Page

- **Copy Number Feature**: Added a feature to copy the reference number using an icon.
- **Countdown Timer**: Implemented a countdown timer in JavaScript, resetting to 60 seconds on page transitions.
- **Back Button**: Included a back button on the top-left corner of the page to return to the previous page while preserving data.
- **Countdown Reset on Page Navigation**: Ensured that the countdown timer resets to 60 seconds during page navigations.
