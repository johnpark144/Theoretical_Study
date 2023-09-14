// ########### Questions #############################################################################
// 트위터 트윗박스 만들기
// Follow the given specifications as closely as you can.
// An example thumbnail and icon SVGs are provided to you in the template.

// --- Tweet
// Background color: #fff
// Border color: #cfd9de
// Border width: 1px
// Border radius: 16px
// Padding: 12px

// --- Thumbnail
// Size: 48px
// Fully rounded

// --- Name
// Color: #000
// Font family: sans-serif
// Font size: 15px
// Font weight: bold

// --- Metadata
// Color: #71767b
// Font family: sans-serif
// Font size: 15px
// Use &middot; for the dot

// --- Message
// Color: #0f1419
// Font family: sans-serif
// Font size: 15px

// --- Actions Row
// Max width: 425px
// Equal spacing between each action

// --- Icon
// Color: #536471
// Size: 16px
// Vertically centered with the count

// --- Action Count
// Color: #536471
// Font size: 13px

// ########### app.js
import './styles.css';
export default function App() {
  return (
    <div>
      <img
        src='https://xsgames.co/randomusers/avatar.php?g=male'
        width='48'
        height='48'
      />
      <svg viewBox='0 0 24 24' width='16' height='16'>
        <g>
          <path d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z'></path>
        </g>
      </svg>
      <svg viewBox='0 0 24 24' width='16' height='16'>
        <g>
          <path d='M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z'></path>
        </g>
      </svg>
      <svg viewBox='0 0 24 24' width='16' height='16'>
        <g>
          <path d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z'></path>
        </g>
      </svg>
      <svg viewBox='0 0 24 24' width='16' height='16'>
        <g>
          <path d='M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z'></path>
          <path d='M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z'></path>
        </g>
      </svg>
    </div>
  );
}

// ########### Solution #############################################################################
// ########### app.js
import './styles.css';

function Tweet({
  profileImage,
  name,
  handle,
  date,
  message,
  replyCount,
  retweetCount,
  likeCount,
}) {
  return (
    <div className="tweet">
      <img
        className="tweet-author-thumbnail"
        src={profileImage}
      />
      <div>
        <div className="tweet-top-row">
          <span className="tweet-author-name">{name}</span>
          <span className="tweet-author-meta">
            @{handle} &middot; {date}
          </span>
        </div>
        <div className="tweet-content">{message}</div>
        <div className="tweet-actions">
          <div className="tweet-action">
            <svg
              className="tweet-icon"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
              </g>
            </svg>
            <span>{replyCount}</span>
          </div>
          <div className="tweet-action">
            <svg
              className="tweet-icon"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <g>
                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
              </g>
            </svg>
            <span>{retweetCount}</span>
          </div>
          <div className="tweet-action">
            <svg
              className="tweet-icon"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <g>
                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
              </g>
            </svg>
            <span>{likeCount}</span>
          </div>
          <div className="tweet-action">
            <svg
              className="tweet-icon"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <g>
                <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="tweet-list">
      <Tweet
        profileImage="https://xsgames.co/randomusers/avatar.php?g=male"
        name="John Doe"
        handle="johndoe"
        date="Dec 25"
        message="I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it."
        replyCount="1,094"
        retweetCount="512"
        likeCount="512"
      />
    </div>
  );
}


// ########### style.css
// body {
//     background-color: #fff;
//     font-family: sans-serif;
//   }
  
//   .tweet-list {
//     display: flex;
//     flex-direction: column;
//     row-gap: 12px;
//   }
  
//   .tweet {
//     --spacing: 12px;
  
//     background-color: #fff;
//     border: 1px solid #cfd9de;
//     border-radius: 16px;
//     column-gap: var(--spacing);
//     display: flex;
//     font-size: 15px;
//     padding: var(--spacing);
//   }
  
//   .tweet-top-row {
//     margin-bottom: 2px;
//   }
  
//   .tweet-author-thumbnail {
//     --thumbnail-size: 48px;
  
//     border-radius: var(--thumbnail-size);
//     height: var(--thumbnail-size);
//     width: var(--thumbnail-size);
//   }
  
//   .tweet-author-name {
//     color: #000;
//     font-weight: bold;
//   }
  
//   .tweet-author-meta {
//     color: #71767b;
//     margin-left: 4px;
//   }
  
//   .tweet-content {
//     color: #0f1419;
//   }
  
//   .tweet-actions {
//     color: #536471;
//     font-size: 13px;
//     display: flex;
//     justify-content: space-between;
//     margin-top: var(--spacing);
//     max-width: 425px;
//   }
  
//   .tweet-action {
//     align-items: center;
//     display: flex;
//     column-gap: var(--spacing);
//   }
  
//   .tweet-icon {
//     --icon-size: 16px;
  
//     fill: currentColor;
//     height: var(--icon-size);
//     width: var(--icon-size);
//   }
  
