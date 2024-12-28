# BPL Dream 11
## Live Link:-> [Check out my live project here!](https://need-bpl.surge.sh/)

BPL Dream 11 is a React-based cricket player bidding application inspired by the BPL (Bangladesh Premier League). This app allows users to manage virtual coins, select players, and enjoy a dynamic bidding experience. The application includes a **Navbar**, **Banner**, **Player Selection Section**, **Newsletter**, and **Footer** to provide a seamless user experience.

---

## Features

### Navbar
- Displays the user's total coins, starting at 0.
- Dynamically updates as coins are earned or spent.

### Banner Section
- Features a banner with a background, heading, and button.
- Clicking the button increases the user's coins, enabling them to buy players.

### Player Selection Section
- Contains toggle buttons to switch between:
  - **Available Players**: Displays all players available for selection.
  - **Selected Players**: Displays the number of selected players, initially 0.

#### Player Cards
- Each card displays:
  - Player Name
  - Country
  - Role
  - Batting/Bowling Style
  - Image
  - Bidding Price
- Includes a "Choose Player" button to select players.

### Selection Logic
1. Users can select a maximum of 6 players.
2. Duplicate player selection is not allowed.
3. Selection requires sufficient coins; an alert is shown if coins are insufficient.
4. Notifications (powered by **React-Toastify**) provide feedback for successful or invalid actions.

### Selected Players List
- Displays all selected players with details:
  - Player Name
  - Role
  - Image
  - Bidding Price
- Each card includes a "Remove" button to unselect players.
- Includes an **"Add More Players"** button to return to the player selection view.

---

## Additional Sections

### Newsletter
- A well-designed section for users to subscribe to updates.

### Footer
- Custom footer design to complete the layout.

---

## Player Data
Player information is stored in a JSON file with the following details:
- `playerId`
- `name`
- `country`
- `image`
- `role`
- `batting/bowling style`
- `bidding price`

---

## How It Works

1. **Navbar**: Displays and updates total coins dynamically.
2. **Banner Button**: Click to increase coins for purchasing players.
3. **Player Cards**: View player details and select players using the "Choose Player" button.
4. **Selection Rules**:
   - Ensure sufficient coins to purchase a player.
   - Maximum of 6 players allowed.
   - Duplicates are prevented.
5. **Selected Players Section**: Manage your team, view details, and remove players if needed.

---

## Design

### Available Players Page
<div style="text-align: center;">
  <img src="https://i.ibb.co.com/HdyVxgc/BPL-Dream-11-12-27-2024-12-53-AM.png" alt="Image" style="width: 100%;" />
</div>

---

### Selected Players Page
<div style="text-align: center;">
  <img src="https://i.ibb.co.com/kQqKDzn/BPL-Dream-11-12-26-2024-11-26-PM.png" alt="Image" style="width: 100%;" />
</div>