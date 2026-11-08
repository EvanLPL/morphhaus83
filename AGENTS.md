## Architecture
- Use a homepage hash link for footer Contact navigation and scroll to its target after the homepage mounts, so cross-page arrivals work before React renders the section.
- Render FAQ answers and FAQPage structured data from the same question groups so search metadata stays aligned with visible content.
- Initialize Google Analytics only from index.html's head through the shared browser-only analytics module using the public Measurement ID, and track page views inside the router; this keeps the ID in one place and prevents duplicate tags without requiring a server.