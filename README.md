The project is to create a small website similar to YouTube using React.js.

The website reads the data from a JSON ﬁle to avoid the need to create a
database

We provide the following ﬁles:
• data.json This ﬁle has all the information to create the video thumbnails
with the relevant data.
• logotype.svg This ﬁle is the one to utilize instead of the oﬃcial YouTube
logo to avoid copyright issues.
• thumbnails/ This folder has images for videos.

Mandatory tasks
HOME PAGE
The home page has a menu bar at the top with a search bar (explained
below), a sidebar with links, and all the videos available in the center.
When you click on a video, it takes you to the playback page to watch it.
? Note: The links on the left side are placeholders, meaning they do not
need to do anything.

PLAYBACK PAGE
This page allows playing a video selected from either the home page or the
search results page.
? Note: The JSON ﬁle has a video-id ﬁeld. Research about a React plugin
that allows to use this data to open the correct video.
? Note: To avoid recreating the comment section, assume that all YouTube
channels have disabled their comment section.

SEARCH FEATURE
The user can search for any video by typing the video's title on the search
bar at the top of the page. This search functionality works both on the
home page and the playback page.

SEARCH RESULTS PAGE
Once a user searches for a video and clicks on the search button, it should
take to a third page that lists the videos that match the exact text.
