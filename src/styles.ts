import { css } from 'lit';

export const styles = css`
  input[type="text"] {
  width: 100%;
  max-width: 400px; /* Set a maximum width */
  padding: 12px 20px; /* Add some padding */
  margin: 10px 0; /* Add some margin */
  display: inline-block; /* Inline-block for better styling */
  border: 2px solid #ccc; /* Light grey border */
  border-radius: 5px; /* More rounded corners */
  box-sizing: border-box; /* Ensure padding and border don't affect width */
  font-size: 16px; /* Increase the font size */
  transition: all 0.3s ease-in-out; /* Smooth transition for all properties */
}

/* Styling for the focus state */
input[type="text"]:focus {
  border-color: #66afe9; /* Light blue border on focus */
  box-shadow: 0 0 8px rgba(102, 175, 233, 0.6); /* Blue shadow on focus */
  outline: none; /* Remove the default outline */
}

/* Styling for the placeholder text */
input[type="text"]::placeholder {
  color: #999; /* Medium grey placeholder text */
  font-style: italic; /* Italicize the placeholder text */
}

/* Adding icon inside the input field */
.input-container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.input-container input[type="text"] {
  padding-left: 40px; /* Add space for the icon */
}

.input-container .icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999; /* Icon color */
  font-size: 20px; /* Icon size */
}


/* CSS */
.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

.display {
  font-size: 1.2em;
  font-style: italic;
  color: #0a3d19; 
  padding-top: 10px;
  margin:5px;
}
 
`;